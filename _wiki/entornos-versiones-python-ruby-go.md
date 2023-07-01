---
title: Gestión de entornos y versiones para Python, Ruby y Go
---
# Gestión de entornos y versiones para Python, Ruby y Go

## Bundler y rbenv
ruby -v
rbenv local 2.7.6
bundle install

## Virtualenv y pyenv

Virtualenv y pyenv son herramientas utilizadas en entornos de desarrollo de Python, pero tienen funciones y propósitos diferentes.

### Virtualenv

Virtualenv es una herramienta que permite crear entornos virtuales aislados para proyectos de Python. Un entorno virtual es una instalación de Python independiente que puede tener su propia configuración de paquetes y versiones de Python. Esto permite tener proyectos con diferentes dependencias y versiones de Python sin que entren en conflicto entre sí.

Virtualenv crea un directorio que contiene una copia del intérprete de Python y una copia aislada del paquete pip (administrador de paquetes de Python). Dentro del entorno virtual, se pueden instalar y administrar paquetes de Python sin afectar el sistema global de Python.


#### Instalación:

Instala Virtualenv en tu sistema ejecutando el siguiente comando en la línea de comandos:

```bash
pip3 install virtualenv
```

o

```bash
curl https://bootstrap.pypa.io/pip/2.7/get-pip.py --output get-pip.py
sudo python2 get-pip.py
pip2 install virtualenv
```

#### Crear un entorno virtual:
Navega a la ubicación de tu proyecto en la línea de comandos. Crea un nuevo entorno virtual ejecutando el siguiente comando:

```bash
virtualenv -p python2 nombre_del_entorno
```

Esto creará un directorio con el nombre "nombre_del_entorno" que contiene el intérprete de Python y la copia aislada de pip.


#### Activar el entorno virtual:

En Windows:

```cmd
nombre_del_entorno\Scripts\activate
```

En macOS/Linux:

```shell
source nombre_del_entorno/bin/activate
```


#### Instalar paquetes:

Una vez que el entorno virtual está activado, puedes instalar paquetes de Python utilizando pip normalmente. Los paquetes se instalarán en el entorno virtual y no afectarán al sistema global de Python.


#### Desactivar el entorno virtual:

Para desactivar el entorno virtual, simplemente ejecuta el siguiente comando en la línea de comandos:

```
deactivate
```


### Pyenv


Pyenv es una herramienta utilizada para gestionar múltiples versiones de Python en un sistema. Permite instalar, cambiar y administrar versiones diferentes de Python en un entorno de desarrollo. Con pyenv, puedes tener varias versiones de Python instaladas en tu sistema y cambiar fácilmente entre ellas según tus necesidades.

Pyenv también se puede utilizar junto con virtualenv para crear entornos virtuales aislados con una versión específica de Python. Esto significa que puedes tener diferentes versiones de Python en tu sistema y utilizar un entorno virtual para cada proyecto, lo que te brinda más flexibilidad en la elección de la versión de Python adecuada para cada proyecto.


#### Instalación:
Instala pyenv en tu sistema siguiendo las instrucciones específicas de instalación según tu sistema operativo. Puedes encontrar las instrucciones en el repositorio oficial de pyenv en GitHub: <https://github.com/pyenv/pyenv>


#### Configuración:
Después de la instalación, agrega las siguientes líneas al archivo de inicio de tu shell (por ejemplo, .bashrc o .zshrc) para cargar pyenv automáticamente:

```
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```


#### Uso de pyenv:
Instalación de versiones de Python:
Utiliza el comando `pyenv install` seguido de la versión de Python que deseas instalar. Por ejemplo, para instalar Python 3.9.6:

```
pyenv install 3.9.6
```

Cambiar la versión de Python global:
Utiliza el comando `pyenv global` seguido de la versión de Python que deseas utilizar globalmente en tu sistema. Por ejemplo, para cambiar a Python 3.9.6:

```
pyenv global 3.9.6
```

Crear un entorno virtual con pyenv y virtualenv:
Después de instalar pyenv y virtualenv, puedes combinarlos para crear entornos virtuales con versiones específicas de Python. Por ejemplo, para crear un entorno virtual llamado "myenv" con Python 3.9.6:

```
pyenv virtualenv 3.9.6 myenv
```

Activar un entorno virtual:
Utiliza el comando `pyenv activate` seguido del nombre del entorno virtual para activarlo. Por ejemplo, para activar el entorno virtual "myenv":

```
pyenv activate myenv
```

Desactivar un entorno virtual:
Utiliza el comando `pyenv deactivate` para desactivar el entorno virtual y volver al sistema global de Python.


## Go modules