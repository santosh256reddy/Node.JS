var mongoose = require("mongoose");
var schema = mongoose.Schema;
var courseSchema = new schema({
    Category: { type: String },
    Name: { type: String },
    Duration: { type: Number },
    Price: { type: Number }
});

mongoose.model("course", courseSchema);