from fastapi import HTTPException
from jose import jwt
import httpx
import os


def get_jwks():
    url = f"https://{os.environ['AUTH0_DOMAIN']}/.well-known/jwks.json"
    with httpx.Client() as client:
        resp = client.get(url)
        return resp.json()


def decode_jwt(token: str):
    jwks = get_jwks()
    unverified_header = jwt.get_unverified_header(token)
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
                algorithms=os.environ['AUTH0_ALGORITHMS'],
                audience=os.environ['AUTH0_API_AUDIENCE'],
                issuer=f"https://{os.environ['AUTH0_DOMAIN']}/"
            )
            return payload
        except jwt.JWTError as e:
            raise HTTPException(status_code=403, detail=str(e))
    raise HTTPException(status_code=403, detail='Unable to find appropriate key')