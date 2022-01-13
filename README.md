# No more updating this source code!

# 💡 xiyuDB
- Simple JSON database for Node
- Faster & Easier usage.

**Update 0.0.1**

- There are no updates recently!

# 💻 Setup

```js
const Database = require("xiyuDB");
const db = new Database()
```

# 📝 xiyuDB Example

```js
//When database is ready, will send a message to console!
db.on("ready",{ 
message : "Connected to Database (OK!)"
})

//When a data added to database, will send a message to console!
db.on("dataAdd",{
message : "New data added to database"
})

db.set("Hello", "World"); //Changing the data! (hello => World)
db.get("HelloWorld"); //Shows the data! (HelloWorld)
db.delete("Hello"); //Deletes the data! (hello => )
db.has("Hello"); //Makes a condition! (false || true)
db.fetch("Hello"); //Fetches the data! (hello)
db.add("age", 1); //Adds the data! (+)
db.subtract("age", 9); //Exctracts the data! (-)
db.push("array", "orange"); //Creating an array! (Array: 'orange')
db.clear(); //Deletes all of the data! (This applies to everything.)

console.log(db.math("10 , "/" , "2")); // Answer: 5 | We divide a number by a number.
```

# ☎️ Contact for Anything
[Discord Server](https://discord.gg/Ysj2XRAmGm) | [Discord User](https://discord.com/users/846046679328227358) | [Twitter](https://twitter.com/karincadev)
