var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function () {
    return {
        create: function (req, res) {
            console.log("users.create activated!")
            console.log(req.body.user);
            res.json("users.create/login");
        },

        updateReviews: function(req, res) {
            res.json("users.updated_reviews");
        }
    }
}());