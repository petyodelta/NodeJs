var User = require('mongoose').model('User');

module.exports = {
    createUser: function(user, callback) {
        User.create(user, callback);
    },
    findUser: function (id, callback) {
        User.findById(id, callback);
    }
};
