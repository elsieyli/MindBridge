import boto3
import json
from botocore.exceptions import ClientError
import os

def get_secret(secret_name, region_name):
    # Create a Secrets Manager client
    # session = boto3.session.Session()
    # client = session.client(
    #     service_name='secretsmanager',
    #     region_name=region_name
    # )

    # try:
    #     get_secret_value_response = client.get_secret_value(
    #         SecretId=secret_name
    #     )
    # except ClientError as e:
    #     # For a list of exceptions thrown, see
    #     # https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
    #     raise e


    return {
        "AUTH0_DOMAIN": os.getenv("AUTH0_DOMAIN"),
        "AUTH0_AUDIENCE": os.getenv("AUTH0_AUDIENCE"),
        "AUTH0_CLIENT_ID": os.getenv("AUTH0_CLIENT_ID"),
        "AUTH0_AlGORITHM": os.getenv("AUTH0_AlGORITHM"),
        "MONGODB_CONNECTION_STRING": os.getenv("MONGODB_CONNECTION_STRING"),
        "TWILIO_ACCOUNT_SID": os.getenv("TWILIO_ACCOUNT_SID"),
        "TWILIO_AUTH_TOKEN": os.getenv("TWILIO_AUTH_TOKEN"),
        "TWILIO_PHONE_NUMBER": os.getenv("TWILIO_PHONE_NUMBER")
    }