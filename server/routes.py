from fastapi import APIRouter, Body, Request, Response, HTTPException, status, Query
from fastapi.encoders import jsonable_encoder
from typing import List

from models import Record, RecordUpdate

router = APIRouter()

@router.get("/", response_description="List all records", response_model=List[Record])
def list_records(request: Request):
    records = list(request.app.database["records"].find(limit=100))
    return records

@router.get('/search_records', response_description="List all records", response_model=List[Record])
async def search_records(recordType: str, category: str, request: Request):
    try:
        # Filter documents based on the 'category' field
        filtered_records = list(request.app.database["records"].find({"recordType": recordType, "category": category}))
        
        return filtered_records
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 
   
@router.post("/", response_description="Create a new record", status_code=status.HTTP_201_CREATED, response_model=Record)
def create_record(request: Request, record: Record = Body(...)):
    record = jsonable_encoder(record)
    new_record = request.app.database["records"].insert_one(record)
    print(new_record)
    created_record = request.app.database["records"].find_one(
        {"_id": new_record.inserted_id}
    )
    return created_record

@router.get("/{id}", response_description="Get a single record by id", response_model=Record)
def find_record(id: str, request: Request):
    if (record := request.app.database["records"].find_one({"_id": id})) is not None:
        return record
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Record with ID {id} not found")

@router.put("/{id}", response_description="Update a record", response_model=Record)
def update_record(id: str, request: Request, record: RecordUpdate = Body(...)):
    record = {k: v for k, v in record.to_dict().items() if v is not None}
    if len(record) >= 1:
        update_result = request.app.database["records"].update_one(
            {"_id": id}, {"$set": record}
        )

        if update_result.modified_count == 0:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Record with ID {id} not found")

    if (
        existing_record := request.app.database["records"].find_one({"_id": id})
    ) is not None:
        return existing_record

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Record with ID {id} not found")

@router.delete("/{id}", response_description="Delete a record")
def delete_record(id: str, request: Request, response: Response):
    delete_result = request.app.database["records"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        response.status_code = status.HTTP_204_NO_CONTENT
        return response

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Record with ID {id} not found")