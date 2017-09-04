var userCtrl = require("./user/user.controller");
var courseCtrl = require("./course/course.controller");
var fileUploadCtrl = require("./fileupload/fileuploadCtrl");
module.exports = function(app) {
    app.post("/login", userCtrl.login, userCtrl.GenerateToken);
    app.post("/register", userCtrl.register, userCtrl.GenerateToken);
    app.get("/getUserInfo", userCtrl.getLoggedInUser);

    app.get("/index", (req, res) => {
        res.render("index");
    });
    app.get("/login", (req, res) => {
        res.render("login");
    });

    app.get("/register", (req, res) => {
        res.render("register", {
            hasRegistered: false
        });
    });
    app.get("/upload", (req, res) => {
        res.render("upload");
    })
    app.post("/upload", fileUploadCtrl.uploadFile);
    app.get("/products", (req, res) => {
        var items = [{
            id: 1,
            name: "Samsung",
            description: "Good Mobile",
            price: 30000
        }, {
            id: 2,
            name: "iPhone",
            description: "Best Mobile",
            price: 40000
        }];
        res.render("products", {
            products: items
        });
    });

    app.get("/api/courses", courseCtrl.getCourses);
}