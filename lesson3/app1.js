var express = require("express");
const ejs = require("ejs");
var app = express();

// templating engines
app.set("view engine", "ejs");

// normal çağrımlar
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// normal çağrımlar
app.get("/contact", function (req, res) {
    res.sendFile(__dirname + "/contact.html");
});

// normal çağrımlar
app.get("/error", function (req, res) {
    res.sendFile(__dirname + "/404.html");
});

app.get("/profile/:id", function (req, res) { 
    var dto = { age: 29, job: "Test"}
    res.render("profile2", { person: req.params.id, data: dto });
});

app.get("/category/:id", function (req, res) { 
    var dto = { age: 29, job: "Test"}
    // .net core web api den veri gelse
    res.render("computer", { person: req.params.id, data: dto });
});

app.listen(3000);
