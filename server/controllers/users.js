var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function () {
    return {
        create: function (req, res) {
            console.log(req.body);
            User.findOne({name: req.body.name}, function(err, user) {
                if (err) {
                    res.json(err);
                } else if (user) {
                    console.log('User found', user);
                    res.json(user);
                } else {
                    // creation of new user
                    var new_user = new User(req.body);
                    new_user.save(function(err, user) {
                        // console.log('errors', err);
                        // console.log('returned', user);
                        if (err) {
                            res.json(err);
                        } else {  
                            res.json(user);
                        } // end else
                    }); // end save
                } // end else
            }); // end findOne
        },

        updateReviews: function(req, res) {
            res.json("users.updated_reviews");
        }
    }
}());