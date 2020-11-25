sh.enableSharding("statdb")
sh.shardCollection("statdb.clientsRecord", { _id : "hashed" } )
sh.shardCollection("statdb.subRecord", { _id : "hashed" } )