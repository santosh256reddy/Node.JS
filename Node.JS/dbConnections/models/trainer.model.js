// var db = require('mongoose');
// var schema = db.Schema;
var schema = require("mongoose").Schema;
trainerSchema = new schema({
    FirstName: { type: String },
    LastName: { type: String },
    CreatedDate: { type: Date }
});
//we are registering the trainerSchema as trainer table.
require('mongoose').model('trainer', trainerSchema);