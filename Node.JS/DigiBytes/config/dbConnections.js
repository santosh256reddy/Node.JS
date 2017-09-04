var dbConnectionString = "mongodb://localhost:27017/traineez";
var db = require("mongoose");

module.exports = function() {
    var promise = db.connect(dbConnectionString, {
        useMongoClient: true,
        /* other options */
    });

    promise.then(() => {
            console.log("Database Connected!!!!!!");
            require("../app/user/user.model");
            require("../app/course/course.model");
        })
        .catch((err) => {
            console.log(err);
            console.log("Error Occurred!!!");
        });
}