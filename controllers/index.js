const express = require('express'); 
const router = express.Router(); 
router.get('/', function(req, res) { 
res.render('index', { title: 'Express' }); }); 
router.get('/jade',function(req,res){
	res.render('index.jade');
});
module.exports = router;