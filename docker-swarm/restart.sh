#!/bin/bash

docker compose -f postgres.yml restart
docker compose -f insert.yml restart
docker compose -f get-all.yml restart
docker compose -f get-one.yml restart
docker compose -f update.yml restart
docker compose -f delete.yml restart