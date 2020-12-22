use admin
db.createUser(
    {
      user: "root",
      pwd: "root", // or cleartext password
      roles: [ { role: "root", db: "admin" } ]
    }
)