import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
//HTTP requests:
// get - request resource from server
// post - sending resource to server
//put patch - both update methods, put replaces resource, patch patches existing resource
//delete - deletes resource from server or database, 