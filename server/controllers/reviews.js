var mongoose = require('mongoose');
var Review = mongoose.model('Review');

module.exports = (function () {
    return {
        create: function (req, res) {
            // creation of new review
            console.log(req.body);
            var review = new Review(req.body);
            review.save(function(err, review) {
                // console.log('errors', err);
                // console.log('returned', review);
                if (err) {
                    res.json(err);
                } else {  
                    res.json(review);
                } // end else
            }); // end save

            // res.json("reviews.create");
        },

        // show all reviews for specific park
        index: function(req, res) {
            console.log(req.params.id);
            // Review.find({park: req.params.id}, function(err, reviews) {
            //     if (err) {
            //         res.json(err);
            //     } else {
            //         res.json(reviews);
            //     }
            // })
            Review.find({park: req.params.id})
            .populate("_user")
            .exec(function(err, reviews) {
                if (err) {
                    res.json(err);
                } else {
                    console.log(reviews);
                    res.json(reviews);
                }
            })
        }
    }
}());