# Use Python 3.11 slim image for smaller size
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy backend requirements and install dependencies first (for Docker cache)
COPY backend/requirements.txt /app/backend/requirements.txt
RUN pip install --no-cache-dir -r /app/backend/requirements.txt

# Copy the entire project (frontend + backend)
COPY . /app/

# Set the working directory to backend for running the server
WORKDIR /app/backend

# Expose the port (Cloud Run sets PORT env variable, default 8080)
EXPOSE 8080

# Start the FastAPI server
CMD ["python", "main.py"]
