#!/bin/bash
docker pull akasharul986/node-todo-app:latest
docker stop node-app || true
docker rm node-app || true
docker run -d -p 8080:8080 --name node-app akash3398/node-todo-app:latest
