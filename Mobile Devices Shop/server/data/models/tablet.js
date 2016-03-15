var mongoose = require('mongoose');

module.exports.init = function () {
    var tabletSchema = mongoose.Schema({
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

    var Tablet = mongoose.model('Tablet', tabletSchema);
};
