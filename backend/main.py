# Override sqlite3 with pysqlite3 for cloud environments (Render, Docker, etc.)
try:
    __import__('pysqlite3')
    import sys
    sys.modules['sqlite3'] = sys.modules.pop('pysqlite3')
except ImportError:
    pass  # Running locally with a modern SQLite — no override needed

import os
import shutil
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
import rag_engine

app = FastAPI(title="Fields & Waves AI Backend")

# Allow CORS for local frontend development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    query: str

class ChatResponse(BaseModel):
    response: str

@app.post("/upload")
async def upload_textbook(file: UploadFile = File(...)):
    """Uploads a PDF, saves it, and ingests it into the ChromaDB vector store."""
    if not file.filename.endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are supported.")
    
    file_path = os.path.join(rag_engine.UPLOADS_DIR, file.filename)
    
    try:
        # Save file to disk
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
        
        # Ingest into vector store
        num_chunks = rag_engine.ingest_pdf(file_path, file.filename)
        
        return {"status": "success", "filename": file.filename, "chunks_processed": num_chunks}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to process PDF: {str(e)}")

@app.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: ChatRequest):
    """Takes a query, searches the textbook database, and returns the response."""
    query = request.query.strip()
    if not query:
        raise HTTPException(status_code=400, detail="Query cannot be empty.")
    
    response_text = rag_engine.query_textbook(query)
    return ChatResponse(response=response_text)

# ---------- Serve Frontend Static Files ----------
# Determine the frontend directory (one level up from backend/)
FRONTEND_DIR = os.path.join(os.path.dirname(__file__), "..")

# Mount the images folder
app.mount("/images", StaticFiles(directory=os.path.join(FRONTEND_DIR, "images")), name="images")

# Serve individual frontend files
@app.get("/")
async def serve_index():
    return FileResponse(os.path.join(FRONTEND_DIR, "index.html"))

@app.get("/{filename:path}")
async def serve_static(filename: str):
    """Catch-all route to serve frontend static files (JS, CSS, etc.)."""
    file_path = os.path.join(FRONTEND_DIR, filename)
    if os.path.isfile(file_path):
        return FileResponse(file_path)
    # Fallback to index.html for SPA-like behavior
    return FileResponse(os.path.join(FRONTEND_DIR, "index.html"))

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=False)
