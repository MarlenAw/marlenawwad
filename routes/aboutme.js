var express= require('express');
var router = express.Router();

/*Route for HOMEPAGE*/
router.get('/aboutme', function(req, res){
		
		res.render('aboutme', {
			pageTitle: 'AboutMe',
			pageId: 'aboutme'
		});
});


module.exports = router;