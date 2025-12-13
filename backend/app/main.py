from fastapi import FastAPI
import psutil
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app = FastAPI(
    title="Personal API Dashboard",
    version="1.0.0"
)

@app.get("/")
def root():
    return {"message": "Personal API Dashboard is running."}

@app.get("/system")
def system_stats():
    return {
        "cpu": psutil.cpu_percent(interval=0.1),
        "memory": psutil.virtual_memory().percent,
        "disk": psutil.disk_usage('/').percent
    }
