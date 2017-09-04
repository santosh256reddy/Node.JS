// var db = require('mongoose');
// var schema = db.Schema;
var schema = require("mongoose").Schema;
courseSchema = new schema({
    Category: { type: String },
    Name: { type: String },
    Duration: { type: String },
    Price: { type: String },
    CreatedDate: { type: Date, default: Date.now }
});
//we are registering the trainerSchema as trainer table.
require('mongoose').model('course', courseSchema);