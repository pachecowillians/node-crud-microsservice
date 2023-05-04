#!/bin/bash

docker compose -f postgres.yaml restart
docker compose -f insert.yaml restart
docker compose -f get-all.yaml restart