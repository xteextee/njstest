// index.js

/**
 * Required External Modules
 */


/**
 * App Variables
 */

/**
 *  App Configuration
 */

/**
 * Routes Definitions
 */

/**
 * Server Activation
 */

const express = require('express')
const path = require('path/posix')
const app = express()
const port = 3000


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")


app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});





app.listen(port, () => console.log(`Example app listening on port port!`))