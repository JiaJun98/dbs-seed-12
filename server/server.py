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

app.config['SECRET_KEY'] = 'super-secret'
bcrypt = Bcrypt(app)

def parse_json(data):
    return json.loads(json_util.dumps(data))
CORS(app)
jwt = JWTManager(app)
# #### Setting up MongoDB ####
# connection = ''
# client = MongoClient(connection)
# mydb = client.mydb

#User Log in 
@app.route("/login", methods=["POST"])
def login():
    username = request.json.get("username", None)
    password = request.json.get("password", None)
    user = mydb.user.find({"username":username})
    hash_password = bcrypt.generate_password_hash(password,10)
    if user and bcrypt.check_password_hash(hash_password,parse_json(mydb.user.find({'password':password})[0]['password'])):
        additional_claims = {"id": parse_json(user)[0]["userId"]}
        access_token = create_access_token(identity=username,additional_claims=additional_claims)
        return jsonify(access_token=access_token)
    return jsonify({"msg": "Bad username or password"}), 401

# @app.route("/claims/update")
# def update():

#### Update User ####
# @app.route('/user/<string:userId>',methods=['POST'])
# @jwt_required()
# def get_user(userId):
#     claims =get_jwt()
#     if claims['id'] == userId:
#         new_query = request.get_json()
#         mydb.user.find_one_and_update(
#             {"userId":userId},
#             { "$set" :{"email":new_query['email'],"address":new_query['address']}
#              }
#              )
#         return {"message":"user has been updated."}
#     else:
#         return {"message": "User is not authorised."}, 404
#     return {"message":"User not found."}, 404

if __name__ == "__main__":
    app.run(debug=True)