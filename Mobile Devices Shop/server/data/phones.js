var Phone = require('mongoose').model('Phone');

module.exports = {
    add: function (phone, callback) {
        Phone.create(phone, callback);
    },
    all: function(page, pageSize, callback) {
        page = page || 1;
        pageSize = pageSize || 3;

        Phone.find({})
            .limit(pageSize)
            .skip((page - 1) * pageSize)
            .exec(function (err, foundPhones) {
            if (err) {
                callback(err);
                return;
            }

            Phone.count().exec(function (err, numberOfPhones) {
                var data = {
                    phones: foundPhones,
                    currentPage: page,
                    pageSize: pageSize,
                    total: numberOfPhones
                };

                callback(err, data);
            })
        })
    },
    getById: function (id, callback) {
        Phone.findById(id).exec(function (err, phone) {
            callback(err, phone);
        })
    }
};