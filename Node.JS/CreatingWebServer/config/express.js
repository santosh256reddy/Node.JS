var express = require("express");
var app = express();
module.exports = function() {
    app.get("/", (req, res) => {
        res.send("<h1>Welcome to Nodejs</h1>");
    });

    return app;

}