# klatu
Demo repo... 

## Lerna
Monorepo to avoid having a cluster of repos

### Bootstrap
Runs npm install in all packages and bootstrap relations with symlinks

lerna bootstrap --use-workspaces

lerna run build

To run main locally: 
lerna run dev --scope main --stream

### Docker

docker images

Build single docker image: 
docker build -t <choose a name> .

Start image with bash prompt:
docker run -it  klatu_main /bin/bash

docker-compose up --build

In case docker space for images gets full -> "no space left on device"
(OBS: removes all images)

docker rmi $(docker images -aq --filter dangling=true)

And then maybe -> docker container prune

or to clear up completly ->
docker container stop $(docker container ls -aq) 
docker system prune --volumes 

To go into a running container: 
docker exec -it <conteinerId> /bin/bash 

Run image "events" på 8080
docker run -p 8080:8406 events

