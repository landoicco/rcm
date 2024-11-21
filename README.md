## RCM | Resident Contact Manager

### What is this?

Is a fullstack application made for learning purposes.

This code pretends to provide a solution to the problem of a security guard in a apartaments building. When a resident have a visit, the guard needs to connect with the resident to confirm the entry.

This software offers a frontend and a backend that stores and gets data from a database. The guard in this case will be able to search for the data of the resident in the app using the name or the address. This data will be fetched from the database using the backend service.

The guard will also be able of adding, removing, updating and deleting residents data from the database.

### How it was build?

The frontend was made using **React**, using React Router, Material Design and more stuff along the way.

The backend was made using **Java** and **Spring**. The server uses Spring Data to connect with the database. In this case a **MariaDB** database.

The client, the server, the database and and instance of adminer are run on separate containers, all orchestrated using **Docker Compose**.

### How to run it

Make sure you have docker installed, after that just run:

```
docker compose up
```

You can enter the frontend using: [http://localhost:3000/](http://localhost:3000/)

You can check the status of the server with the help of Spring Actuator entering: [http://localhost:8080/actuator/health](http://localhost:8080/actuator/health)

The endpoint to connect with the server is:
[http://localhost:8080/api](http://localhost:8080/api)

You can use Adminer to manage the database, entering: [http://localhost:8081/](http://localhost:8081/)

You can use the following credentials on Adminer:

```
user: root
password: root
database: database
```
