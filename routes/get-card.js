var express = require('express');
var router = express.Router();

const mtg = require('mtgsdk')

/* GET cardResult */
router.get('/', function(req, res, next) {
	
	//Gets random number between 1-5000
	const randomNumber = Math.floor(Math.random() * 5000) + 1; 
	mtg.card.find(randomNumber)
	.then(cardResult => {
		res.json({
			card: cardResult.card,
		})
	})		
	.catch(err => res.status(404).json({
		err: '404, Card not found'}
	));
});

module.exports = router;
