var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { reverse: 'String Reversal', number_words:'Number of Words' });
});

module.exports = router;
