var express = require('express');

var app = express();
app.set('view engine', 'ejs')
app.use('/assets',  express.static('assets'))
// app.use('/assets', function(req, res, next){
//     console.log(req.url) 
//     next()
// })

app.get('/', function(req, res){
    // res.send('this is the homepage')
    res.sendFile(__dirname + '/index.html')
})
app.get('/contact', function(req, res){
    // res.send('this is the contact page')
    res.sendFile(__dirname + '/contact.html')
})
app.get('/profile/:name', function(req, res){
    // res.send('You requested to see a profile with the id of ' + req.params.name)
    var data = {age:29, job:'ninja', hobbies: ['eating', 'fighting', 'fishing']}
    res.render('profile', {person: req.params.name, data: data});
});
app.listen(3000);