var Tablet = require('mongoose').model('Tablet');

module.exports = {
    add: function (tablet, callback) {
        Tablet.create(tablet, callback);
    },
    all: function (page, pageSize, callback) {
        page = page || 1;
        pageSize = pageSize || 3;

        Tablet.find({})
            .limit(pageSize)
            .skip((page - 1) * pageSize)
            .exec(function(err, foundTablets){
                if(err){
                    callback(err);
                    return;
                }

                Tablet.count().exec(function (err, numberOfTablets) {
                    var data = {
                        tablets: foundTablets,
                        currentPage: page,
                        pageSize: pageSize,
                        total: numberOfTablets
                    };

                    callback(err, data);
                })
            })
    },
    getById: function (id, callback) {
        Tablet.findById(id).exec(function (err, phone) {
            callback(err, phone);
        })
    }
};
