from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from api.core.db import Base  
from sqlalchemy.orm import relationship

class BugItem(Base):
    __tablename__ = "bug_items"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    status = Column(String)
    priority = Column(String)
    assignee_id = Column(Integer, ForeignKey("users.id"), index=True)
    assignee = relationship("User", backref="bugs", lazy="subquery")


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, index=True)
    email = Column(String)
    password = Column(String)
    is_admin= Column(Boolean(), default=False)

