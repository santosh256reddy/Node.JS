var app = require("http");
// server = app.createServer(function(req, res) {
//     res.end("<h1>Welcome to Nodejs</h1>");
// });
var server = app.createServer((req, res) => {
    if (req.url == "/register") {
        res.end("<h1>Welcome to Registration</h1>");
    }
    if (req.url == "/login") {
        res.end("<h1>Welcome to Login</h1>");
    } else {

        res.end("<h1>Welcome to Nodejs</h1>");
    }

});
server.listen(3000);