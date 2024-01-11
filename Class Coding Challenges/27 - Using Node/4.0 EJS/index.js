import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

const randomNumberBtwnZeroAndSix = Math.floor(Math.random() * 6);
const todayDate = new Date()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "index.js");
});

console.log(getDay());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  