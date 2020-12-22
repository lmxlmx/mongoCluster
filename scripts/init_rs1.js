use admin
db.auth("root","root")
rs1_config={
    _id:"rs1",
    members:[
        {_id:0,host:"rs11:27018",priority:100},
        {_id:1,host:"rs12:27018",priority:10},
        {_id:2,host:"rs13:27018",priority:1}
    ]
}
rs.initiate(rs1_config)
rs.status()