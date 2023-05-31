# Microservices Readme

<p align="center">
  <a href="https://www.docker.com/"><img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="Docker" height="100px"></a>
</p>


This readme provides instructions on building and pushing the Docker images for each microservice to Docker Hub.

## Build and Push Instructions

Follow the steps below to build and push the Docker images for each microservice to Docker Hub:

### Insert Microservice

```bash
cd insert
docker build -t pachecowillians/insert .
docker push pachecowillians/insert
```

### Get-All Microservice

```bash
cd get-all
docker build -t pachecowillians/get-all .
docker push pachecowillians/get-all
```

### Get-One Microservice

```bash
cd get-one
docker build -t pachecowillians/get-one .
docker push pachecowillians/get-one
```

### Update Microservice

```bash
cd update
docker build -t pachecowillians/update .
docker push pachecowillians/update
```

### Delete Microservice

```bash
cd delete
docker build -t pachecowillians/delete .
docker push pachecowillians/delete
```

After building and pushing the Docker images for each microservice, you can use them in your deployments.

## Using the Docker Images

To use the Docker images from Docker Hub in your deployments, you can run the following commands:

### Insert Microservice

```bash
docker run -p 3330:3330 pachecowillians/insert
```

### Get-All Microservice

```bash
docker run -p 3331:3331 pachecowillians/get-all
```

### Get-One Microservice

```bash
docker run -p 3332:3332 pachecowillians/get-one
```

### Update Microservice

```bash
docker run -p 3333:3333 pachecowillians/update
```

### Delete Microservice

```bash
docker run -p 3334:3334 pachecowillians/delete
```

Now you can access the microservices using the provided routes.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your fork.
5. Submit a pull request explaining your changes.

## License

This project is licensed under the [MIT License](LICENSE).