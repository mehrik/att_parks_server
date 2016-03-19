var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    // email: {type: String, required: true},
    // password: {type: String, required: true},
    reviews: [{type: Schema.ObjectId, ref: "Review"}],
    // badge: {type: String, required: true},
});

var User = mongoose.model("User", UserSchema);