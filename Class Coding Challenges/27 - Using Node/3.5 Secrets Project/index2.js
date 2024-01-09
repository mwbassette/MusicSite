import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userIsAuthenticated = false;
var actualSecretPassword = "ILoveProgramming";

app.use(bodyParser.urlencoded({extended: true}));

function checkPassword(req, res, next) {
    var authAttemptPassword = req.body["password"];
    if (authAttemptPassword === actualSecretPassword) {
        userIsAuthenticated = true;
    } 
    next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.post("/check", (req, res) => {
    if (userIsAuthenticated) {
        res.sendFile(__dirname + "/public/secret.html");
        console.log("Welcome to the club!");
    } else {
        res.redirect("/");
    }
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });