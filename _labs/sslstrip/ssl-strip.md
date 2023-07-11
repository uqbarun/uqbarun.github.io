---
title: SSL Strip
---

# SSL Strip

## Marco teótrico

### Address Resolution Protocol

ARP (Address Resolution Protocol) es un protocolo de red utilizado para resolver direcciones IP a direcciones MAC en una red local. Las direcciones IP son utilizadas para enrutar datos a través de una red global, mientras que las direcciones MAC son identificadores únicos asignados a las tarjetas de red de los dispositivos en una red local.

Cuando un dispositivo desea comunicarse con otro dispositivo en la misma red local, necesita conocer la dirección MAC del dispositivo de destino. Es aquí donde ARP entra en juego. El protocolo ARP permite a un dispositivo enviar una solicitud de ARP (ARP request) preguntando "¿Quién tiene la dirección IP X?" a la red. El dispositivo con la dirección IP X responderá con su dirección MAC (ARP reply), y luego el dispositivo solicitante podrá enviar los datos al dispositivo de destino utilizando la dirección MAC obtenida.


### SSL y TLS

SSL (Secure Sockets Layer) y TLS (Transport Layer Security) son protocolos de seguridad utilizados para establecer conexiones seguras en Internet. SSL fue desarrollado por Netscape en la década de 1990 y fue ampliamente utilizado para asegurar las comunicaciones en la web. Sin embargo, debido a ciertas vulnerabilidades y limitaciones, SSL fue reemplazado por TLS. 

TLS utiliza algoritmos de cifrado más fuertes y tiene mejores mecanismos de autenticación y seguridad en comparación con SSL. En cuanto a las versiones, SSL tiene varias versiones como SSL 2.0, SSL 3.0 y TLS 1.0, mientras que TLS tiene versiones posteriores como TLS 1.1, TLS 1.2 y TLS 1.3. Cada versión ha mejorado las características de seguridad y ha corregido las vulnerabilidades encontradas en las versiones anteriores.

Hoy en muchos escenarios se usa intercambiablemente el término SSL y TLS, es importante tener en cuenta que el término "certificado SSL" se sigue utilizando comúnmente para referirse a los certificados utilizados en conexiones seguras a través de HTTPS. Sin embargo, en realidad, estos certificados son certificados TLS, ya que TLS es la versión más actualizada y segura del protocolo.


### HTTP over TLS (HTTPS)

HTTP over TLS (HTTPS) es una combinación de dos protocolos: HTTP (Hypertext Transfer Protocol) y TLS (Transport Layer Security). 

HTTP por sí solo no proporciona una capa de seguridad para proteger la comunicación entre el cliente y el servidor. Para solucionar este problema de seguridad, se utiliza TLS. Utiliza algoritmos de cifrado para codificar los datos y autenticación para verificar la identidad del servidor.

Cuando se utiliza HTTP sobre TLS, se establece una conexión segura entre el cliente y el servidor. El cliente y el servidor intercambian certificados digitales para autenticarse mutuamente y acuerdan una clave de cifrado para proteger la comunicación. Esto permite que los datos enviados a través de HTTPS sean cifrados y solo puedan ser decodificados por el cliente y el servidor legítimos.


### LAN gateway

Un LAN gateway (puerta de enlace LAN) es un dispositivo o software que actúa como un punto de entrada o salida entre una red local (LAN) y una red externa, como Internet. Es responsable de enrutar los paquetes de datos entre la red local y la red externa, permitiendo que los dispositivos de la LAN se comuniquen con dispositivos en otras redes.

El LAN gateway actúa como un intermediario entre los dispositivos de la red local y el resto del mundo. Proporciona funciones de enrutamiento, traducción de direcciones de red (NAT), seguridad y control de acceso para gestionar el flujo de tráfico de datos.


### Servidor DNS

Un servidor DNS (Domain Name System) es un componente fundamental de la infraestructura de Internet que se encarga de traducir nombres de dominio legibles por humanos en direcciones IP numéricas que las computadoras utilizan para comunicarse entre sí.


### MitM

MitM es la abreviatura de "Man-in-the-Middle" (hombre en el medio) y se refiere a un tipo de ataque cibernético en el que un atacante se posiciona entre dos partes que están intentando comunicarse, interceptando y posiblemente modificando la comunicación entre ellas sin que lo sepan.

En un ataque MitM, el atacante se sitúa en una posición privilegiada en la red o utiliza técnicas de envenenamiento de ARP (Address Resolution Protocol) u otros métodos para redirigir el tráfico entre las partes objetivo a través de su propio sistema. Esto permite al atacante tener acceso a los datos que se intercambian entre las partes y potencialmente manipularlos.


## ARP poisoning o ARP spoofing 

ARP poisoning o ARP spoofing (envenenamiento o falsificación de ARP) es una técnica de ataque en redes de área local (LAN) donde un atacante envía mensajes ARP falsificados en la red con el objetivo de engañar a los dispositivos y redirigir su tráfico a través del atacante.

