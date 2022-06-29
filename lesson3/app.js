var express = require("express");

// fonksiyon gibi erişim sağlar
var app = express();

app.get("/", function (req, res) {
    res.send("this is the homepage");
});

// 
app.get("/contact", function (req, res) {
    res.send("this is the contact page");
});

app.get("/adress", function (req, res) {
    res.send("this is the adress page");
});

// to see the parameter value in browser 
// app.get("/profile/:id", function (req, res) {
//     res.send("You requested to see a profile with the id of " + req.params.id);
// });

// to see the parameter value in browser 
app.get("/profile/:mevo", function (req, res) {
    res.send("You requested to see a profile with the id of " + req.params.mevo);
});

// 
app.listen(3000);
