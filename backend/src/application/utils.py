from fastapi import HTTPException
from jose import jwt
import httpx
import os

from src.common import get_secret


def get_jwks(domain):
    url = f"https://{domain}/.well-known/jwks.json"
    with httpx.Client() as client:
        resp = client.get(url)
        return resp.json()


def decode_jwt(token: str):
    secret = get_secret("mindbridge", "us-east-2")
    jwks = get_jwks(secret['AUTH0_DOMAIN'])
    try:
        unverified_header = jwt.get_unverified_header(token)
    except jwt.JWTError as e:
        raise HTTPException(status_code=403, detail=str(e), headers={"WWW-Authenticate": f"Bearer {token}"})
    rsa_key = {}
    for key in jwks['keys']:
        if key['kid'] == unverified_header['kid']:
            rsa_key = {
                'kty': key['kty'],
                'kid': key['kid'],
                'use': key['use'],
                'n': key['n'],
                'e': key['e']
            }
    if rsa_key:
        try:
            payload = jwt.decode(
                token,
                rsa_key,
                algorithms=secret['AUTH0_ALGORITHMS'],
                audience=secret['AUTH0_AUDIENCE'],
                issuer=f"https://{secret['AUTH0_DOMAIN']}/"
            )
            return payload
        except jwt.JWTError as e:
            raise HTTPException(status_code=403, detail=str(e))
    raise HTTPException(status_code=403, detail='Unable to find appropriate key')