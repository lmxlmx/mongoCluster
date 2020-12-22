// use admin
// db.createUser(
//     {
//       user: "mongo",
//       pwd: "mongo", // or cleartext password
//       roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
//     }
// )
// db.createUser(
//     {
//       "user" : "cluster",
//       "pwd" : "cluster",     // or cleartext password
//       roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
//     }
// )
use admin
db.createUser(
    {
      user: "root",
      pwd: "root", // or cleartext password
      roles: [ { role: "root", db: "admin" } ]
    }
)