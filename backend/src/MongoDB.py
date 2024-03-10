import pymongo

from dotenv import load_dotenv
import os


class DB:
    def __init__(self, DatabaseName: str, CollectionName: str):
        load_dotenv()
        CONNECTION_STRING = os.getenv('CONNECTION_STRING')
        self.Client = pymongo.MongoClient(CONNECTION_STRING)
        self.Collection = self.Client[DatabaseName][CollectionName]

    def GetDocument(self, InputParameter: {}) -> {}:
        return self.Collection.find_one(InputParameter)

    def InsertDocument(self, InputParameter: {}) -> bool:
        try:
            self.Collection.insert_many(InputParameter)
            return True
        except Exception:
            return False

