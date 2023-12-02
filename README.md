# Proyecto: Entrega 3 

* **Grupo:** grupo_JMJ_frontend
* **Fecha:** Viernes 17 de Noviembre del 2023

## Objetivos:
* Construir sitios con contenido dinámico.
* Construir aplicaciones usando las tecnologías y herramientas disponibles.
* Integrar técnicas de desarrollo de software para construir aplicaciones web de alta calidad.
  
## Descripción:
El proyecto consiste en un organizador de horario, al cual, al agregarle las horas necesarias de estudio para cada ramo, me entregará mi horario de como debo estudiar, de manera simple y automática.

Para esta entrega, completamos lo comenzado en entregas anteriores tanto en términos de frontend como de backend. Esto implica la finalización de la interfaz principal de usuario de la aplicación web. Cumpliendo con ser atractiva, sencilla de utilizar, y funcional, manteniendo una adecuada conexión con el backend.

Por lo que los componentes a implementar en esta entrega son:
* Manejo de sesión
* Realización de CRUDs
* Interfaz principal de usuario
* Documentación de la API
* Uso de Linter


## :computer: Documentación 
### Base de Datos

* Para configurar la Base de Datos se debe primero se debe crear (fuera de toda carpeta) el siguiente archivo .env:
  ```bash
  DB_USERNAME = usuario
  DB_PASSWORD = clave
  DB_NAME = web_db
  DB_HOST = localhost
  ```
* Para así tener su usuario de postgres configurado
* Luego en la consola de un computador Windows las siguientes líneas de código:
  ```bash
  sudo service postgresql start
  ```
  ```bash
  sudo -u postgres createdb web_db_development
   ```
  ```bash
  psql -U usuario -d web_db_development -h 127.0.0.1
  ```
* Alternativamente, en la consola de un computador MAC (M1) debe correr las siguientes líneas de código:
  ```bash
  psql postgres
  ```
  ```bash
  CREATE ROLE myuser WITH LOGIN;
   ```
  ```bash
  CREATE DATABASE web_db_development;
  ```
  ```bash
  ALTER ROLE myuser CREATEDB;
  ```
  ```bash
  \c web_db_development;
  ```

* Finalmente en la consola se ingresa la siguiente línea de código:
  ```bash
  yarn start
  ```

* No olvidar que en frontend, en la consola se ingresa la siguiente línea de código:
  ```bash
  yarn dev
  ```
* Y que para evitar posibles errores, se recomienda uitilizar el navegador y el computador en modo oscuro.

* Y listo, están listos para utilizar nuestra Base de Datos y applicación web.

### API

* Para utilizar la API se necesitan las siguientes dependencias:
    - koa
* Por esto es necesario correr los siguientes códigos antes de utilizar la API
  ```bash
  yarn add koa
  ```
* Luego se debe correr el siguiente código para inicializar la aplicación
  ```bash
  yarn dev
  ```
  ```bash
  yarn start
  ```
* La documentación de la API se encuentra en el siguiente link: https://documenter.getpostman.com/view/26547640/2s9YRGxoeG

## Rúbrica

### Simbología
* ✅ = Completado
* 🟡 = Parcialmente logrado
* 🚫 = No realizado


### Manejo de sesión en backend ✅
* Se implementa una forma correcta de manejar la sesión de usuarios en el lado del servidor:
  - Se realiza una validación de credenciales. ✅
  - Se logra un buen uso y almacenamiento de JWT. ✅
  - Se realiza la encriptación de contraseñas. ✅
  - Las rutas correspondientes están protegidas. ✅

### Manejo de sesión en frontend ✅
* Se implementa una forma de manejar la sesión de usuarios en el lado del cliente:
  - Los usuarios pueden registrarse e iniciar sesión.✅
  - Se utiliza el JWT obtenido al hacer login para acceder a rutas protegidas.✅

### Operaciones CRUD ✅
* Se crean todos los endpoints necesarios para que la aplicación funcione, utilizando las entidades del modelo E/R que fueron programadas en Sequelize en la entrega anterior.✅
* El backend ya está completo y funcional.✅

### Interfaz de usuario principal ✅ 
* La interfaz de usuario principal de la aplicación web está completa.✅
* Esta se encuentra casi del todo funcional, y se puede vislumbrar como será el funcionamiento del proyecto final.✅

### Conexión con frontend ✅
* Se a lo menos el 50% de los endpoints creados conectados con el frontend.✅ (3/5)

### Documentación API ✅
* Se proporciona una documentación exhaustiva y de calidad para la API de la aplicación.✅
* Esta incluye información detallada sobre cada uno de los endpoints disponibles en la API:✅
    - Método HTTP utilizado✅
    - Ruta del endpoint✅
    - Los argumentos que se deben proporcionar (junto con su formato)✅
    - Lo que se puede esperar como respuesta del endpoint (junto con su formato)✅
* Adicionalmente: Se usa la herramientas Postman que genera ejemplos de manera automática para ayudar a los ayudantes a comprender cómo interactuar con la API de manera efectiva.

### Documentación instalación BDD y API ✅
* Se entrega en este read.me documentación para guiar a los usuarios en la instalación y configuración del backend de la aplicación.✅
* Para la base de datos, la documentación incluye:
    - Información sobre cómo configurar y levantar la base de datos✅
    - Los comandos específicos que deben ejecutarse✅
* En el caso de la API, la documentación incluye:
    - Cómo instalar las dependencias necesarias para ejecutarla✅
    - Comandos específicos para ejecutarla✅

### Gitflow ✅
* El grupo sigue buenas prácticas de Git y GitHub en su desarrollo.✅
* Se utilizan Pull Requests para la revisión de código y la integración de cambios.✅
* Se aplican Conventional Commits para mensajes descriptivos y significativos.✅
* Se organiza el trabajo en ramas de manera lógica y coherente.✅ (Tuvimos que utilizar Github Live, por lo que el manejo de ramas fue menor ya que trabajamos en simultáneo. Eso explica por que la mayoría de los commits provienen de un sólo integrante del grupo)

### Linter ✅
* Se utiliza una herramienta de linting, como ESLint, para mantener un código limpio y legible.✅
* (El frontend está perfecto y el backend tiene posibles mejoras pero no las corregimos todas por que algunas implicaban cambiar las migraciones y no quisimos arriesgarnos a que afectara al funcionamiento de la página)
