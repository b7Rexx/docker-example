#kill all existing docker containers 
docker kill $(docker ps -q)	

docker-compose up -d --build
