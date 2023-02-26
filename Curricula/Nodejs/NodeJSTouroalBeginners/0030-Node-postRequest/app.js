var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs')
app.use('/assets',  express.static('stuff'))

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(req, res){
    res.render('index');
})
// http://localhost:3000/contact?dept=marketing&person=joe
// { dept: 'marketing', person: 'joe' }
app.get('/contact', function(req, res){
    // res.send('this is the contact page')
    // res.sendFile(__dirname + '/contact.html')
    // console.log(req.query);
    // res.render('contact');
    res.render('contact', {qs: req.query});
})

// 
app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body)
    res.render('contact-success', {data: req.body});
})

// http://localhost:3000/profile/kkk
app.get('/profile/:name', function(req, res){
    // res.send('You requested to see a profile with the id of ' + req.params.name)
    var data = {age:29, job:'ninja', hobbies: ['eating', 'fighting', 'fishing']}
    res.render('profile', {person: req.params.name, data: data});
});
app.listen(3000);