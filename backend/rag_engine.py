import os
import shutil
from typing import List
from langchain_community.document_loaders import PyMuPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma

# Configuration
CHROMA_DB_DIR = os.path.join(os.path.dirname(__file__), "chroma_db")
UPLOADS_DIR = os.path.join(os.path.dirname(__file__), "uploads")

os.makedirs(UPLOADS_DIR, exist_ok=True)

# Initialize Embeddings model (downloads ~80MB model on first run)
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

# Initialize ChromaDB Vector Store
vector_store = Chroma(persist_directory=CHROMA_DB_DIR, embedding_function=embeddings)


def ingest_pdf(file_path: str, filename: str) -> int:
    """Parses a PDF, chunks the text, and stores embeddings in ChromaDB.
    Clears the existing database first to prioritize the new textbook."""
    global vector_store
    try:
        # Clear existing collection so old textbooks don't interfere
        try:
            vector_store.delete_collection()
            # Re-initialize the vector store after deleting the collection
            vector_store = Chroma(persist_directory=CHROMA_DB_DIR, embedding_function=embeddings)
        except Exception as e:
            print(f"Warning: Could not delete collection (might be empty): {e}")

        # 1. Load the PDF using PyMuPDFLoader for much better text extraction formatting
        loader = PyMuPDFLoader(file_path)
        documents = loader.load()

        # 2. Split the text into manageable chunks
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            length_function=len
        )
        chunks = text_splitter.split_documents(documents)

        # Add metadata for tracking
        for chunk in chunks:
            chunk.metadata["source"] = filename

        # 3. Store in Vector Database
        vector_store.add_documents(chunks)
        
        return len(chunks)
    except Exception as e:
        print(f"Error ingesting PDF: {e}")
        raise e


def query_textbook(query: str, k: int = 2) -> str:
    """Searches the vector store for the query and returns the most relevant chunks."""
    try:
        # Perform similarity search
        results = vector_store.similarity_search(query, k=k)
        
        if not results:
            return "I couldn't find anything about that in the uploaded textbooks. Please try rephrasing or upload a textbook covering this topic."

        # Format the response using the raw textbook chunks
        # (Since we don't assume an LLM API key is present, we return the textbook excerpts)
        response = "<strong>📚 According to your uploaded textbooks:</strong><br><br>"
        
        for i, doc in enumerate(results):
            source = doc.metadata.get('source', 'Unknown Book')
            page = doc.metadata.get('page', 'Unknown')
            # Escape HTML characters safely
            content = doc.page_content.replace("<", "&lt;").replace(">", "&gt;").replace("\n", "<br>")
            
            response += f"<em>Excerpt {i+1} (Source: {source}, Page {page}):</em><br>"
            response += f"<div style='border-left: 3px solid #6366f1; padding-left: 10px; margin-bottom: 15px; color: #a1a1aa;'>{content}</div>"

        response += "<br>Let me know if you want to explore another topic!"
        return response

    except Exception as e:
        print(f"Error querying database: {e}")
        return "Sorry, I encountered an error while searching the textbook database."
