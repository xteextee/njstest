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
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

app.get('/user', (req, res) => {
    res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
})





app.listen(port, () => console.log(`Example app listening on port port!`))