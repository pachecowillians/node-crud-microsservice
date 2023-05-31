# Node.js CRUD Application with Docker, Docker Swarm, Kubernetes, and Microservices

<p align="center">
  <a href="https://nodejs.org/"><img src="https://raw.githubusercontent.com/pachecowillians/svg-icons/817a7cc24c15f665e55e89d21e23752c89f4ed5f/img/nodejs.svg" alt="Node.js" height="100px"></a>
  <a href="https://www.docker.com/"><img src="https://raw.githubusercontent.com/pachecowillians/svg-icons/817a7cc24c15f665e55e89d21e23752c89f4ed5f/img/docker.svg" alt="Docker" height="100px"></a>
  <a href="https://kubernetes.io/"><img src="https://raw.githubusercontent.com/pachecowillians/svg-icons/817a7cc24c15f665e55e89d21e23752c89f4ed5f/img/kubernetes.svg" alt="Kubernetes" height="100px"></a>
</p>

This repository consists of four components that demonstrate different containerization and orchestration technologies, as well as microservices architecture. The components are:

1. `docker/`: Contains the complete Node.js CRUD application running on Docker.
2. `docker-swarm/`: Contains the complete Node.js CRUD application running on Docker Swarm.
3. `kubernetes/`: Contains the complete Node.js CRUD application running on Kubernetes.
4. `microservices/`: Contains the microservices used to generate the containers for the applications.

## Repository Structure

The repository is structured as follows:

- `docker/`: This directory contains the necessary files and configurations to run the complete Node.js CRUD application on Docker. It includes both the frontend and backend components.

- `docker-swarm/`: This directory contains the necessary files and configurations to run the complete Node.js CRUD application on Docker Swarm. It includes both the frontend and backend components.

- `kubernetes/`: This directory contains the necessary files and configurations to run the complete Node.js CRUD application on Kubernetes. It includes both the frontend and backend components.

- `microservices/`: This directory contains the microservices used to generate the containers for the applications. It includes the individual services for frontend and backend, along with their respective Dockerfiles and configurations.

## Requirements

Before running any of the applications, make sure you have the following dependencies installed:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- Docker: [https://www.docker.com/](https://www.docker.com/)
- Docker Swarm (for Docker Swarm application): Follow the Docker documentation to set up a Docker Swarm cluster.
- Kubernetes (for Kubernetes application): Follow the Kubernetes documentation to set up a Kubernetes cluster.

## Application Installation and Usage

Please refer to the `README.md` file inside each subdirectory (`docker/`, `docker-swarm/`, `kubernetes/`, `microservices/`) for specific instructions on how to install and run each component using the respective technology.

## Contributing

Contributions are welcome! If you find any issues, have suggestions for improvements, or want to add new features, feel free to open an issue or submit a pull request to this repository.

## License

This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for more details.