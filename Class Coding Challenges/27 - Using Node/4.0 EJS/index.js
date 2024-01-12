import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const todayDate = Date.now();
console.log(todayDate);

function checkIfWeekEnd() {
    const randomTestNumberBtwnZeroAndSix = Math.floor(Math.random() * 6);
    if (dayNames[randomTestNumberBtwnZeroAndSix === 0 || 6]) {

    }
}

function decideActionBasedOnDay() {
    if (dayNames)
}

app.use(checkIfWeekEnd);

app.get("/", (req, res) => {
    res.render("index.ejs",
    { day: req.body[checkIfWeekEnd] }
    { action: req.body}
    
    );
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "index.js");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  