var db = require("./config/dbConnections")();
var app = require("./config/express")();

app.listen(3000);