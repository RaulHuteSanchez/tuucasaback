# TuCasaYaBackend
En el repositorio se aloja todo el backend de la aplicación, trabajamos con sequelize y node.js 
# Nombre de tu Aplicación - Backend

Este es el repositorio backend para [Nombre de tu aplicación]. Se trata de una aplicación de bienes raíces similar a Idealista, diseñada para el mercado latinoamericano.

## Tecnologías

- Node.js
- Express.js
- Sequelize
- MySQL

## Configuración inicial

### Requisitos

- Tener instalado Node.js.
- Tener instalado MySQL.

### Pasos

1. **Clonar el repositorio** 

    ```bash
    git clone https://github.com/yourusername/yourrepositoryname.git
    cd yourrepositoryname
    ```

2. **Instalar las dependencias**

    Utiliza el comando npm install para instalar todas las dependencias necesarias para el proyecto.

    ```bash
    npm install
    ```

3. **Configurar la base de datos**

    Deberás tener MySQL instalado en tu sistema. Una vez instalado, crea una base de datos para utilizar con tu aplicación.

    ```bash
    mysql -u root -p
    CREATE DATABASE yourdatabasename;
    ```

4. **Configurar las variables de entorno**

    Deberás configurar las variables de entorno de acuerdo a tu configuración de MySQL y otros parámetros. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

    ```bash
    DB_USERNAME=yourmysqlusername
    DB_PASSWORD=yourmysqlpassword
    DB_DATABASE=yourdatabasename
    DB_HOST=yourmysqlhostname
    ```

5. **Iniciar el servidor**

    Ahora puedes iniciar el servidor utilizando el comando npm start.

    ```bash
    npm start
    ```

6. **Migraciones y semillas**

    Sequelize permite gestionar migraciones y semillas para establecer y rellenar la base de datos.

    - Para ejecutar todas las migraciones pendientes:

        ```bash
        npx sequelize-cli db:migrate
        ```

    - Para deshacer todas las migraciones:

        ```bash
        npx sequelize-cli db:migrate:undo:all
        ```

    - Para ejecutar todas las semillas:

        ```bash
        npx sequelize-cli db:seed:all
        ```

    - Para deshacer todas las semillas:

        ```bash
        npx sequelize-cli db:seed:undo:all
        ```
