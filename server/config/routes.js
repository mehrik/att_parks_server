var bodyParser = require('body-parser');
// var test = require("../controllers/tests.js");
var user = require("../controllers/users.js");
var review = require("../controllers/reviews.js");

module.exports = function(app) {
    app.use(bodyParser.json());

    app.post('/user', user.create);
    app.post('/user/update', user.updateReviews);

    app.get('/review/:id', review.index);
    app.post('/review/:id/create', review.create);

}