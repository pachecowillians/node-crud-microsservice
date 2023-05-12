#!/bin/bash

docker compose -f postgres.yml up -d
docker compose -f node-app.yml up -d