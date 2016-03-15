var mongoose = require('mongoose');

module.exports.init = function () {
    var phoneSchema = mongoose.Schema({
        manufacturer: {
            type: String,
            require: '{PATH} is required'
        },
        model: {
            type: String,
            require: '{PATH} is required'
        },
        price: {
            type: Number,
            min: 0
        }
    });

    var Phone = mongoose.model('Phone', phoneSchema);
};
