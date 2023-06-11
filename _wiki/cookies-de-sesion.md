---
title: Cookies de sesión
---

# Cookies de sesión

Las cookies de login, también conocidas como cookies de sesión, son un mecanismo utilizado por los sitios web para mantener la sesión de un usuario a lo largo de múltiples solicitudes. Cuando un usuario inicia sesión en un sitio web, el servidor genera un identificador único, conocido como ID de sesión o token, que se asocia con la sesión del usuario.

Aquí tienes una descripción general de cómo funcionan las cookies de login:

## 1. Inicio de sesión del usuario: 

El usuario ingresa sus credenciales (por ejemplo, nombre de usuario y contraseña) en la página de inicio de sesión del sitio web. El servidor verifica las credenciales y crea una sesión para el usuario.

## 2. Creación de la sesión: 

Después de un inicio de sesión exitoso, el servidor genera un ID de sesión o token único, que generalmente es una cadena aleatoria larga. El servidor almacena este ID de sesión junto con cualquier información relevante del usuario (por ejemplo, ID de usuario, permisos) en el lado del servidor.

## 3. Creación de la cookie: 

El servidor envía de vuelta al navegador web del usuario el ID de sesión en forma de una cabecera de respuesta HTTP llamada "Set-Cookie". La cookie generalmente contiene el ID de sesión y otra información como la hora de vencimiento, dominio y ruta.

## 4. Almacenamiento de la cookie: 

El navegador web del usuario recibe la cookie y la almacena localmente. La cookie está asociada con el dominio y la ruta específicos del sitio web que la emitió.

## 5. Solicitudes posteriores: 

Cuando el usuario interactúa con el sitio web al hacer clic en enlaces o realizar solicitudes posteriores, el navegador web automáticamente incluye la cookie en las cabeceras de solicitud HTTP. Esto permite que el servidor identifique la sesión del usuario extrayendo el ID de sesión de la cookie.

## 6. Verificación en el lado del servidor: 

En el lado del servidor, el sitio web recupera el ID de sesión de la cookie de la solicitud entrante. Luego, busca los datos de sesión correspondientes asociados con ese ID de sesión.

## 7. Gestión de la sesión: 

Con el ID de sesión, el servidor puede acceder a los datos de sesión del usuario y verificar su identidad, realizar comprobaciones de autorización y proporcionar contenido o funcionalidad personalizada. Los datos de sesión pueden almacenarse en una base de datos, caché de memoria u otros mecanismos de almacenamiento según la implementación del sitio web.

## 8. Caducidad de la sesión: 

Para controlar la duración de la sesión de inicio de sesión del usuario, el servidor puede establecer una hora de vencimiento para la cookie. Una vez que la cookie caduca, el usuario deberá iniciar sesión nuevamente para obtener un nuevo ID de sesión.

## Código ejemplo

### Servidor
```python
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

```
```bash
$ python3 login-cookie.py 
 * Serving Flask app 'login-cookie' (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000 (Press CTRL+C to quit)
```

### Cliente

#### Login

Sintaxis del encabezado `Set-Cookie`[^1]
```plaintext
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<number>
Set-Cookie: <cookie-name>=<cookie-value>; Partitioned
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=None; Secure

// Multiple attributes are also possible, for example:
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

> The `Set-Cookie` HTTP response header is used to send a cookie from the server to the user agent, so that the user agent can send it back to the server later. To send multiple cookies, multiple `Set-Cookie` headers should be sent in the same response.[^1]

```bash
curl -v -s -k -X  'POST' \
 -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
--data-raw $'username=usuario&password=contraseña' \
'http://localhost:5000/login'
```
```plaintext
*   Trying 127.0.0.1:5000...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 5000 (#0)
> POST /login HTTP/1.1
> Host: localhost:5000
> User-Agent: curl/7.68.0
> Accept: */*
> Content-Type: application/x-www-form-urlencoded; charset=UTF-8
> Content-Length: 37
> 
* upload completely sent off: 37 out of 37 bytes
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Server: Werkzeug/2.1.2 Python/3.8.10
< Date: Sat, 10 Jun 2023 21:28:23 GMT
< Content-Type: text/html; charset=utf-8
< Content-Length: 25
< Set-Cookie: sessionID=unique_session_id-1686432503; Secure; HttpOnly; Path=/
< Connection: close
< 
* Closing connection 0
Inicio de sesión exitoso
```

#### Peticiṕon protegida

Sintaxis del encabezado `Cookie`[^2]
```plaintext
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```
> The `Cookie` HTTP request header contains stored HTTP cookies associated with the server (i.e. previously sent by the server with the `Set-Cookie` header or set in JavaScript using Document.cookie). [^2]

```bash
curl -v -s -k -X  'GET'  \
 -H 'Cookie: sessionID=unique_session_id-1686432503' \
'http://localhost:5000/protected'
```
```plaintext
*   Trying 127.0.0.1:5000...
* TCP_NODELAY set
* Connected to localhost (127.0.0.1) port 5000 (#0)
> GET /protected HTTP/1.1
> Host: localhost:5000
> User-Agent: curl/7.68.0
> Accept: */*
> Cookie: sessionID=unique_session_id-1686432503
> 
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Server: Werkzeug/2.1.2 Python/3.8.10
< Date: Sat, 10 Jun 2023 21:29:52 GMT
< Content-Type: text/html; charset=utf-8
< Content-Length: 39
< Connection: close
< 
* Closing connection 0
Acceso concedido al contenido protegido
```

[^1]: Set-Cookie - HTTP \| MDN. (2023, April 12). Mozilla.org. https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie


[^2]: Cookie - HTTP \| MDN. (2023, April 10). Mozilla.org. https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie