from fastapi import FastAPI
from fastapi.routing import APIRoute

from api.routes.Bugs import router
from api.routes.Users import router as UserRouter
from api.core import db

app = FastAPI()

db.create_database()


app.include_router(UserRouter)
app.include_router(router) 