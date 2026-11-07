import json
from sqlalchemy.orm import Session
from backend.models.analysis import AnalysisRecord

def save_analysis(db: Session, agent_id: str, mode: str, input_type: str, content: str, result_dict: dict) -> AnalysisRecord:
    # Truncate content summary for privacy/clean display
    summary = content[:100] + "..." if len(content) > 100 else content
    
    record = AnalysisRecord(
        agent_id=agent_id,
        mode=mode,
        input_type=input_type,
        content_summary=summary,
        result_json=json.dumps(result_dict)
    )
    db.add(record)
    db.commit()
    db.refresh(record)
    return record

def get_analyses_history(db: Session, limit: int = 50):
    return db.query(AnalysisRecord).order_by(AnalysisRecord.created_at.desc()).limit(limit).all()

def get_analysis_by_id(db: Session, analysis_id: str):
    return db.query(AnalysisRecord).filter(AnalysisRecord.id == analysis_id).first()