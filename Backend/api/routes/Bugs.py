from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List
import crud, dependencies
from api.core import schema

router = APIRouter()

@router.post("/bugs/", response_model=schema.BugItemResponse)
def create_bug(bug: schema.BugItemCreate, db: Session = Depends(dependencies.get_db)):
    return crud.create_bug_item(db=db, bug=bug)

@router.get("/bugs/", response_model=List[schema.BugItemResponse])
def read_bugs(skip: int = 0, limit: int = 10, db: Session = Depends(dependencies.get_db)):
    return crud.get_bug_items(db=db, skip=skip, limit=limit)

@router.get("/bugs/{bug_id}", response_model=schema.BugItemResponse)
def read_bug(bug_id: int, db: Session = Depends(dependencies.get_db)):
    db_bug = crud.get_bug_item(db=db, bug_id=bug_id)
    if db_bug is None:
        raise HTTPException(status_code=404, detail="Bug not found")
    return db_bug

@router.put("/bugs/{bug_id}", response_model=schema.BugItemResponse)
def update_bug(bug_id: int, bug: schema.BugItemCreate, db: Session = Depends(dependencies.get_db)):
    db_bug = crud.update_bug_item(db=db, bug_id=bug_id, bug=bug)
    if db_bug is None:
        raise HTTPException(status_code=404, detail="Bug not found")
    return db_bug

@router.delete("/bugs/{bug_id}", response_model=schema.BugItemResponse)
def delete_bug(bug_id: int, db: Session = Depends(dependencies.get_db)):
    db_bug = crud.delete_bug_item(db=db, bug_id=bug_id)
    if db_bug is None:
        raise HTTPException(status_code=404, detail="Bug not found")
    return db_bug