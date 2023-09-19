from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import dotenv_values
from pymongo import MongoClient
from routes import router as book_router
from typing import List

from models import Record

# TO START SERVER
# python -m uvicorn main:app --reload

config = dotenv_values(".env")

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.on_event("startup")
def startup_db_client():
    app.mongodb_client = MongoClient(config["ATLAS_URI"])
    app.database = app.mongodb_client[config["DB_NAME"]]
    print("Connected to the MongoDB database!")

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

# MOVED /SEARCH_RECORDS ROUTE TO routes.py
# @app.get('/search_records/', response_description="List all records", response_model=List[Record])
# async def search_records(recordType: str, category: str):
#     try:
#         # Filter documents based on the 'category' field
#         filtered_records = list(app.database["records"].find({"recordType": recordType, "category": category}))
        
#         return filtered_records
    
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

app.include_router(book_router, tags=["records"], prefix="/records")