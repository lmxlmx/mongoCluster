# mongoCluster
Demo for mongodb cluster based on docker
step before install
1、clean data
  rm -r data/cs/*/*
  rm -r data/rs1/*/*
  rm -r data/rs2/*/*
2、
openssl rand -base64 756 > data/common/keyfile
sudo chmod 400 data/common/keyfile
sudo chown 999 data/common/keyfile

step to install
1、docker-compose up -d
wait for about one minute
2、sh config_mongo_cluster.sh
