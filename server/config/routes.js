var bodyParser = require('body-parser');
var cors = require('cors');
// var test = require("../controllers/tests.js");
var user = require("../controllers/users.js");
var review = require("../controllers/reviews.js");

module.exports = function(app) {
    app.use(bodyParser.json());
    app.options('/user', cors());
    app.options('/review/:id/create', cors());
    app.options('/review/:id', cors());

    app.post('/user', cors(), user.create);
    app.post('/user/update', cors(), user.updateReviews);

    app.get('/review/:id', cors(), review.index);
    app.post('/review/:id/create', cors(), review.create);

}