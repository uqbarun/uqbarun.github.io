# login-cookies.py
from flask import Flask, request, make_response
import time
app = Flask(__name__)
sessionIDstore = None

@app.route('/login', methods=['POST'])
def login():
    global sessionIDstore
    # Verificación de credenciales y creación de sesión
    if request.form['username'] == 'usuario' and request.form['password'] == 'contraseña':
        # Credenciales válidas, se crea la sesión
        sessionIDstore = f'unique_session_id-{int(time.time())}'  # Generar un ID de sesión único
        # Crear una respuesta y establecer la cookie de sesión
        response = make_response('Inicio de sesión exitoso')
        response.set_cookie('sessionID', sessionIDstore, secure=True, httponly=True)
        return response
    else:
        # Credenciales inválidas, mostrar mensaje de error o redirigir
        return 'Credenciales inválidas'

@app.route('/protected')
def protected():
    global sessionIDstore
    # Verificar la cookie de sesión
    sessionIDreq = request.cookies.get('sessionID')
    if sessionIDreq == sessionIDstore:
        return 'Acceso concedido al contenido protegido'
    else:
        return 'Acceso denegado'

if __name__ == '__main__':	
    app.run()