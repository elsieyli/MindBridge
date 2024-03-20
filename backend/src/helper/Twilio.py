from twilio.rest import Client
from src.common import get_secret

secret = get_secret("mindbridge", "us-east-2")
account_sid = secret['TWILIO_ACCOUNT_SID']
auth_token = secret['TWILIO_AUTH_TOKEN']
twilio_phone_number = secret['TWILIO_PHONE_NUMBER']

client = Client(account_sid, auth_token)


def SendMessage(body: str, to: str):
    client.messages.create(
        from_=twilio_phone_number,
        body=body,
        to=to
    )
