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
app.config['MONGO_URI'] = 'mongodb://rwuser:Singapore123!@190.92.206.138:27017,159.138.120.227:27017/test?authSource=admin'
bcrypt = Bcrypt(app)
def parse_json(data):
    return json.loads(json_util.dumps(data))
CORS(app)
jwt = JWTManager(app)
# #### Setting up MongoDB ####
connection = 'mongodb://rwuser:Singapore123!@190.92.206.138:27017,159.138.120.227:27017/test?authSource=admin'
client = MongoClient(connection)
mydb = client.mydb

#User Log in 
@app.route("/login", methods=["POST"])
def login():
    employeeid = request.json.get("EmployeeID", None)
    password = request.json.get("Password", None)
    employee = mydb.Employee.find({"EmployeeID":employeeid})
    hash_password = bcrypt.generate_password_hash(password,10)
    if employee and bcrypt.check_password_hash(hash_password,parse_json(employee)[0]['Password']):
        additional_claims = {"EmployeeID": parse_json(mydb.Employee.find({"EmployeeID":employeeid}))[0]['EmployeeID']}
        access_token = create_access_token(identity=employeeid,additional_claims=additional_claims)
        return jsonify(access_token=access_token)
    return jsonify({"msg": "Bad username or password"}), 401

#Update User
@app.route('/update',methods=['POST'])
@jwt_required()
def update():
    claims =get_jwt()
    employeeid = claims['EmployeeID']
    if mydb.ProjectExpenseClaim.find({"EmployeeID":employeeid}):
        firstname = request.json.get("FirstName")
        lastname = request.json.get("LastName")
        projectid = request.json.get("ProjectID")
        amount = request.json.get("Amount")
        purpose = request.json.get("Purpose")
        mydb.Employee.find_one_and_update(
            {"EmployeeID":employeeid},
            {"$set" : {"FirstName":firstname,"LastName":lastname}}
        )
        mydb.EmployeeProjects.find_one_and_update(
            {"EmployeeID":employeeid},
            {"$set" : {"ProjectID":projectid}}
        )
        mydb.ProjectExpenseClaims.find_one_and_update(
            {"EmployeeID":employeeid},
            {"$set" : {"Amount":amount,"Purpose":purpose}}
        )
        return {"message":"Claims have been updated."}
    return {"message":"User is not authorised."}



if __name__ == "__main__":
    app.run(debug=True)
