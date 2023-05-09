PASO 1

Instalar Node.js

* Primero actualice el índice de su paquete local escribiendo:
$ sudo apt update

* Installar Node.js:
$ sudo apt install nodejs

* Presionar Y cuando se solicite para confirmar la instalación.
Si se solicita que reinicie algún servicio, presione ENTER para aceptar los valores predeterminados y continuar. 
Compruebar que la instalación se haya realizado correctamente consultando el número de versión del nodo:
$ node -v

Deberá aparece algo como esto:
v12.22.9

* Si el paquete en los repositorios se adapta a las  necesidades,
esto es todo lo que se  necesita hacer para configurar Node.js.
En la mayoría de los casos, también se requiere  instalar npm,
el administrador de paquetes de Node.js.
Para hacer esto instalando el paquete npm con apt:
$ sudo apt install npm

* Verificar versión (Opcional)
$ npm -v
Debe aparecer algo como esto:
8.5.1

PASO 2
Instalar node-express en Ubuntu 22.04

Actualizar la base de datos apt con apt-get usando el siguiente comando.

$ sudo apt-get update

Después de actualizar la base de datos apt, se puede instalar node-express usando apt-get ejecutando el siguiente comando:

$ sudo apt-get -y install node-express

Instalar node-express usando apt
Actualice la base de datos apt con apt usando el siguiente comando.

$ sudo apt update

Después de actualizar la base de datos apt, se puede instalar node-express usando apt ejecutando el siguiente comando:

$ sudo apt -y install node-express

Instalar node-express Usando aptitude
Si se desea seguir este método, es posible que deba instalar aptitude primero,
 ya que aptitude generalmente no se instala de forma predeterminada en Ubuntu.
 Actualizar la base de datos apt con aptitude usando el siguiente comando.

$ sudo aptitude update

Después de actualizar la base de datos apt, se puede instalar node-express usando aptitude ejecutando el siguiente comando:

$ sudo aptitude -y install node-express
