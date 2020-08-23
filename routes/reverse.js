var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/',(req, res) =>{
    var word = req.query.word;
    
    rev = word.split("").reverse().join("");
    var len  = rev.length;
    res.json({number_words: len, reverse: rev });
});

module.exports = router;