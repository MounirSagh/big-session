from pydantic import BaseModel
from typing import Optional

class BugItemBase(BaseModel):
    title: str
    description: str
    status: str
    priority: str
    assignee: str

class BugItemCreate(BugItemBase):
    pass

class BugItemResponse(BugItemBase):
    id: int

    class Config:
        orm_mode = True