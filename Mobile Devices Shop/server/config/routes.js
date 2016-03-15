var auth = require('./auth'),
    controllers = require('../controllers');

module.exports = function(app) {
    app.get('/register', controllers.users.getRegister);
    app.post('/register', controllers.users.postRegister);

    app.post('/login', auth.login);
    app.get('/login', controllers.users.getLogin);

    app.get('/logout', auth.isAuthenticated, auth.logout);

    app.get('/profile', auth.isAuthenticated, controllers.users.getProfile);

    app.get('/phones', controllers.phones.getAll);

    app.get('/phones/add', auth.isAuthenticated, controllers.phones.getAdd);
    app.post('/phones/add', auth.isAuthenticated, controllers.phones.postAdd);

    app.get('/phones/details/:id', controllers.phones.getDetails);

    app.get('/tablets', controllers.tablets.getAll);

    app.get('/tablets/add', auth.isAuthenticated, controllers.tablets.getAdd);
    app.post('/tablets/add', auth.isAuthenticated, controllers.tablets.postAdd);

    app.get('/', function (req, res) {
       res.render('index', {currentUser: req.user});
    });

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
};
