#!/bin/bash

docker compose -f postgres.yaml down
docker compose -f insert.yaml down
docker compose -f get-all.yaml down
docker compose -f get-one.yaml down
docker compose -f update.yaml down