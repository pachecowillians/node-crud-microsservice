#!/bin/bash

docker compose -f postgres.yml restart
docker compose -f node-app.yml restart