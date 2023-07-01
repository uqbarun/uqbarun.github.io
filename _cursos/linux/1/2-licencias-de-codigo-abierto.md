---
title: Licencias de código abierto
chapter: 1.2
---

# Licencias de código abierto


## Comunidad de código abierto y libre

### Licencia BSD


### GNU y el Software Libre

En enero de 1984, Richard Stallman renunció a su puesto en el MIT para comenzar a desarrollar GNU. Renunció para evitar que el MIT pudiera interferir en la distribución de GNU como software libre. Sin embargo, el profesor Winston, en ese momento jefe del Laboratorio de Inteligencia Artificial del MIT, lo invitó a seguir utilizando su antigua oficina y las instalaciones, y comenzó a desarrollar las piezas necesarias. A principios de 1985, lanzó la primera pieza que otros programadores estaban interesados en usar, un editor llamado [GNU Emacs](https://en.wikipedia.org/wiki/GNU_Emacs). Lo hizo disponible de forma gratuita a través de FTP anónimo, pero en ese momento el acceso a Internet no era muy común. Como una forma alternativa de distribuir el software, ofreció enviar el paquete en cinta a las personas por $150 USD (lo que para el 2023 sería alrededor de $425 USD). En pocos meses, estaba recibiendo de 8 a 10 pedidos por mes, lo que le permitió cubrir sus gastos de subsistencia. "Así que todo estaba bien, pero la gente solía preguntarme: '¿Cómo puede ser *free software* si cuesta $150 dólares?'... la razón por la que hacían esta pregunta era que estaban confundidos por los múltiples significados de la palabra 'free' en inglés. Un significado se refiere al precio y otro significado se refiere a la libertad. Cuando hablo de software libre, me refiero a la libertad, no al precio." [^2].

### GNU-GPL

Con el trabajo en GNU avanzando, Stallman necesitaba una forma de proteger su trabajo para evitar que fuera tomado y utilizado en paquetes propietarios. Para asegurar esta protección, Stallman desarrolló el concepto general de **copyleft**. Tradicionalmente, el software se pone a disposición ya sea mediante su liberación por parte del autor en el dominio público, o mediante el cierre del código fuente y el uso de derechos de autor y términos de licencia para protegerlo y evitar su modificación. Cada opción presentaba un problema para Stallman: liberar el software en el dominio público significa que cualquiera puede tomarlo y apropiarse de él para su propio uso, incluyendo la posibilidad de copyrightearlo y licenciarlo como un producto propietario. Liberarlo con derechos de autor y términos de licencia restrictivos impide el mecanismo completo de revisión por parte de los usuarios, corrección de errores y adición de funciones que Stallman consideraba valioso [^2]. 

> "Para copyleftear un programa, primero declaramos que tiene derechos de autor; luego agregamos términos de distribución, que son un instrumento legal que otorga a todos los derechos para usar, modificar y redistribuir el código del programa o cualquier programa derivado de él, pero solo si los términos de distribución permanecen sin cambios. Así, el código y las libertades se vuelven legalmente inseparables. Los desarrolladores de software propietario utilizan los derechos de autor para quitarle la libertad a los usuarios; nosotros utilizamos los derechos de autor para garantizar su libertad. Por eso invertimos el nombre, cambiando 'copyright' a 'copyleft'" [^3]. 

El método específico que Stallman utilizó para copyleftear GNU fue un acuerdo de licencia que desarrolló llamado **Licencia Pública General** de GNU, en inglés *General Public License* (GPL). La primera versión se lanzó en 1989; la segunda y actual versión se lanzó en 1991[^2].

Stallman define el software libre como aquel que posee cuatro libertades esenciales: 

* Tienes la libertad de ejecutar el programa, para cualquier propósito. 
* Tienes la libertad de modificar el programa para adaptarlo a tus necesidades. (Para que esta libertad sea efectiva en la práctica, debes tener acceso al código fuente, ya que hacer cambios en un programa sin tener el código fuente es sumamente difícil). 
* Tienes la libertad de redistribuir copias, ya sea de forma gratuita o a cambio de un pago. 
* Tienes la libertad de distribuir versiones modificadas del programa, de manera que la comunidad pueda beneficiarse de tus mejoras[^3].

[^3]: Richard Stallman, “The GNU Operating System and the Free Software Movement,” in Open Sources: Voices From the Open Source Revolution, edited by Chris DiBona, Sam Ockman, and Mark Stone (Sebastopol, CA: O’Reilly & Associates, 1999), p. 56

Estas 4 libertades son ahora las fundaciones de la Licensia GNU GPL bajo las cuales estan protegidos el kernel de linux y todo el código del proyecto GNU.


### Código Abierto

El término Código Abierto o *Open Source* surgió en una reunión en 1997-1998 para difundir herramientas desarrolladas fuera del modelo de software propietario. Propuesto por [Christine Peterson](https://en.wikipedia.org/wiki/Christine_Peterson) del [Instituto Foresight](https://en.wikipedia.org/wiki/Foresight_Institute). Christine cuenta la historia...

> Fue un esfuerzo muy deliberado para cambiar el nombre. A finales de 1997 o principios de 1998, varios de nosotros sentíamos que el nombre "**software libre**" estaba frenando el floreciente sector/movimiento. Los recién llegados siempre pensaban que "libre" significaba gratuito, no libre en términos de libertad de expresión. Se discutieron varias ideas, incluso en una reunión en Foresight, pero ninguna ganaba aceptación.
> Por mi cuenta, se me ocurrió la idea de "**código abierto**", la compartí con mi amigo de relaciones públicas (a quien no le gustó) y con un par de amigos personales (a quienes sí les gustó).
> En la siguiente reunión del pequeño grupo convocado por Eric Raymond, esta vez en VA, me sentía tímido para sugerir el nuevo término, ya que no tenía autoridad con este grupo. Entonces Todd Andersen, con quien había planeado el cambio de nombre, lo mencionó de manera casual, sin proponerlo explícitamente como un nuevo término.
> Inmediatamente captó la atención en la reunión, sin que los demás se dieran cuenta, excepto Todd y yo, quienes nos guiñamos el ojo.
> Al final de la reunión, Todd o yo señalamos que este nuevo término parecía estar funcionando y que la gente parecía dispuesta a probarlo.
> Más tarde, los demás no estaban seguros de quién lo propuso, pero Todd se aseguró de que yo recibiera el crédito, algo que normalmente no busco. Fue amable de su parte. Y Eric Raymond también se ha asegurado de que se me atribuya el mérito por ello.
> Ahora intento cambiar el nombre de las cosas todo el tiempo. Me subió el ego con este éxito. ;^) [^2]

La definición de Código Abierto es:

* La licencia no debe restringir a ninguna parte la venta o entrega del software como componente de una distribución de software agregada que contenga programas de varias fuentes diferentes. 
* El programa debe incluir el código fuente y debe permitir la distribución tanto en forma de código fuente como compilado. 
* La licencia debe permitir modificaciones y trabajos derivados, y debe permitir su distribución bajo los mismos términos que la licencia del software original. 
* La licencia puede restringir que el código fuente se distribuya en forma modificada solo si la licencia permite la distribución de "archivos de parche" junto con el código fuente con el fin de modificar el programa durante el proceso de compilación. 
* La licencia no debe discriminar a ninguna persona o grupo de personas. 
* La licencia no debe restringir a nadie el uso del programa en un campo de actividad específico. 
* Los derechos asociados al programa deben aplicarse a todos aquellos a quienes se redistribuye el programa sin necesidad de ejecutar una licencia adicional por parte de esas partes. 
* La licencia no debe ser específica de un producto. 
* La licencia no debe contaminar otro software imponiendo restricciones a cualquier software distribuido junto con el software con licencia.[^4]

## Código Abierto vs GNU-GPL

Esta es la objeción de Richard Stallman al software de código abierto:

> La Definición de Open Source permite mayores libertades con las licencias que la GPL. En particular, la Definición de Open Source permite una mayor promiscuidad al mezclar software propietario y software de código abierto. [...] ya que permite la inclusión de software propietario y pasa por alto el problema filosófico de la libertad del software. Sin estas libertades, no hay un imperativo filosófico para mejorar la comunidad. Sin embargo, discrepamos en los principios básicos, pero estamos de acuerdo más o menos en las recomendaciones prácticas. Por lo tanto, podemos y trabajamos juntos en muchos proyectos específicos. No consideramos al movimiento de Open Source como el enemigo". [^5]



## 1.3 Comprensión del software de código abierto y las licencias

Peso: 1

Descripción: Comunidades abiertas y licencias de software de código abierto para negocios.

Áreas clave de conocimiento:

javaCopy code

Licencias Free Software Foundation (FSF)
Iniciativa de código abierto (OSI)

Términos y utilidades:


GPL,
BSD, 
Creative Commons 
Software libre, 
software de código abierto, 
FOSS, 
FLOSS 
Modelos de negocio de código abierto

## Quiz

¿Qué dispositivos pueden correr Linux?

## Bibliografía

[^1]: A Brief History of Hackerdom. (2002, Agosto 15). Recuperado de <http://catb.org/~esr/writings/cathedral-bazaar/hacker-history>

[^2]: Bretthauer, D. (2001). Open Source Software: A History. OpenCommons@UConn. Recuperado de https://opencommons.uconn.edu/libr_pubs/7

[^3]: Licenses - GNU Project - Free Software Foundation. (2023, Junio 28). Recuperado de <https://www.gnu.org/licenses/licenses.html>

[^4]: The Open Source Definition. (2023, Febrero 22). Recuperado de <https://opensource.org/osd>

[^5]: Why “Free Software” is better than “Open Source” - GNU Project - Free Software Foundation. (2023, Junio. 27). Recuperado de <https://www.gnu.org/philosophy/free-software-for-freedom.html>

[^6]: Montague, B. (2007). Comparing the BSD and GPL Licenses. Open Source Business Resource, (Octubre 2007). Recuperado de <https://timreview.ca/article/67>