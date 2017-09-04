var fileUploadCtrl = {};
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        var fileName = file.originalname
        cb(null, Date.now() + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,

    fileFilter: function(req, file, cb) {
        if (path.extname(file.originalname) !== '.pdf') {
            return cb(null, false)
        }
        cb(null, true)
    }
}).single('abcd');
fileUploadCtrl.uploadFile = function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            console.log(err);
            // An error occurred when uploading 
            res.render("error")
        } else {
            res.render("fileUploadSuccess");
        }

        // Everything went fine 
    })
};

module.exports = fileUploadCtrl;