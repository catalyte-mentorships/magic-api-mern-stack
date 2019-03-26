var express = require('express');
var router = express.Router();

const mtg = require('mtgsdk')

/* GET users listing. */
router.get('/', function(req, res, next) {
	mtg.card.find(6)
	.then(result => {
		console.log(result.card.name)
	})
});

module.exports = router;
