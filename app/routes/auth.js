var authController = require('../controllers/authcontroller.js');
var db = require('../models');

module.exports = function (app, passport) {
    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/chatroom',
        failureRedirect: '/signup',
        failureFlash: true
    }
    ));

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/chatroom',
        failureRedirect: '/signin',
        failureFlash: 'Invalid username or password.' 
    }

    ));

    app.get('/chatroom', isLoggedIn, authController.dashboard);

    app.get('/logout', authController.logout);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }

}

