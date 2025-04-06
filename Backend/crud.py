from sqlalchemy.orm import Session
from model import BugItem
from api.core.schema import BugItemCreate

def create_bug_item(db: Session, bug: BugItemCreate):
    db_bug = BugItem(**bug.dict())
    db.add(db_bug)
    db.commit()
    db.refresh(db_bug)
    return db_bug

def get_bug_items(db: Session, skip: int = 0, limit: int = 10):
    return db.query(BugItem).offset(skip).limit(limit).all()

def get_bug_item(db: Session, bug_id: int):
    return db.query(BugItem).filter(BugItem.id == bug_id).first()

def update_bug_item(db: Session, bug_id: int, bug: BugItemCreate):
    db_bug = db.query(BugItem).filter(BugItem.id == bug_id).first()
    if db_bug:
        db_bug.title = bug.title
        db_bug.description = bug.description
        db_bug.status = bug.status
        db_bug.priority = bug.priority
        db_bug.assignee = bug.assignee
        db.commit()
        db.refresh(db_bug)
        return db_bug
    return None

def delete_todo_item(db: Session, bug_id: int):
    db_bug = db.query(BugItem).filter(BugItem.id == bug_id).first()
    if db_bug:
        db.delete(db_bug)
        db.commit()
        return db_bug
    return None