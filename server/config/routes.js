const controllers = require('../controllers');
const auth = require('../config/auth');

module.exports = (app) => {
    app.get('/', controllers.home.index);

    app.get('/about', auth.isAuthenticated, controllers.home.about);

    app.get('/user/register', controllers.user.registerGet);
    app.post('/user/register', controllers.user.registerPost);

    app.post('/user/logout', controllers.user.logout);

    app.get('/user/login', controllers.user.loginGet);
    app.post('/user/login', controllers.user.loginPost);

    app.all('*', (req, res) => {
        res.status(404);
        res.send('Not found');
    });
};