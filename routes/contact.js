var express= require('express');
var router = express.Router();


//var nodemailer = require('nodemailer');
//const xoauth2 = require('xoauth2');

/*
const xoauth2 = require('xoauth2');
*/



/*Route for HOMEPAGE*/
router.get('/contact', function(req, res){
		
		res.render('contact', {
			pageTitle: 'Contact',
			pageId: 'contact'
		});
	
});

router.post('/contact', function(req, res, next){
	res.redirect('/');
	next();
});






/*CONTACT FORM*/
//router.post('/contact/send', function(req, res){
//	/*console.log("testtttt");*/
//
//var generator = require('xoauth2').createXOAuth2Generator({
//	 		  user: "johnymediatech@gmail.com", 
//			  clientId: "238026626997-qbcnn98ief2ik8f1rt5ig1gdl4c2oel7.apps.googleusercontent.com",
//			  clientSecret: "DKlW92ovoD9gp8ajKg9CdyDd",
//			  refreshToken: "1/-P1hzn9hJn2bOkFpPWKIDF_wgmixE-2M3BmWKttVcmY"
//});
//
//	var smtpTransport = nodemailer.createTransport({
//    service: 'Gmail',
//    auth: {
//         xoauth2: generator 
//	}
//});
//
//	var mailOptions = {
//	  from: 'Marlen Awwad <johnymediatech@gmail.com>',
//	  to: 'johnymediatech@gmail.com',
//	  subject: ' Website Submission ',
//	  generateTextFromHTML: true,
//	  html:'<p> You have a submission of the following details: </p><ul><li> NAME: '+req.body.name+'</li><li>EMAIL: ' +req.body.email+ '</li><li>MESSAGE: ' +req.body.message+ '</li></ul>'
//	}
//
//	smtpTransport.sendMail(mailOptions, function(error, response) {
//	  if (error) {
//		console.log(error);
//		res.redirect('/');
//	  } else {
//		console.log('Message has been sent: ' + info.response);
//		res.redirect('/');
//	  }
//	  smtpTransport.close();
//	});
//});





module.exports = router;