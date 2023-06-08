# Node.js CRUD Application with Docker Swarm

<p align="center">
  <a href="https://nodejs.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/256px-Node.js_logo.svg.png" alt="Node.js" height="100px"></a>
  <a href="https://www.docker.com/"><img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="Docker" height="100px"></a>
</p>


This repository contains the Docker Swarm deployment configuration files for a Node.js CRUD (Create, Read, Update, Delete) application. The application containers are available on Docker Hub.

## Prerequisites

Make sure you have Docker and Docker Swarm installed on your machine. If you don't have them installed, you can follow the Docker installation guide: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

## Environment Setup

To prepare the environment with one manager and two workers using Docker Machine, follow these steps:

1. Create the Swarm manager machine:

```bash
docker-machine create --driver virtualbox swarm-manager
```

2. Create the first Swarm worker machine:

```bash
docker-machine create --driver virtualbox swarm-worker-1
```

3. Create the second Swarm worker machine:

```bash
docker-machine create --driver virtualbox swarm-worker-2
```

> Note: After creating the machines for the first time, you can start and stop them using the following commands:
>
> To start the machines:
> ```bash
> docker-machine start swarm-manager swarm-worker-1 swarm-worker-2
> ```
>
> To stop the machines:
> ```bash
> docker-machine stop swarm-manager swarm-worker-1 swarm-worker-2
> ```

4. Get the IP address of the Swarm manager machine:

```bash
docker-machine ip swarm-manager
```

Make note of the IP address returned. You will need it to configure the Docker Swarm.

5. List the Docker machines to verify their status:

```bash
docker-machine ls
```

This command will display information about the Docker machines, including their names, drivers, states, and IP addresses.

6. Configure the Swarm manager machine, first Swarm worker machine, and second Swarm worker machine:

```bash
docker-machine ssh swarm-manager "git clone https://github.com/pachecowillians/node-crud-microsservice; echo 'HOST=<manager-ip>' > node-crud-microsservice/.env; docker pull pachecowillians/insert; docker pull pachecowillians/delete; docker pull pachecowillians/get-one; docker pull pachecowillians/get-all; docker pull pachecowillians/update"

docker-machine ssh swarm-worker-1 "git clone https://github.com/pachecowillians/node-crud-microsservice; echo 'HOST=<manager-ip>' > node-crud-microsservice/.env; docker pull pachecowillians/insert; docker pull pachecowillians/delete; docker pull pachecowillians/get-one; docker pull pachecowillians/get-all; docker pull pachecowillians/update"

docker-machine ssh swarm-worker-2 "git clone https://github.com/pachecowillians/node-crud-microsservice; echo 'HOST=<manager-ip>' > node-crud-microsservice/.env; docker pull pachecowillians/insert; docker pull pachecowillians/delete; docker pull pachecowillians/get-one; docker pull pachecowillians/get-all; docker pull pachecowillians/update"
```

Replace `<manager-ip>` with the IP address of the Swarm manager machine obtained in the previous step.

> Note: The initial configuration only needs to be done once.

## Deployment

To deploy the application using Docker Swarm, follow these steps:

1. Initialize the Docker Swarm on the manager machine:

```bash
docker-machine ssh swarm-manager "docker swarm init --advertise-addr <manager-ip>"
```

Replace `<manager-ip>` with the IP address of the Swarm manager machine obtained in the previous step.

2. Join the worker machines to the Swarm:

```bash
docker-machine ssh swarm-worker-1 "docker swarm join --token <worker-token> <manager-ip>:2377"
```

```bash
docker-machine ssh swarm-worker-2 "docker swarm join --token <worker-token> <manager-ip>:2377"
```

Replace `<worker-token>` with the token generated during the Swarm initialization on the manager machine, and `<manager-ip>` with the IP address of the Swarm manager machine.

3. Deploy the PostgreSQL service:

```bash
docker-machine ssh swarm-manager "docker stack deploy -c node-crud-microsservice/docker-swarm/postgres.yml postgres"
```

4. Wait for the PostgreSQL service to start and check its status:

```bash
docker-machine ssh swarm-manager "docker stack services postgres"
```

You should see the PostgreSQL service running.

5. Deploy each microservice using the respective Docker Compose file:

- Insert microservice:

```bash
docker-machine ssh swarm-manager "docker stack deploy -c node-crud-microsservice/docker-swarm/insert.yml insert"
```

- Delete microservice:

```bash
docker-machine ssh swarm-manager "docker stack deploy -c node-crud-microsservice/docker-swarm/delete.yml delete"
```

- Get-One microservice:

```bash
docker-machine ssh swarm-manager "docker stack deploy -c node-crud-microsservice/docker-swarm/get-one.yml get-one"
```

- Get-All microservice:

```bash
docker-machine ssh swarm-manager "docker stack deploy -c node-crud-microsservice/docker-swarm/get-all.yml get-all"
```

- Update microservice:

```bash
docker-machine ssh swarm-manager "docker stack deploy -c node-crud-microsservice/docker-swarm/update.yml update"
```

6. Wait for the services to start and check their status:

```bash
docker-machine ssh swarm-manager "docker stack services insert"
docker-machine ssh swarm-manager "docker stack services delete"
docker-machine ssh swarm-manager "docker stack services get-one"
docker-machine ssh swarm-manager "docker stack services get-all"
docker-machine ssh swarm-manager "docker stack services update"
```

You should see the list of services running for each microservice.

7. Access the application by visiting the defined service ports in your browser.

## Microservices Routes

Use the following table to access the routes for each microservice:

| Method | Route                                    | Request Body       |
| ------ | ---------------------------------------- | ------------------ |
| POST   | http://<manager-ip>:3330/geeks            | { "name": "Test" } |
| GET    | http://<manager-ip>:3331/geeks/:id        | -                  |
| GET    | http://<manager-ip>:3332/geeks            | -                  |
| DELETE | http://<manager-ip>:3333/geeks/:id        | -                  |
| PUT    | http://<manager-ip>:3334/geeks/:id        | { "name": "Test" } |

Replace `<manager-ip>` with the IP address of the Swarm manager machine obtained earlier.

## Database Configuration

The PostgreSQL database for this application is running on the manager machine. After deploying the PostgreSQL service, you need to create the "geeks" table manually. To create the "geeks" table, run the following SQL command:

```sql
CREATE TABLE "public"."geeks" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL
);
```

To connect to the database and execute the SQL command, you can use a PostgreSQL client tool like `psql` or any other PostgreSQL management tool of your choice.

Use the following configuration details to connect to the database:

| Configuration     | Value         |
|-------------------|---------------|
| Host              | `<manager-ip>`|
| Port              | 5432          |
| Database Name     | db_api        |
| User              | username      |
| Password          | password      |

## Tools Used

- [Insomnia](https://insomnia.rest/) - Used to send requests to the microservices.
- [Beekeeper Studio](https://www.beekeeperstudio.io/) - Used to manage the PostgreSQL database.

---

That's it! You have successfully deployed the Node.js CRUD application on a Docker Swarm cluster. You can now interact with the microservices using the provided routes. Enjoy exploring and working with the application!

If you have any questions or issues, please don't hesitate to reach out for assistance.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Submit a pull request explaining your changes.

We appreciate your contributions!

## License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details.

Feel free to use, modify, and distribute this project according to the terms of the MIT License.