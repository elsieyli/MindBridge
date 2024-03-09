# Endpoints
from fastapi import FastAPI, HTTPException

# Data Validation when Parsing JSON
from pydantic import BaseModel, HttpUrl

app = FastAPI()

# DEPENDENCY OF MONGODB
import MongoDB


# Save Configrution of Buttons:
class ConfigurationModel(BaseModel):
    name: str = "Invalid"
    icon: str | None = None
    color: str = "White"
    colortext: str = "Black"
    image: str | None = None


# Storese/Returns Existing name + multiple {Image + Icon + Name + Color}
@app.post("/config")
async def UpdateConfig(item: ConfigurationModel) -> ConfigurationModel:
    try:
        pass
    except Exception:
        raise HTTPException(status_code=400, detail="Update Config Failed")


@app.get("/config/{name}")
async def GetConfig(name: str) -> ConfigurationModel:
    try:
        pass
    except Exception:
        raise HTTPException(status_code=404, detail="Get Configuration Failed")



# Login Saving
class LoginModel(BaseModel):
    name: str
    password: str


@app.get("/user/{name}/{password}")
async def VerifyIdentity(name: str, password: str) -> bool:
    try:
        pass
    except:
        pass

@app.post("/userpost/{name}/{password}")
async def SetIdentity(name: str, password: str) -> bool:
    try:
        pass
    except:
        pass

import pymongo

from dotenv import load_dotenv
import os


class DB:
    def __init__(self, DatabaseName: str, CollectionName: str):
        load_dotenv()
        CONNECTION_STRING = os.getenv('CONNECTION_STRING')
        self.Client = pymongo.MongoClient(CONNECTION_STRING)
        self.Collection = self.Client[DatabaseName][CollectionName]

    def GetDocument(self, InputParameter: {}) -> {}:
        return self.Collection.find_one(InputParameter)

    def InsertDocument(self, InputParameter: {}) -> bool:
        try:
            self.Collection.insert_many(InputParameter)
            return True
        except Exception:
            return False



