var express= require('express');
var router = express.Router();

/*Route for HOMEPAGE*/
router.get('/chat', function(req, res){
		
		res.render('chat', {
			pageTitle: 'Chat',
			pageId: 'chat'
		});
});


module.exports = router;