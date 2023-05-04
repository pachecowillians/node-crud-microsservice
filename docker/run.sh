#!/bin/bash

docker compose -f postgres.yaml up -d
docker compose -f insert.yaml up -d
docker compose -f get-all.yaml up -d