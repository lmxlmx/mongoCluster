docker-compose exec rs11 bash -c "mongo 127.1:27018 < scripts/init_rs1.js"
docker-compose exec rs11 bash -c "mongo 127.1:27018 < scripts/user_rs1.js"

docker-compose exec rs21 bash -c "mongo 127.1:27018 < scripts/init_rs2.js"
docker-compose exec rs21 bash -c "mongo 127.1:27018 < scripts/user_rs2.js"

docker-compose exec cs1 bash -c "mongo 127.1:27019 < scripts/init_cs.js"

docker-compose exec ms1 bash -c "mongo 127.1:27017 < scripts/user_ms.js"
docker-compose exec ms1 bash -c "mongo 127.1:27017 < scripts/init_ms.js"
docker-compose exec ms1 bash -c "mongo 127.1:27017 < scripts/init_db.js"