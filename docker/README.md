# Node Application

<p align="center">
  <a href="https://nodejs.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/256px-Node.js_logo.svg.png" alt="Node.js" height="100px"></a>
  <a href="https://www.docker.com/"><img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="Docker" height="100px"></a>
</p>



This README provides instructions for running a Node.js application with Docker. Follow the steps below to get started.

## Installation

1. Navigate to the `scripts` folder using the following command:

```sh
cd scripts
```

2. If you are a Linux user, you can run, restart, and stop the application using the respective scripts: `run.sh`, `restart.sh`, and `stop.sh`.

3. If you are not a Linux user, you can run the application using Docker Compose with the following commands:

```docker
docker compose -f postgres.yml up -d
docker compose -f node-app.yml up -d
```

To stop the containers, use the following commands:

```docker
docker compose -f postgres.yml down
docker compose -f node-app.yml down
```

## Accessing the Database

After creating the containers, you can access the PostgreSQL database at `localhost:5432`.

| User     	| Password 	| Default Database 	|
|----------	|----------	|------------------	|
| username 	| password 	| db_api           	|

Create a table called `geeks` with the following SQL command:

```sql
CREATE TABLE "public"."geeks" ("id" SERIAL PRIMARY KEY, "name" VARCHAR(255) NOT NULL)
```

## API Endpoints

The application exposes the following API endpoints:

| Method 	| Route                             	| Request Body        	|
|--------	|-----------------------------------	|---------------------	|
| POST   	| http://localhost:3000/geeks       	| { "name": "Test" }  	|
| GET    	| http://localhost:3000/geeks       	| -                   	|
| GET    	| http://localhost:3000/geeks/<id\>    	| -                   	|
| PUT    	| http://localhost:3000/geeks/<id\> 	| { "name": "Test" }  	|
| DELETE 	| http://localhost:3000/geeks/<id\> 	| -                   	|

Feel free to modify the routes and request bodies according to your needs.

