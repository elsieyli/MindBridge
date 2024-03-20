import pymongo
from common import get_secret


# DEFINING SCHEMAS
class Student:
    def __init__(self, name: str, buttonsclicked: int, buttonconfig):
        self.name = name
        self.buttonsclicked = buttonsclicked
        self.buttonconfig = buttonconfig

    def to_dict(self):
        return {
            'name': self.name,
            'buttonsclicked': self.buttonsclicked,
            'buttons': [button.to_dict() for button in self.buttonconfig]
        }


class Button:
    def __init__(self, Image: str, Background: str, Color: str, Audio: str):
        self.Image = Image
        self.Background = Background
        self.Color = Color
        self.Audio = Audio

    def to_dict(self):
        return {
            'Image': self.Image,
            'Background': self.Background,
            'Color': self.Color,
            'Audio': self.Audio
        }


class User:
    def __init__(self, name, password, token, students=None):
        self.token = token
        self.students = students if students is not None else []

    def to_dict(self):
        return {
            'name': self.name,
            'password': self.password,
            'token': self.token,
            'students': [student.to_dict() for student in self.students]
        }


# Database Class
class DB:
    def __init__(self, DatabaseName: str, CollectionName: str):
        secret = get_secret("mindbridge", "us-east-2")
        CONNECTION_STRING = secret['MONGODB_CONNECTION_STRING']
        self.Client = pymongo.MongoClient('mongodb+srv://zoranouslis:yl26gCDmAWkxlwHX@mongodbconnection.sxcikbh.mongodb.net/?retryWrites=true&w=majority&appName=MongoDBConnection')
        self.Collection = self.Client[DatabaseName][CollectionName]

    def add_student(self, user_name: str, student: dict) -> bool:
        try:
            self.collection.update_one({'name': user_name}, {'$push': {'students': student}})
            return True
        except Exception as e:
            print(f"An error occurred: {e}")
            return False

    def remove_student(self, user_name: str, student_name: str) -> bool:
        try:
            self.collection.update_one({'name': user_name}, {'$pull': {'students': {'name': student_name}}})
            return True
        except Exception as e:
            print(f"An error occurred: {e}")
            return False

    def add_button_to_student(self, user_name: str, student_name: str, button: dict) -> bool:
        try:
            self.collection.update_one({'name': user_name, 'students.name': student_name}, {'$push': {'students.$.buttons': button}})
            return True
        except Exception as e:
            print(f"An error occurred: {e}")
            return False

    def remove_button_from_student(self, user_name: str, student_name: str, button_image: str) -> bool:
        try:
            self.collection.update_one({'name': user_name, 'students.name': student_name}, {'$pull': {'students.$.buttons': {'Image': button_image}}})
            return True
        except Exception as e:
            print(f"An error occurred: {e}")
            return False

    def GetDocument(self, InputParameter: dict) -> dict:
        return self.Collection.find_one(InputParameter)

    def InsertDocument(self, InputParameter: dict) -> bool:
        try:
            self.Collection.insert_one(InputParameter)
            return True
        except Exception as e:
            print(f"An error occurred: {e}")
            return False

    def InsertMultipleDocuments(self, documents: list) -> bool:
        """Insert multiple documents into the collection."""
        if not isinstance(documents, list):
            raise ValueError("InputParameter for InsertMultipleDocuments must be a list of dictionaries.")
        try:
            self.Collection.insert_many(documents)
            return True
        except Exception as e:
            print(f"An error occurred: {e}")
            return False
