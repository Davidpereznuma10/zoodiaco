# Docker Compose Setup on Linux

Below are the steps to set up and run your project using Docker Compose on a Linux system.

## Prerequisites

Make sure you have Docker and Docker Compose installed on your Linux system before proceeding.

### Docker

You can install Docker by following the instructions on the official website:

- [Docker Installation Guide](https://docs.docker.com/get-docker/)

### Docker Compose

You can install Docker Compose by following the instructions on the official website:

- [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)


# Docker Compose Commands

Below are some specific Docker Compose commands and their functionality for managing your project on a Linux system.

## Check Docker Compose Version

To check the version of Docker Compose installed on your system, use:

```bash
docker-compose --version
```

This command will display the installed Docker Compose version.

## Build Containers

To build the containers defined in your `docker-compose.yml` file, run:

```bash
sudo docker-compose build
```

This command will build the Docker images for your project based on the configuration specified in your `docker-compose.yml` file.

## Start Containers

To start the containers defined in your `docker-compose.yml` file, use:

```bash
docker-compose up
```

This command will start the containers in the foreground, and you will see their logs in the terminal.

## List Running Containers

To list the running containers, use:

```bash
docker ps
```

This command will display details about the running containers, including their IDs, names, and status.

## List All Containers

To list all containers, including stopped ones, use:

```bash
docker ps -a
```

This command will show both running and stopped containers.

## List Images

To list Docker images on your system, run:

```bash
docker image ls
```

This command will display a list of available Docker images along with their details.

## Remove an Image

To remove a Docker image, use:

```bash
docker image rm <container_id>
```

Replace `<container_id>` with the actual ID of the image you want to remove.

## List Containers

To list all containers (including stopped ones), use:

```bash
docker container ls -a
```

This command will display details about all containers, including their IDs, names, and status.

## Remove a Container

To remove a Docker container, use:

```bash
docker container rm <container_id>
```

Replace `<container_id>` with the actual ID of the container you want to remove.

## Execute a Shell Inside a Container

To execute a shell inside a running container, use:

```bash
docker exec -it <container_id> bash
```

Replace `<container_id>` with the ID of the container in which you want to run the shell. This command will open a shell session inside the specified container, allowing you to interact with it.

Remember to replace `<container_id>` with the actual IDs or names of your containers when using these commands. These are the specific Docker Compose commands for managing containers and images on a Linux system.
```
