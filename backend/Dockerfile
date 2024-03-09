FROM python:3.9-slim

WORKDIR /app

COPY ./src /app/src
COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

CMD ["uvicorn", "src.Endpoints:app", "--host", "0.0.0.0", "--port", "80"]
