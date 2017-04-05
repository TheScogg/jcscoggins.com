const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();

router.get('/', (req,res) => {
    console.log(req.user);
    res.render('index', {user : req.user});
})

router.get('/home', (req, res) => {
    res.render('index', {user: req.user});
});

router.get('/projects', (req, res) => {
    res.render('projects', {user: req.user});
});

router.get('/music', (req, res) => {
    res.render('music', {user: req.user});
});

router.get('/contact', (req, res) => {
    res.render('contact', {user: req.user});
});

router.get('/myWorld', (req, res) => {
    res.render('myWorld', {user: req.user});
});


router.get('/loginportal', (req, res) => {
    res.render('loginportal', { user : req.user });
});

router.get('/register', (req, res) => {
    res.render('register', { });
});



router.get('/tennis', (req, res) => {
    res.render('apps/tennis', { });
});

router.post('/register', (req, res, next) => {
    Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
        if (err) {
          return res.render('register', { error : err.message });
        }

        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});


router.get('/login', (req, res) => {
    res.render('login', { user : req.user, error : req.flash('error')});
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

// LINK TO /lougout to automatically log out from menu on main page
router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

router.get('/ping', (req, res) => {
    res.status(200).send("pong!");
});

module.exports = router;
