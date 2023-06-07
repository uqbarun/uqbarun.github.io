---
title: Redirección de puertos, túneles SSH y pivoting
---

# Redirección de puertos, Túneles SSH y pivoting

## Rinetd Port-Forwarding: Sacar tráfico desde adentro de una firewall

En este escenario, tenemos acceso a la terminal de una máquina dentro de una red interna, que llamaremos maquina **local** y tenemos acceso a la terminal a una máquina fuera de la red interna que llamaremos **pivote**.
* La maquina **local** hace una petición saliente al puerto `TCP/80` de un servidor web en una máquina que llamaremos **final** y cuya dirección IP es `a.b.c.d`. 
* Digamos que el firewall de la red interna bloquea esta petición saliente, porque solo permite salir tráfico `TCP/53`
* Pero tenemos una máquina **pivote** por fuera firewall con la IP pública  `w.x.y.z` y con el puerto `TCP/53` expuesto a la internet.
* Lo que haremos es configurar Rinetd en la máquina **pivote** para que lo que reciba en `TCP/53` lo reenvíe a `a.b.c.d:80` la máquina **final**. 


1. Primero nos aseguraremos de que tengamos corriendo Rinetd:

	```bash
	uqbar@remoto:~$ sudo apt update
	uqbar@remoto:~$ sudo apt install rinetd
	```
    
	```bash
	sudo service rinetd  status
	● rinetd.service
	     Loaded: loaded (/etc/init.d/rinetd; generated)
	     Active: active (running) 
	       Docs: man:systemd-sysv-generator(8)
	    Process: 1564 ExecStart=/etc/init.d/rinetd start (code=exited, status=0/SUCCESS)
	      Tasks: 1 (limit: 1145)
	     Memory: 228.0K
	        CPU: 10ms
	     CGroup: /system.slice/rinetd.service
	             └─1568 /usr/sbin/rinetd

	Jun 05 01:20:20 temp systemd[1]: Starting rinetd.service...
	Jun 05 01:20:20 temp rinetd[1564]: Starting internet redirection server: rinetd.
	Jun 05 01:20:20 temp systemd[1]: Started rinetd.service.
	Jun 05 01:20:20 temp rinetd[1568]: Starting redirections...
	```

2.  En tu máquina **pivote**, abre el archivo de configuración de Rinetd. Por lo general, se encuentra en `/etc/rinetd.conf`. Si el archivo no existe, puedes crearlo.

	```bash
	sudo vim /etc/rinetd.conf
	```
    
3.  En el archivo de configuración, añade una nueva línea para cada puerto que deseas reenviar. El formato es el siguiente:
       
    ```plaintext
    <dirección IP pivote> <puerto pivote> <dirección IP final> <puerto final>
    ```   
        
    Por ejemplo, si deseas reenviar el puerto 53 de tu máquina **pivote** al puerto 80 de la máquina **final**, puedes añadir la siguiente línea:
    
	```plaintext
	...
	# bindadress    bindport    connectaddress  connectport
	w.x.y.z         53        	a.b.c.d 		80
	...
	```
    
    Asegúrate de reemplazar `w.x.y.z` con la dirección IP de tu máquina **pivote** y `a.b.c.d` con la dirección IP **final**.
    
4.  Guarda el archivo de configuración y reinicia el servicio Rinetd en tu máquina local para que los cambios surtan efecto.
    
    En sistemas basados en Debian/Ubuntu, puedes reiniciar el servicio ejecutando el siguiente comando:    
	 ```bash
	 sudo service rinetd restart
	 ```
           
    En sistemas basados en Red Hat/CentOS, puedes usar este comando:
 	```bash
	sudo systemctl restart rinetd
	 ```   
        
Una vez que hayas completado estos pasos, el tráfico que llegue al puerto especificado en tu máquina pivote será reenviado al puerto correspondiente en la máquina **final**.

## SSH local port-forwarding: Sacar y cifrar tráfico desde adentro de una firewall

