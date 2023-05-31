#!/bin/bash

docker compose -f postgres.yml up -d
docker compose -f insert.yml up -d
docker compose -f get-all.yml up -d
docker compose -f get-one.yml up -d
docker compose -f update.yml up -d
docker compose -f delete.yml up -d