var app = require("express")();
var bodyParser = require("body-parser");
module.exports = function() {
    app.set("view engine", "ejs");
    // parse application/x-www-form-urlencoded 
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json 
    app.use(bodyParser.json())
    require("../app/routes")(app);
    return app;
}