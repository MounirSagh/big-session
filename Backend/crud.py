from sqlalchemy.orm import Session
from model import BugItem, User
from api.core.schema import BugItemCreate, UserCreate, UserResponse

def create_bug_item(db: Session, bug: BugItemCreate):
    assignee_id = bug.assignee_id
    db_bug = BugItem(
        title=bug.title,
        description=bug.description,
        status=bug.status,
        priority=bug.priority,
        assignee_id=bug.assignee_id,  
        assignee=db.query(User).filter(User.id == bug.assignee_id).first() 
    )
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

def create_user(db: Session, user: UserCreate):
    db_user = User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_users(db: Session, skip: int = 0, limit: int = 10):
    return db.query(User).offset(skip).limit(limit).all()

def get_user(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()

def update_user(db: Session, user_id: int, user: UserCreate):
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user:
        db_user.username = user.username
        db_user.email = user.email
        db_user.password = user.password
        db_user.is_admin = user.is_admin
        db.commit()
        db.refresh(db_user)
        return db_user
    return None

def delete_user(db: Session, user_id: int):
    db_user = db.query(User).filter(User.id == user_id).first()
    if db_user:
        db.delete(db_user)
        db.commit()
        return db_user
    return None