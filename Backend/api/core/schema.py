from pydantic import BaseModel
from typing import Optional


class UserBase(BaseModel):
    username: str
    email: str
    password: str
    is_admin: bool = False

class UserCreate(UserBase):
    pass

class UserResponse(UserBase):
    id: int

    class Config:
        orm_mode = True

class BugItemBase(BaseModel):
    title: str
    description: str
    status: str
    priority: str
    assignee_id: Optional[int]

class BugItemCreate(BugItemBase):
    pass

class BugItemResponse(BugItemBase):
    id: int
    assignee: Optional[UserResponse]

    class Config:
        orm_mode = True
        
