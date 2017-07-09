var express= require('express');
var router = express.Router();

/*Route for HOMEPAGE*/
router.get('/skills', function(req, res){
		
		res.render('skills', {
			pageTitle: 'Skills',
			pageId: 'skills'
		});
});


module.exports = router;