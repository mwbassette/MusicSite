import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    const d = new Date();
    const day = d.getDay();
    let type = "a weekday";
    let action = "it's time to work hard";

    if (day === 0 || day === 6) {
        type = "the weekend";
        action = "it's time to have some fun";
    }

    res.render("index.ejs", { 
        typeOfDay: type, 
        whatToDo: action, 
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  

// const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// const todayDate = Date.now();
// console.log(todayDate);

// function checkIfWeekEnd() {
//     var randomTestNumberBtwnZeroAndSix = Math.floor(Math.random() * 6);
//     if (dayNames[randomTestNumberBtwnZeroAndSix === 0 || 6]) {
//         var weekend = true;
//         showWeekendHTMLVersion();
//     } else {
//         var weekend = false;
//         showWeekdayHTMLVersion();
//     }
// }

// function showWeekendHTMLVersion() {
    
// }

// function showWeekdayHTMLVersion() {

// }

// app.use(checkIfWeekEnd);
// app.use(showWeekdayHTMLVersion);
// app.use(showWeekendHTMLVersion);
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "index.js");
// });