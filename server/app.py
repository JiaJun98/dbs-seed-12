import os
from flask import Flask, render_template, request, make_response
from crypt import methods
from flask import Flask, request, jsonify
import pymongo
from pymongo import MongoClient 
from flask import Markup
import os
from dotenv import load_dotenv

app = Flask(__name__)

@app.route('/')
def index():
    """
    Return the home page
    """
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug = True, use_reloader = True)