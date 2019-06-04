var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'You' });
});
module.exports = router;

/* GET home page. */
router.get('/films', function(req, res, next) {
  res.render('films', { title: 'Films' });
});
module.exports = router;