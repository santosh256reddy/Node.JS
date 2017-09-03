var dbConnectionString = "mongodb://localhost:27017/traineez";
var db = require("mongoose");

var promise = db.connect(dbConnectionString, {
    useMongoClient: true,
    /* other options */
});

promise.then(() => {
        console.log("Database Connected!!!!!!");
        insertCourse();
    })
    .catch((err) => {
        console.log(err);
        console.log("Error Occurred!!!");
    });


function insertCourse() {
    require("./models/course.model");
    var courseModel = require("mongoose").model("course");
    var course = new courseModel({
        Category: "Software",
        Name: "Angularjs",
        Duration: 40,
        Price: 1000,
        test: "New"
    });
    course.save()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })

}

function insertTrainer() {
    require("./models/trainer.model");

    var trainerSchema = db.model('trainer');
    var userDetails = new trainerSchema({
        FirstName: "Santosh",
        "LastName": "Reddy",
        CreatedDate: new Date()
    });
    var pms = userDetails.save();
    pms.then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
}