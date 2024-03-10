from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
import time


class TimerMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        start_time = time.time()

        # Process the request
        response = await call_next(request)

        # Calculate the duration
        duration = time.time() - start_time
        print(f"Request took {duration} seconds")

        # Add the duration to the response headers (optional)
        response.headers['X-Response-Time'] = str(duration)

        return response
