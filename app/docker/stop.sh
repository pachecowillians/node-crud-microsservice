#!/bin/bash

docker compose -f postgres.yml down
docker compose -f node-app.yml down