Es básicamente el mismo escenario solo que ahora tienes corriendo un servidor SSH en el puerto 22 de tu máquina pivote, y además todo el tráfico va encapsulado sobre SSH. Para ello vamos a utlizar una conexión SSH con la siguiente que tiene la siguiente sintáxis

```bash
ssh <pivote> -L <puerto-local>:<IP-final>:<puerto-final>
```

```bash
contabilidad@empresa:~$: ssh uqbar@pivote -p 53 -LN 8080:final:80
```
  
*   `uqbar@pivote`: Indica el nombre de usuario (`uqbar`) y el nombre o dirección IP del servidor **pivote** al que deseas conectarte. Debes reemplazar `uqbar` con tu nombre de usuario y `pivote` con el nombre o dirección IP del servidor intermedio real.
    
*   `-p 53`: Especifica el número de puerto SSH para establecer la conexión. En este caso, se utiliza el puerto 53. Si el servidor **pivote** utiliza un puerto SSH diferente, debes reemplazar `53` con el número de puerto correspondiente.
    
*   `-L`: Esta opción configura el reenvío de puertos local. Significa que el puerto en tu máquina **local** se redirigirá hacia otro puerto en la máquina **final** a través del servidor **pivote**.
    
*   `N`: Indica que no se debe ejecutar ningún comando remoto después de establecer la conexión SSH. Esto es útil cuando solo deseas establecer el reenvío de puertos sin ejecutar comandos adicionales en el servidor intermedio.
    
*   `8080:final:80`: Aquí es donde se define el reenvío de puertos. El puerto 8080 de tu máquina **local** se redirigirá al puerto 80 de la máquina **final** a través del servidor **pivote**.
    

## SSH remote port-forwarding: Dejar entrar tráfico desde afuera de una firewall

Tienes un servidor web corriendo en el puerto `TCP/8080` en tu máquina local de la casa, pero tu ISP te bloquea toda comunicación entrante, así que nadie puede ver tu maravilloso servidor web. Es decir cuando le pasas a tu amigo al dirección de IP pública a tu amigo, tu amigo lo único que ve es un error HTTP ('connection refused') o el portal de administración de tu modem. Sin embargo, el PC de otro amigo (o simplemente una instacia de EC2 de AWS o un CE de GCP) si tienen expuestos el puerto `TCP/8081` y además el puerto `TCP/22` tiene corriendo un servidor SSH.



Lanzamos un servidor web (vulnerable en este caso) y mapeamos su puerto 80 al puerto 8080 del host:

```bash
uqbar@local:~$ docker run --name dvwa --rm -it -p 127.0.0.1:8080:80 vulnerables/web-dvwa
```

Podemos comprobar que efectivamente hay un servicio escuchando en `TCP/8080` pero solo para interfaz de *loopback* `127.0.0.0/8`

```bash
uqbar@local:~$ sudo ss -tulpn | grep 8080
tcp	LISTEN   0	4096	127.0.0.1:8080	0.0.0.0:*	users:(("docker-proxy",pid=347152,fd=4))
```

```bash
uqbar@local:~$ curl -I 127.0.0.1:8080/login.php
HTTP/1.1 200 OK
Date: Mon, 05 Jun 2023 06:40:03 GMT
Server: Apache/2.4.25 (Debian)
Set-Cookie: PHPSESSID=grrg09l38d0ht1tqngahet7i16; path=/
Expires: Tue, 23 Jun 2009 12:00:00 GMT
Cache-Control: no-cache, must-revalidate
Pragma: no-cache
Set-Cookie: PHPSESSID=grrg09l38d0ht1tqngahet7i16; path=/
Set-Cookie: security=low
Content-Type: text/html;charset=utf-8
```

Ahora SSH entra en acción: La opción `-NR 8081:127.0.0.1:8080` indica que se establecerá un reenvío de puertos remoto desde el puerto 8081 la máquina remota hacia el puerto 8080 en tu máquina local. Esto permite que cualquier tráfico que llegue al puerto 8081 de la máquina remota se redirija al puerto 8080 en tu máquina local.

