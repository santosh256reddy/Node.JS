var courseCtrl = {}
courseCtrl.getCourses = function(req, res) {
    var course = require("mongoose").model("course");
    var promise = course.find({}).exec();
    promise.then((courseData) => {
            res.json({
                status: "Success",
                data: courseData
            });
        })
        .catch((err) => {
            res.json({
                status: "Failure",
                data: err
            });
        })
};
module.exports = courseCtrl;