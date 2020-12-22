cs_config={
    _id:"cs",
    configsvr: true,
    members:[
        {_id:0, host:"cs1:27019",priority:100},
        {_id:1, host:"cs2:27019",priority:10},
        {_id:2, host:"cs3:27019",priority:1}
    ]
}
rs.initiate(cs_config)
rs.status()