from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.api.routes import agents, analyses

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

@app.get("/health")
async def health_check():
    return {
        "status": "alive",
        "company": "DarkPulse AI",
        "tagline": "Detect the Pulse of Every Threat",
        "version": "0.1.0",
        "agents_online": 3,
        "agents_planned": 14
    }

@app.get("/")
async def root():
    return {
        "message": "DarkPulse AI Backend is active.",
        "docs": "Visit http://127.0.0.1:8000/docs for the interactive API explorer."
    }