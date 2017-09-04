var userCtrl = {};
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var config = require("../../config/keys");
userCtrl.register = function(req, res, next) {
    console.log(req.body);
    var encrypt = encryptPassword(req.body.Password);
    req.body.Password = encrypt;
    console.log(encrypt)
    var profile = require("mongoose").model("profile");
    var profileModel = new profile(req.body);
    var promise = profileModel.save();
    promise.then((data) => {
            req.body.userDetails = data;
            next();
            //res.redirect('/products');
        })
        .catch((err) => {
            console.log("Error in Registration");
            res.render("error");
        });

};

userCtrl.login = function(req, res, next) {
    var profile = require("mongoose").model("profile");
    var details = req.body;
    var promise = profile.findOne({
        Email: details.username
    }).exec();
    promise.then((userData) => {
            if (userData) {
                var isPasswordCorrect = comparePassword(details.password, userData.Password);
                if (isPasswordCorrect) {
                    req.body.userDetails = userData;
                    next();
                    // res.json({
                    //     status: "Success",
                    //     data: userData
                    // });
                } else {
                    res.json({
                        status: "Failure",
                        data: "Passwords don't match"
                    });
                }
            } else {
                res.json({
                    status: "Failed",
                    data: "User Not Found"
                });
            }
        })
        .catch((err) => {
            console.log("Error in Logiin");
            res.render("error");
        });

};
userCtrl.getLoggedInUser = function(req, res) {
    var token = req.headers.authorization;
    jwt.verify(token, config.secretKey, function(err, decoded) {
        // err 
        // decoded undefined 
        if (err) {
            res.json({
                "error": err
            });
        } else {
            res.json({ data: decoded });
        }
    });

    // var decoded = jwt.decode(token);

    // get the decoded payload and header 
    // var decoded = jwt.decode(token, { complete: true });
    // console.log(decoded.payload);
    // res.json({ payLoad: decoded.payload });

};
userCtrl.GenerateToken = function(req, res) {
    var userData = req.body.userDetails;
    var token = jwt.sign({
        data: userData
    }, config.secretKey, {
        expiresIn: 10
    });
    res.json({
        token: token
    })

};

function encryptPassword(password) {
    var salt = bcrypt.genSaltSync(10);
    console.log("Salt:::" + salt);
    var hash = bcrypt.hashSync(password, salt);
    return hash;

}

function comparePassword(formPassword, dbPassword) {
    return bcrypt.compareSync(formPassword, dbPassword);
}



module.exports = userCtrl;