var mongoose = require('mongoose');
var Review = mongoose.model('Review');

module.exports = (function () {
    return {
        create: function (req, res) {
            var title;
            var rating;
            var content;
            var park_id = req.params.id;
            var _user;

            var review = new Review({
                title: "",
                rating: "",
                content: "",
                park: "",
                _user: ""
            })

            res.json("reviews.create");
        },

        // show all reviews for specific park
        index: function(req, res) {
            var park_id = req.params.id;
            res.json("reviews.index");
        }
    }
}());