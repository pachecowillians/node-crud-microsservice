#!/bin/bash

docker compose -f postgres.yaml down
docker compose -f insert.yaml down