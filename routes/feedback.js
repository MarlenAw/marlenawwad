var express= require('express');
var router = express.Router();

/*Route for HOMEPAGE*/
router.get('/feedback', function(req, res){
		
		res.render('feedback', {
			pageTitle: 'Feedback',
			pageId: 'feedback'
		});
});


module.exports = router;