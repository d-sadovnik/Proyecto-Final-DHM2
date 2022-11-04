"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])  
def signup():  
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    if not email or not password:
        return jsonify({'msg': 'Necesitas un correo y una contraseña  para ingresar'}), 404
    usuario_prueba = User.query.filter_by(email=email).first()
    if not usuario_prueba:    

        new_user = User(email=email, password=password, is_active=True)        
        db.session.add(new_user)
        db.session.commit()
        respuesta = {
            'msg': 'usuario registrado'
        }
        return jsonify(respuesta), 200

    else: 
        return jsonify({'msg': 'el usuario ya se encuentra registrado'}), 404    

@api.route("/login", methods=["POST"])
def handle_login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    usuario_query = User.query.filter_by(email=email, password=password).first()
    if not usuario_query: 
        return jsonify({"msg": "Bad username or password"}), 401
   
    # access_token = create_access_token(identity=usuario_query.email)
    response_body = {
        "msg": "bienvenido",
        # "accessToken": access_token,
        "id": usuario_query.id
    }
    return jsonify(response_body), 200     
    

