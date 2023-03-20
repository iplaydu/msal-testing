var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'MSAL Testing',
    isAuthenticated: req.session.isAuthenticated,
    username: req.session.account?.username
  });
});

module.exports = router;
