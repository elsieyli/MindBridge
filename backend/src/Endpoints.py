from fastapi import FastAPI, Security, Request
from src.application.util import VerifyToken
from src.helper.MongoDB import DB
from src.helper.Middleware import PreProcessMiddleware, TimerMiddleWare
from src.helper.Twilio import SendMessage
from twilio.twiml.messaging_response import MessagingResponse

# Creates app instance
app = FastAPI()

# Verification Tooken
auth = VerifyToken()

# Adding Middleeware
app.add_middleware(TimerMiddleWare)

# Storing Information using Databases
UserLogin = DB("Users", "Login")

@app.post("/sms")
async def forward_sms(request: Request):
    # Parse the form data sent by Twilio
    form_data = await request.form()
    incoming_msg = form_data.get('Body')
    from_number = form_data.get('From')
    
    # Specify the number you want to forward messages to
    forward_to_number = "+1234567890"

    # Create TwiML response to forward the message
    response = MessagingResponse()
    message = response.message(f"Forwarded from {from_number}: {incoming_msg}")
    message.to(forward_to_number)
    
    # Return the TwiML
    return Response(content=str(response), media_type="application/xml")

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
