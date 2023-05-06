from flask import Flask,jsonify, request
from flask_bcrypt import Bcrypt
from pymongo import MongoClient
import json
from bson import json_util
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
from flask_jwt_extended import get_jwt
from flask_cors import CORS

app = Flask(__name__)



if __name__ == "__main__":
    app.run(debug=True)