const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended:false}));

app.use('/', (req, res, next)=>{
    console.log('this alway run!');
    next();
})

app.use('/admin', adminRoutes)

app.use(shopRoutes)

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000);

