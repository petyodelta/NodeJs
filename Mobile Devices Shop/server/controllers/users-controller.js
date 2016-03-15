var encryption = require('../utilities/encryption'),
    users = require('../data/users'),
    CONTROLLER_NAME = 'users';

module.exports = {
    getRegister: function (req, res, next) {
        res.render(CONTROLLER_NAME + '/register');
    },
    postRegister: function (req, res, next) {
        var newUserData = req.body;
        if (newUserData.password !== newUserData.confirmPassword) {
            req.session.error = 'Passwords do not match';
            res.redirect('/register');
        } else {
            newUserData.salt = encryption.generateSalt();
            newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt, newUserData.password);
            users.createUser(newUserData, function(err, user) {
                if (err) {
                    req.session.error = 'Failed to register new user: ' + err;
                    res.redirect('/register');
                    return;
                }

                req.logIn(user, function(err) {
                    if (err) {
                        res.status(400);
                        return res.send({reason: err.toString()});
                    } else {
                        res.redirect('/');
                    }
                })
            });
        }
    },
    getLogin: function (req, res, next) {
        res.render(CONTROLLER_NAME + '/login');
    },
    getProfile: function (req, res) {
        var id = req.user._id;
        users.findUser(id, function (err, data) {
            if (err) {
                console.log(err);
            }
            res.render(CONTROLLER_NAME + '/profile', {data: data});
        });

    }
};
