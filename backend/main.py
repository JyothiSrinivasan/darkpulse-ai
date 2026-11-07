import os
import sys
from pathlib import Path

# Add current folder and parent folder to Python system path
current_dir = Path(__file__).resolve().parent
parent_dir = current_dir.parent

if str(current_dir) not in sys.path:
  sys.path.insert(0, str(current_dir))
if str(parent_dir) not in sys.path:
  sys.path.insert(0, str(parent_dir))

from fastapi import FastAPI, HTTPException, Query, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.api.routes import agents, analyses
from backend.departments import get_all_departments


app = FastAPI(
    title="DarkPulse AI",
    description="Detect the Pulse of Every Threat - Cybersecurity AI Fleet",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(agents.router, prefix="/api/v1")
app.include_router(analyses.router, prefix="/api/v1")

@app.get("/api/v1/departments")
async def list_departments():
    """Returns the 8 general office departments operating DarkPulse AI."""
    depts = get_all_departments()
    return {"total": len(depts), "departments": depts}

@app.get("/health")
async def health_check():
    return {
        "status": "alive",
        "company": "DarkPulse AI",
        "tagline": "Detect the Pulse of Every Threat",
        "version": "0.1.0",
        "agents_online": 3,
        "agents_planned": 14,
        "departments_active": 8
    }

@app.get("/")
async def root():
    return {
        "message": "DarkPulse AI Backend is active.",
        "docs": "Visit http://127.0.0.1:8000/docs for the interactive API explorer."
    }