En un ataque de envenenamiento ARP, el atacante envía mensajes ARP falsificados al resto de los dispositivos en la red, haciéndose pasar por otro dispositivo legítimo. Esto puede incluir enviar respuestas ARP falsas afirmando que el atacante tiene la dirección MAC asociada a una dirección IP específica.

El objetivo principal de un ataque de envenenamiento ARP es manipular las tablas ARP de los dispositivos en la red local para que redirijan su tráfico a través del atacante. Esto puede permitir al atacante interceptar y capturar el tráfico de red, realizar ataques de MitM para leer, modificar o inyectar datos en las comunicaciones, o incluso negar el servicio al bloquear el tráfico.


## DNS Spoofing

DNS spoofing es una técnica de ataque cibernético en la que un atacante falsifica o manipula las respuestas del servidor DNS con el objetivo de redirigir el tráfico de Internet a sitios web maliciosos o controlados por el atacante.

En un ataque de DNS spoofing, el atacante intercepta y manipula las respuestas del servidor DNS. Por ejemplo, el atacante puede falsificar una respuesta DNS para que un nombre de dominio legítimo apunte a una dirección IP controlada por el atacante en lugar de la dirección IP real. Esto puede hacer que los usuarios sean redirigidos a sitios web maliciosos sin su conocimiento.

## HSTS

HSTS significa "HTTP Strict Transport Security" (Seguridad de transporte estricta de HTTP). Es un mecanismo de seguridad implementado a nivel de servidor web que permite a los sitios web especificar que los navegadores solo deben comunicarse con ellos a través de conexiones seguras mediante el protocolo HTTPS (HTTP seguro).

Cuando un sitio web habilita HSTS, envía una respuesta especial al navegador que incluye una política de seguridad HSTS. Esta política indica al navegador que todas las solicitudes futuras a ese sitio web deben ser realizadas utilizando HTTPS en lugar de HTTP, incluso si el usuario ingresa manualmente "http://" en la URL o hace clic en enlaces que usen "http://".

El objetivo principal de HSTS es proteger a los usuarios y sus datos al garantizar que las comunicaciones entre el navegador y el servidor web se realicen siempre de forma segura a través de conexiones HTTPS. Al utilizar HTTPS, se establece un canal cifrado entre el navegador y el servidor, lo que ayuda a prevenir ataques de interceptación de datos y manipulación de información sensible.

HSTS es especialmente útil en la protección contra ataques como SSL stripping y man-in-the-middle, donde un atacante intenta forzar una conexión no segura a pesar de que el sitio web admite HTTPS.


## Introducción a SSLStrip

SSLStrip es una técnica de ataque que tiene como objetivo interceptar y manipular la comunicación segura (HTTPS) entre un cliente y un servidor. El nombre "SSLStrip" proviene de la abreviatura de SSL, que se utiliza para establecer conexiones seguras, y "strip" (despojar) porque el ataque busca "despojar" la capa de seguridad SSL/TLS de la comunicación.

El ataque SSLStrip se aprovecha de la tendencia de los usuarios a ingresar direcciones URL sin el prefijo "https://" en el navegador. Cuando un cliente intenta acceder a un sitio web seguro utilizando HTTPS, el atacante, que está ubicado entre el cliente y el servidor, intercepta las solicitudes del cliente y redirige las solicitudes a una versión no segura del sitio (HTTP) sin que el cliente se dé cuenta.

Una vez que la conexión se ha redirigido a HTTP, el atacante puede realizar diversas acciones maliciosas, como la captura de información confidencial transmitida, como contraseñas o datos personales. El atacante también puede realizar ataques de tipo "Man-in-the-Middle" (hombre en el medio) para interceptar y modificar los datos transmitidos entre el cliente y el servidor.

Para llevar a cabo el ataque SSLStrip, el atacante utiliza diversas técnicas, como modificar las respuestas del servidor para eliminar las redirecciones HTTPS, reemplazar enlaces seguros por enlaces no seguros o utilizar técnicas de falsificación para engañar al cliente y hacerle creer que está en una conexión segura cuando en realidad no lo está.

Es importante tener en cuenta que SSLStrip solo puede tener éxito cuando los usuarios no ingresan manualmente "https://" en la URL o cuando los sitios web no redirigen automáticamente las conexiones HTTP a HTTPS. Para mitigar los riesgos de SSLStrip, es esencial que los usuarios estén atentos a la seguridad de las conexiones y utilicen siempre HTTPS al acceder a sitios web que requieran privacidad y seguridad. Además, los sitios web deben implementar redirecciones automáticas de HTTP a HTTPS para evitar este tipo de ataques.


https://miloserdov.org/?tag=sslstrip-sslstrip

https://www.bettercap.org/

https://web.archive.org/web/20150921195009/http://sign0f4.blogspot.com/2014/10/mitmf-v07-released-sslstrip-integration.html