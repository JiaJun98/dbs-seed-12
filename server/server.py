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
#### Setting up MongoDB ####
connection = 'mongodb://rwuser:Singapore123!@190.92.206.138:27017,159.138.120.227:27017/test?authSource=admin'
client = MongoClient(connection)
mydb = client.mydb


#### Retrieve Project ID
@app.route("/info", methods=['GET'])
def get_info():
    payload = get_jwt()
    employee_id = payload['EmployeeID']
    if mydb.Employee.find_one({'EmployeeID':employee_id}):
        # Retrieving Project IDS
        projects = mydb.EmployeeProjects.find({'EmployeeID':employee_id})
        project_ids = []
        for project in projects:
            project_ids.append(project['ProjectID'])
        return jsonify({"ProjectIDs":project_ids})
        




##### Retrieve claim records list #####
@app.route('/claim',methods=['GET'])
@jwt_required()
def get_transac():
    claims = get_jwt()
    userId = claims['id']
    if mydb.user.find({"userId":userId}) and mydb.account.find({"userId":userId}):
        if mydb.account.find({"userId":userId}):
            account = mydb.account.find({"userId":userId})
            account_data = parse_json(account)
            account_id = account_data[0]["accountId"]
            return ({"claims":parse_json(mydb.claim.find({"accountId":account_id}))}, 200)
    else:
        return {"message": "User is not authorised."}, 404
    return {"message": "Account not found."}, 404

if __name__ == "__main__":
    app.run(debug=True)