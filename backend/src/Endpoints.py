from fastapi import FastAPI, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from src.helper.MongoDB import DB
from src.helper.Middleware import TimerMiddleware
from src.helper.Twilio import SendMessage

from src.application.utils import decode_jwt


# Creates app instance
app = FastAPI()
security = HTTPBearer()

# Adding Middleware
app.add_middleware(TimerMiddleware)

# Storing Information using Databases
UserLogin = DB("Users", "Login")


# Send Message Endpoint with body <Known existing phone number and teacher phone number>
@app.post("/Send/{body}")
def SendEndpoint(body: str):
    try:
        SendMessage(body, DB.GetTeacher().number)
    except Exception:
        pass

# Create Update Account Token [[PRIVATE FUNCTION/MIDDLEWARE CALL]]
def PostNumber(Number: str):
    pass


# Create One More Button
@app.post("/Teacher/{Number}")
def PostNumber(Number: str):
    pass

# Remove one specific Button
@app.get("/Teacher/{Number}")
def PostNumber(Number: str):
    pass


# Add one more student
@app.post("/Teacher/{Number}")
def PostNuumber(Number: str):
    pass


# Remove one Student
@app.get("/Teacher/{Number}")
def PostNuumber(Number: str):
    pass


# Settings
# Teacher Phone number
@app.post("/Teacher/{Number}")
def PostNuumber(Number: str):
    pass


@app.get("/api/public")
def public():
    """No access token required to access this route"""

    result = {
        "status": "success",
        "msg": ("Hello from a public endpoint! You don't need to be "
                "authenticated to see this.")
    }
    return result


@app.post('/api/student')
def add_student(credentials: HTTPAuthorizationCredentials = Security(security)):
    token = credentials.credentials
    payload = decode_jwt(token)
    return {"message": "Protected data", "user_data": payload}
