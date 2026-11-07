@echo off
echo Starting DarkPulse AI Backend...
start cmd /k "cd /d C:\Users\JYOTHI\Desktop\final project\darkpulse-ai\backend && venv\Scripts\activate && uvicorn main:app --reload --port 8000"

echo Starting DarkPulse AI Frontend...
start cmd /k "cd /d C:\Users\JYOTHI\Desktop\final project\darkpulse-ai\frontend && npm run dev"

timeout /t 3
start http://localhost:3000
echo DarkPulse AI is running locally at http://localhost:3000!
