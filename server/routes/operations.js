var express = require('express');
var router = express.Router();

//! GET operations page
router.get('/v1/operations', (req, res, next) => {
  res.render('operations', {
    title: 'Vending Machine Operations',
  });
});

module.exports = router;
