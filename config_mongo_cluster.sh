docker-compose exec ms1 sh -c "mongo rs11:27018 < scripts/init_rs1.js"
docker-compose exec ms1 sh -c "mongo rs21:27018 < scripts/init_rs2.js"
docker-compose exec ms1 sh -c "mongo cs1:27019 < scripts/init_cs.js"
docker-compose exec ms1 sh -c "mongo ms1:27017 < scripts/init_ms.js"
docker-compose exec ms1 sh -c "mongo ms1:27017 < scripts/init_db.js"