from typing import List, Optional
from fastapi import APIRouter, HTTPException, Depends, Request, Response
from sqlalchemy.orm import Session
from pydantic import BaseModel, Field

from backend.database import get_db, engine, Base
from backend.agents.orchestrator import run_agent_analysis
from backend.agents.agent_registry import get_agent_by_id
from backend.services.analysis_store import save_analysis, get_analyses_history, get_analysis_by_id
from backend.services.pdf_report import generate_analysis_pdf
from backend.services.rate_limiter import limiter

Base.metadata.create_all(bind=engine)

router = APIRouter(prefix="/analyses", tags=["Analyses Execution"])

class AnalysisRequest(BaseModel):
    agent_id: str = Field(..., description="ID of agent to run e.g. pulse_lure")
    input_type: str = Field("text", description="e.g. domain, email_text, alert_json")
    content: str = Field(..., description="The payload/domain/email to analyze")
    authorization_confirmed: bool = Field(True, description="Must confirm authorization")

@router.post("")
async def execute_analysis(req: AnalysisRequest, request: Request, db: Session = Depends(get_db)):
    if not req.authorization_confirmed:
        raise HTTPException(status_code=403, detail="Authorization confirmation required.")

    # 1. Fetch Agent Limit Parameters
    agent_meta = get_agent_by_id(req.agent_id)
    if not agent_meta:
        raise HTTPException(status_code=400, detail=f"Unknown agent '{req.agent_id}'")

    # 2. Extract Client IP
    client_ip = request.client.host if request.client else "127.0.0.1"

    # 3. Check Rate Limit
    allowed, retry_after = limiter.is_allowed(
        client_ip=client_ip,
        agent_id=req.agent_id,
        max_limit=agent_meta.max_requests_per_hour
    )

    if not allowed:
        raise HTTPException(
            status_code=429,
            detail=f"Rate limit exceeded for {agent_meta.name}. Limit is {agent_meta.max_requests_per_hour} requests/hour. Please retry in {retry_after} seconds."
        )

    # 4. Execute Analysis
    input_payload = {"input_type": req.input_type, "content": req.content}
    result = await run_agent_analysis(req.agent_id, input_payload)
    
    if "error" in result:
        raise HTTPException(status_code=400, detail=result["error"])

    # 5. Persist Record
    record = save_analysis(
        db=db,
        agent_id=req.agent_id,
        mode=result.get("mode", "CONCEPT"),
        input_type=req.input_type,
        content=req.content,
        result_dict=result
    )

    response = result.copy()
    response["analysis_id"] = record.id
    response["created_at"] = record.created_at.isoformat() + "Z"
    return response

@router.get("")
async def list_history(limit: int = 50, db: Session = Depends(get_db)):
    records = get_analyses_history(db, limit=limit)
    return {"total": len(records), "history": [r.to_dict() for r in records]}

@router.get("/{analysis_id}")
async def get_single_analysis(analysis_id: str, db: Session = Depends(get_db)):
    record = get_analysis_by_id(db, analysis_id)
    if not record:
        raise HTTPException(status_code=404, detail="Analysis record not found")
    return record.to_dict()

@router.get("/{analysis_id}/report.pdf")
async def download_pdf_report(analysis_id: str, db: Session = Depends(get_db)):
    record = get_analysis_by_id(db, analysis_id)
    if not record:
        raise HTTPException(status_code=404, detail="Analysis record not found")
    
    pdf_buffer = generate_analysis_pdf(record.to_dict())
    
    filename = f"DarkPulse_Report_{record.agent_id}_{analysis_id[:8]}.pdf"
    return Response(
        content=pdf_buffer.getvalue(),
        media_type="application/pdf",
        headers={"Content-Disposition": f"attachment; filename={filename}"}
    )