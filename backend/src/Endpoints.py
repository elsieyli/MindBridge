from fastapi import FastAPI, Security
from src.application.util import VerifyToken
from src.helper.MongoDB import DB
from src.helper.Middleware import PreProcessMiddleware, TimerMiddleWare
from src.helper.Twilio import SendMessage

# Creates app instance
app = FastAPI()

# Verification Tooken
auth = VerifyToken()

# Adding Middleeware
app.add_middleware(TimerMiddleWare)

# Storing Information using Databases
UserLogin = DB("Users", "Login")


# Send Message Endpoint with body <Known existing phone number and teacher phone numberr>
@app.post("/Send/{body}")
def SendEndpoint(body: str, token: str = Security(auth.verify)):
    try:
        SendMessage(body, DB.GetTeacher().number)
    except Exception:


# Create Account Endpoint with name, password <-- Returns Token -->
@app.get("/GetToken")
def GetToken(token: str = Security(auth.verify)) -> str:
    return token


# Create Update Account Token [[PRIVATE FUNCTION/MIDDLEWARE CALL]]
def PostNuumber(Number: str):
    pass


# Create One More Button
@app.post("/Teacher/{Number}")
def PostNuumber(Number: str):
    pass

# Remove one speific Button
@app.get("/Teacher/{Number}")
def PostNuumber(Number: str):
    pass


# Add one more student
@app.post("/Teacher/{Number}")
def PostNuumber(Number: str):
    pass


# Remove one Studuent
@app.get("/Teacher/{Number}")
def PostNuumber(Number: str):
    pass


# Settings
# Teacher Phone number
@app.post("/Teacher/{Number}")
def PostNuumber(Number: str):
    pass
