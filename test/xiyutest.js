const database = require("../xiyudb.js")
const db = new database()

db.on("ready" , {
    message : "Connected to Database (OK!)"
});

console.log(db.math("10" , "/" , "2"))
