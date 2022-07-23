from flask import Flask, jsonify, request
from db import *
app = Flask(__name__)



@app.route('/api/v1/list', methods=['POST'])
def add_entry():
    print("p0")
    request_json = request.get_json()
    value1 = request_json.get('username')
    value2 = request_json.get('text')
    value3 = request_json.get('image_object')
    if value1 is not None and value3 is not None:
        data = insert_post(conn,username=value1, text=value2, image_object=value3)


        
        
    return 'ok'


#