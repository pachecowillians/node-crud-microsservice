# Node Application

To run the application, open `docker` folder with the following command:

```sh
cd docker
```

If you are a linux user, you can run, restart and stop the app with the respective scripts: `run.sh`, `restart.sh` and `stop.sh`.

If you are not a linux user, you can run the container with the following command:

```docker
docker compose -f postgres.yml up -d
docker compose -f node-app.yml up -d
```

To stop the containers, just use:

```docker
docker compose -f postgres.yml down
docker compose -f node-app.yml down
```

After creating the containers, access the postgres database placed at `localhost:5432`


| User     	| Password 	| Default Database 	|
|----------	|----------	|------------------	|
| username 	| password 	| db_api           	| 

Create a table called geeks with the following SQL command:

```sql
CREATE TABLE "public"."geeks" ("id" SERIAL PRIMARY KEY, "name" VARCHAR(255) NOT NULL)
```

Then, there are some functions that can be accessed on the service:

| Service 	| Method 	| Route                             	| Request Body        	|
|---------	|--------	|-----------------------------------	|---------------------	|
| Create  	| POST   	| http://localhost:3000/geeks       	| { 	"name": "Teste" } 	|
| Get All 	| GET    	| http://localhost:3000/geeks       	| -                   	|
| Get One 	| GET    	| http://localhost:3000/geeks       	| -                   	|
| Update  	| PUT    	| http://localhost:3000/geeks/<id\> 	| { 	"name": "Teste" } 	|
| Delete  	| DELETE 	| http://localhost:3000/geeks/<id\> 	| -                   	|

