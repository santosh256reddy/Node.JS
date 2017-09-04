// var db = require('mongoose');
// var schema = db.Schema;
var schema = require("mongoose").Schema;
profileSchema = new schema({
    FirstName: { type: String },
    LastName: { type: String },
    Password: { type: String },
    Email: { type: String },
    CreatedDate: { type: Date, default: Date.now }
});
//we are registering the trainerSchema as trainer table.
require('mongoose').model('profile', profileSchema);