var phones = require('../data/phones'),
    CONTROLLER_NAME = 'phones';

module.exports = {
    getAdd: function (req, res) {
        res.render(CONTROLLER_NAME + '/add');
    },
    postAdd: function (req, res) {
        var phone = req.body;
        phones.add(phone, function (err, phone) {
            if (err) {

            } else {
                res.redirect('/' + CONTROLLER_NAME);
            }
        })
    },
    getAll: function (req, res) {
        var page = req.query.page,
            pageSize = req.query.pageSize;

        phones.all(page, pageSize, function (err, data) {
            res.render(CONTROLLER_NAME + '/all', {data: data})
        })
    },
    getDetails: function (req, res) {
        var id = req.params.id;
        phones.getById(id, function (err, data) {
            res.render(CONTROLLER_NAME + '/details', {data: data});
        })
    }
};