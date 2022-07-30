var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/v1/', function(req, res, next) {
  res.render('index', {
    user: 'Admin',
    title: 'Vending Machine API'});
});

module.exports = router;
