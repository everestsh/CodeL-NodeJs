const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res, next)=>{
    console.log('In another middleware!');
    // res.send('<h1>The "Add Product" Page!</h1>');
    res.send('<form action="/product" method="POST"><input type="text" name="title"> <button type="submit">Add Product</button></form>');
});

router.use('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;
