from sqlalchemy import Column, Integer, String
from api.core.db import Base  

class BugItem(Base):
    __tablename__ = "bug_items"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    status = Column(String)
    priority = Column(String)
    assignee = Column(String)
