var express= require('express');
var router = express.Router();
var bodyParser = require('body-parser'); /*to handle post requests in feedback*/
var fs = require('fs'); /*using it to save any new feedback to the feedback.json file*/

var feedbackText = require('../text/feedback.json');



router.get('/api', function(req, res){
	res.json(feedbackText);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.post('/api', function(req, res){
	feedbackText.unshift(req.body); /*unshift is used for getting the recent feedback at the top of the feedbacks*/
	fs.writeFile('text/feedback.json', JSON.stringify(feedbackText), 'utf8', function(err){
		console.log(err);
	});
	res.json(feedbackText);
});


module.exports = router;





















































