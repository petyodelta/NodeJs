var usersController = require('./users-controller'),
    phonesController = require('./phone-controller'),
    tabletsController = require('./tablets-controller');

module.exports = {
    users: usersController,
    phones: phonesController,
    tablets: tabletsController
};
