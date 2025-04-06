from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List
import crud, dependencies
from api.core import schema

router = APIRouter()

@router.post("/users/", response_model=schema.UserResponse)
def create_user(user: schema.UserCreate, db: Session = Depends(dependencies.get_db)):
    return crud.create_user(db=db, user=user)

@router.get("/users/", response_model=List[schema.UserResponse])
def read_users(skip: int = 0, limit: int = 10, db: Session = Depends(dependencies.get_db)):
    return crud.get_users(db=db, skip=skip, limit=limit)

@router.get("/users/{user_id}", response_model=schema.UserResponse)
def read_user(user_id: int, db: Session = Depends(dependencies.get_db)):
    db_user = crud.get_user(db=db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@router.put("/users/{user_id}", response_model=schema.UserResponse)
def update_user(user_id: int, user: schema.UserCreate, db: Session = Depends(dependencies.get_db)):
    db_user = crud.update_user(db=db, user_id=user_id, user=user)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@router.delete("/users/{user_id}", response_model=schema.UserResponse)
def delete_user(user_id: int, db: Session = Depends(dependencies.get_db)):
    db_user = crud.delete_user(db=db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user