```bash
uqbar@local:~$ ssh uqbar@remoto -p 22 -NR 8081:127.0.0.1:8080
```
    
*   `uqbar@remoto`: Indica el nombre de usuario (`uqbar`) y la dirección IP o nombre de host (`remoto`) del servidor al que deseas conectarte. Debes reemplazar `uqbar` con tu nombre de usuario y `remoto` con la dirección IP o nombre de host real del servidor remoto.
    
*   `-p 22`: Especifica el número de puerto SSH para establecer la conexión. En este caso, se utiliza el puerto estándar SSH, que es el puerto 22. Si el servidor remoto utiliza un puerto SSH diferente, debes reemplazar `22` con el número de puerto correspondiente.

*   `-N`: Esta opción indica a SSH que no debe ejecutar ningún comando remoto después de establecer la conexión. Esto es útil cuando solo deseas establecer el reenvío de puertos sin ejecutar comandos adicionales en el servidor remoto.
    
*   `-R`: Esta opción especifica el tipo de reenvío de puertos a utilizar, en este caso, un reenvío remoto. Significa que se establecerá un túnel desde el servidor remoto hacia tu máquina local.
   
*   `8081` es el puerto remoto. Indica el puerto en máquina remota que recibirá el tráfico del internet.
    
*   `127.0.0.1`: Especifica la dirección IP de destino a la que se redirigirá el tráfico en tu máquina local. En este caso, se utiliza `127.0.0.1`, que es la dirección IP de loopback de tu máquina local, lo que significa que el tráfico se redirigirá internamente dentro de tu máquina.
    
*   `8080`: Es el número de puerto en tu máquina local al que se redirigirá el tráfico proveniente de la máquina remota.
    
    
Si nuestra máquina es una instancia de álguna VM IaaS como Compute Enguine de Google Cloud podmeos pasarles las baderas a los argumentos del cliente de `gcloud`:


```bash
uqbar@local:~$  gcloud compute ssh --zone "us-east1-b" "temp" --project "lab-uqbarun" -- -NR 8081:127.0.0.1:8080
```

¿Ya podemos acceder desde internet? No, porque el puerto se enlaza la IP de *loopback* lo que signiica que el contenido solo puede ser accedido desde la misma máquina:

```bash
uqbar@remote:~$ sudo ss -tulpn | grep 8081
tcp   LISTEN 0      128                       127.0.0.1:8081      0.0.0.0:*    users:(("sshd",pid=61544,fd=11)) 
tcp   LISTEN 0      128                           [::1]:8081         [::]:*    users:(("sshd",pid=61544,fd=10)) 
```


Sin enbardo podemos utilizar `socar` para "clonar" `127.0.0.1:8081` en `0.0.0.0:80`:
```bash
uqbar@remote:~$ socat TCP-LISTEN:80,fork,bind=0.0.0.0 TCP:127.0.0.1::8081

```

El comando `socat TCP-LISTEN:80,fork,bind=0.0.0.0 TCP:localhost:8081` utiliza la herramienta `socat` para establecer una conexión de reenvío de puertos entre el puerto 80 y el puerto 8081 en una máquina local. Aquí está la explicación de cada parte del comando:
    
*   `TCP-LISTEN:80`: Indica que `socat` debe escuchar en el puerto TCP 80 en la máquina local.
    
*   `fork`: Esta opción permite que `socat` maneje múltiples conexiones entrantes al mismo tiempo mediante la creación de un proceso hijo para cada una de ellas.
    
*   `bind=0.0.0.0`: Especifica que `socat` debe enlazarse a todas las interfaces de red disponibles en la máquina local (remota desde nuestro punto de vista). Esto permite que el servicio esté disponible tanto desde la red local como desde la red externa.
    
*   `TCP:127.0.0.1::8081`: Indica que `socat` debe redirigir las conexiones entrantes del puerto 80 hacia el puerto TCP 8081 en la máquina local.

Ahora ya cualquier persona desde el internet

