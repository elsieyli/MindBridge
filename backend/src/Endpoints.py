from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from src.MongoDB import DB  # Assuming your MongoDB connection class is in 'db.py'

app = FastAPI()

# Initialize MongoDB connections for configurations and users
config_db = DB("YourDatabaseName", "Configurations")
users_db = DB("YourDatabaseName", "Users")

# Configuration model
class ConfigurationModel(BaseModel):
    name: str
    icon: str | None = None
    color: str = "White"
    colortext: str = "Black"
    image: str | None = None


# Endpoint to update or insert a new configuration
@app.post("/config")
async def update_config(item: ConfigurationModel) -> ConfigurationModel:
    try:
        existing_config = config_db.GetDocument({"name": item.name})
        if existing_config:
            # If exists, update the configuration
            config_db.Collection.update_one({"name": item.name}, {"$set": item.dict()})
        else:
            # If not, insert a new configuration
            config_db.InsertDocument(item.dict())
        return item
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Update Config Failed: {str(e)}")


# Endpoint to get a configuration by name
@app.get("/config/{name}")
async def get_config(name: str) -> ConfigurationModel:
    try:
        config = config_db.GetDocument({"name": name})
        if config:
            return ConfigurationModel(**config)
        else:
            raise HTTPException(status_code=404, detail="Configuration Not Found")
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"Get Configuration Failed: {str(e)}")


# Login model
class LoginModel(BaseModel):
    name: str
    password: str


# Endpoint to verify user identity
@app.get("/user/{name}/{password}")
async def verify_identity(name: str, password: str) -> bool:
    try:
        user = users_db.GetDocument({"name": name, "password": password})
        return bool(user)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Verification Failed: {str(e)}")


# Endpoint to create or update a user
@app.post("/userpost/{name}/{password}")
async def set_identity(name: str, password: str) -> bool:
    try:
        existing_user = users_db.GetDocument({"name": name})
        if existing_user:
            # Update user password if user exists
            users_db.Collection.update_one({"name": name}, {"$set": {"password": password}})
        else:
            # Insert a new user if not exists
            users_db.InsertDocument({"name": name, "password": password})
        return True
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Setting Identity Failed: {str(e)}")
