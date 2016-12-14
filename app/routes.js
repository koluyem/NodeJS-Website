// require express
var express = require('express');
var path = require('path');
// create our router object 
var router = express.Router();

//export our router
module.exports = router;

// Add route for our homepage
router.get('/', function(req, res){
//    res.sendFile(path.join(__dirname, '../index.html'));
   res.render('pages/home');
});

// Route for our about page
router.get('/about', function(req, res){
    // res.sendFile(path.join(__dirname, '../about.html'));
    var users = [
        {name: 'Holly', email: 'holly@scotch.io', avatar: 'http://placekitten.com/500/500'},
        {name: 'Chris', email: 'chris@scotch.io', avatar: 'http://placekitten.com/700/700'},
        {name: 'Ado', email: 'Ado@scotch.io', avatar: 'http://placekitten.com/500/500'},
        {name: 'Nick', email: 'Nick@scotch.io', avatar: 'http://placekitten.com/700/700'},        
    ];
    res.render('pages/about', { users: users });
})

router.get('/contact', function(req, res){
    res.render('pages/contact');
});
router.post('/contact', function(req, res){
    console.log(req.body.message);
    res.send('Thanks for contacting us, ' + req.body.name + ' We will respond shortly')
});