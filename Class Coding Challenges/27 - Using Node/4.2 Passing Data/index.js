import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const nameData = {
    fName: "",
    lName: "",
  }
  res.render("index.ejs", nameData);
});

app.post("/submit", (req, res) => {
  const nameData = {
    fName: "",
    lName: "",
  }
  const fullName = fName.length + lName.length;
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
