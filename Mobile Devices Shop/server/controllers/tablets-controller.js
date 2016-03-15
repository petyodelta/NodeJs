var tablets = require('../data/tablets'),
    CONTROLLER_NAME = 'tablets';

module.exports = {
    getAdd: function (req, res) {
        res.render(CONTROLLER_NAME + '/add');
    },
    postAdd: function (req, res) {
        var tablet = req.body;
        tablets.add(tablet, function (err, tablet) {
            if(err) {

            } else {
                res.redirect('/' + CONTROLLER_NAME);
            }
        })
    },
    getAll: function (req, res) {
        var page = req.query.page,
            pageSize = req.query.pageSize;

        tablets.all(page, pageSize, function (err, data) {
            res.render(CONTROLLER_NAME + '/all', {data: data});
        })
    },
    getDetails: function (req, res) {
        var id = req.query.id;

        tablets.getById(id, function (err, data) {
            res.render(CONTROLLER_NAME + '/details', {data: data});
        })
    }
};
