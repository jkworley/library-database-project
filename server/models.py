import uuid
from typing import Optional
from pydantic import BaseModel, Field
from bson import ObjectId

class Record(BaseModel):
    id: ObjectId = Field(default_factory=uuid.uuid4, alias="_id")
    title: str = Field(...)
    authors: list = Field(...)
    publisher: str = Field(...)
    publishedDate: str = Field(...)
    description: str = Field(...)
    pageCount: int = Field(...)
    categories: list = Field(...)
    imageLinks: object = Field(...)
    googleBooksId: str = Field(...)
    recordType: str = Field(...)

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_schema_extra = {
            "example": {
                "_id":"64e4dedd87869470c6b53e6b",
                "title":"Concerto for Bass Tuba and Orchestra",
                "authors":[
                    "Ralph Vaughan Williams"
                ],
                "publisher":"Oxford University Press",
                "publishedDate":"1979",
                "description":"The Concerto for Bass Tuba and Orchestra was composed in 1953-4 to mark the 50th anniversary of the formation of the LSO and was written for the orchestra's principal tuba player, Philip Catelinet. It was the first major concerto to be written for the instrument, and remains today the outstanding work of its kind.",
                "pageCount":80,
                "categories":[
                    "Concertos (Tuba)"
                ],
                "imageLinks":{
                    "smallThumbnail":"http://books.google.com/books/content?id=vM4IAQAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                    "thumbnail":"http://books.google.com/books/content?id=vM4IAQAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
                },
                "googleBooksId":"vM4IAQAAMAAJ",
                "recordType":"Sheet Music"
            }
        }
        json_encoders = {ObjectId: str}

class RecordUpdate(BaseModel):
    title: Optional[str]
    author: Optional[str]
    synopsis: Optional[str]

    class Config:
        json_schema_extra = {
            "example": {
                "title": "Don Quixote",
                "author": "Miguel de Cervantes",
                "synopsis": "Don Quixote is a Spanish novel by Miguel de Cervantes..."
            }
        }