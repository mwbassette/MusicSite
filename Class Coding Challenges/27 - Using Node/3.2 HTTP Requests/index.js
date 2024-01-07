import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`This server is running on port ${port}.`);
});

app.get("/", (req, res) => {
    res.send("<h1>Hello Everybody!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Meeee!~</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Here is how to contact me:</h1>");
});

//HTTP requests:
// get - request resource from server
// post - sending resource to server
//put patch - both update methods, put replaces resource, patch patches existing resource
//delete - deletes resource from server or database, 