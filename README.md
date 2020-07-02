# That CAi

This Vue app serves as a frontend for `this CAi` API interface.

## Requirements

Requirements are _simple_ (as always):

- `Docker`
- `Docker Compose`

## Setup

Create a `.env` file:

```sh
cp .env.example .env
```

Adjust it to your environment:

```sh
nano .env
```

Build the Docker image:

```sh
docker-compose build
```

Start the app:

```sh
docker-compose up
```
