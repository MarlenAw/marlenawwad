var express= require('express');
var router = express.Router();
var bodyParser = require('body-parser'); /*to handle post requests in contact*/
var fs = require('fs'); /*using it to save any new contact to the contact.json file*/

var contactText = require('../text/contact.json');



router.get('/contact-api', function(req, res){
	res.json(contactText);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.post('/contact-api', function(req, res){
	contactText.unshift(req.body); /*unshift is used for getting the recent contact at the top of the contacts*/
	fs.writeFile('text/contact.json', JSON.stringify(contactText), 'utf8', function(err){
		if(err) {
        return console.log(err);
		}
	});
	res.json(contactText);
});


module.exports = router;





















































