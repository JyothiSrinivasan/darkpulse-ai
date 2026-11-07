@echo off
if exist "C:\Users\JYOTHI\Desktop\final project\darkpulse-ai\frontend\.next" (
    rmdir /s /q "C:\Users\JYOTHI\Desktop\final project\darkpulse-ai\frontend\.next"
)

echo Starting DarkPulse AI Backend (Python FastAPI)...
start "DarkPulse Backend" cmd /k "cd /d C:\Users\JYOTHI\Desktop\final project\darkpulse-ai\backend && python -m uvicorn main:app --reload --port 8000"

echo Starting DarkPulse AI Frontend (Next.js)...
start "DarkPulse Frontend" cmd /k "cd /d C:\Users\JYOTHI\Desktop\final project\darkpulse-ai\frontend && npm run dev"

echo Opening local platform in browser...
timeout /t 5
start http://localhost:3000
