# Endpoints
from fastapi import FastAPI, HTTPException

# Data Validation when Parsing JSON
from pydantic import BaseModel, HttpUrl

app = FastAPI()

# DEPENDENCY OF MONGODB

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
        raise HTTPException(status_code=404, detail="Get Configuration Failed")



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



