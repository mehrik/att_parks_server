var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new mongoose.Schema({
    title: {type: String, required: true},
    // rating: {type: Number, required: true},
    park: {type: Number, required: true},
    content: {type: String, required: true},
    _user: {type: Schema.ObjectId, required: true, ref:"User"},
    created_at: {type: Date, default: Date.now}
});

var Review = mongoose.model("Review", ReviewSchema);