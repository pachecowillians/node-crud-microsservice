#!/bin/bash

docker compose -f postgres.yml down
docker compose -f insert.yml down
docker compose -f get-all.yml down
docker compose -f get-one.yml down
docker compose -f update.yml down
docker compose -f delete.yml down