```bash
tlon@local:~$ curl -I <IP-pública-máquina-remota>/login.php

HTTP/1.1 200 OK
Date: Mon, 05 Jun 2023 07:02:33 GMT
Server: Apache/2.4.25 (Debian)
Set-Cookie: PHPSESSID=0t2enppbvo8tiu4n4m79p8ns62; path=/
Expires: Tue, 23 Jun 2009 12:00:00 GMT
Cache-Control: no-cache, must-revalidate
Pragma: no-cache
Set-Cookie: PHPSESSID=0t2enppbvo8tiu4n4m79p8ns62; path=/
Set-Cookie: security=low
Content-Type: text/html;charset=utf-8
```

## SSH dynamic port-forwarding: desembocar un proxy sokect

Hemos encontrado las credenciales SSH del usuario `webmaster` de un servidor web que tiene expuesto el servicio SSH al internet.

El comando `ssh webmaster@empresa.com -p 22 -D 9080` establece una conexión SSH con reenvío de puertos y se utiliza para crear un túnel SOCKS en tu máquina local hacia el servidor remoto en `empresa.com`. Aquí está la explicación de cada parte del comando:

   
*   `webmaster@empresa.com`: Indica el nombre de usuario (`webmaster`) y la dirección del servidor remoto (`empresa.com`) al que deseas conectarte. Debes reemplazar `webmaster` con tu nombre de usuario y `empresa.com` con la dirección del servidor remoto real.
    
*   `-p 22`: Especifica el número de puerto SSH para establecer la conexión. En este caso, se utiliza el puerto estándar SSH, que es el puerto 22. Si el servidor remoto utiliza un puerto SSH diferente, debes reemplazar `22` con el número de puerto correspondiente.
    
*   `-D 9080`: Esta opción configura un túnel SOCKS en tu máquina local en el puerto 8080. SOCKS es un protocolo que permite enrutar el tráfico de red a través de un proxy. Al establecer un túnel de SOCKS, puedes dirigir el tráfico de red a través de la conexión SSH hacia el servidor remoto.
    

### Proxychains

Abre el archivo de configuración de Proxychains ubicado en `/etc/proxychains.conf`[^1], busca la sección `[ProxyList]` y añade la siguiente línea al final:

```config
socks5 127.0.0.1 9080
```    

Ahora supondiendo que la LAN interna es la 192.168.0.0/24 podemos escanear estan por fuerea del firewall

```bash!
proxychains nmap 192.168.0.2
```

## Chisel

Podemos seguir un método parecido con chisel[^1].

Podemos [binarios](https://github.com/jpillora/chisel/releases)

```bash
uqbar@remote:~$ wget -O chisel.gz https://github.com/jpillora/chisel/releases/download/v1.8.1/chisel_1.8.1_linux_amd64.gz
uqbar@remote:~$ gunzip -c chisel.gz > chisel
uqbar@remote:~$ rm chisel.gz
uqbar@remote:~$ chmod +x chisel
```

```bash
uqbar@remote:~$ ./chisel server -p 8001 --reverse -v
2023/06/05 08:22:25 server: Reverse tunnelling enabled
2023/06/05 08:22:25 server: Fingerprint jrvVynIayTTDTO4yEOKG2am3UIckGRqhSIhCoaVX6/A=
2023/06/05 08:22:25 server: Listening on http://0.0.0.0:8001```
```

```bash
webmaster@empresa:~$ ./chisel client -v --fingerprint 'jrvVynIayTTDTO4yEOKG2am3UIckGRqhSIhCoaVX6/A=' $remoto:8001 R:2000:socks
```



Agrgar a proxychains



sudo vim /etc/proxychains.conf
```config
socks5 127.0.0.1 2000
```    



prueba:

```bash
proxychains firefox --marionette -P default https://check.torproject.org
```


Siguiente salto


```config
proxychains ssh ...
```    


https://www.poplabsec.com/chisel-reverse-proxy-pivoting-networks/

[^1]:chisel https://github.com/jpillora/chisel