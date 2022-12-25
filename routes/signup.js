var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let session = req.session.name;
  if(session){
    res.redirect('/home');
  }else{
    res.render('signup', { title: 'Sign Up' });
  }
});

module.exports = router;