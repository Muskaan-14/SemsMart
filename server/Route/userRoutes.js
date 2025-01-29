// login page // /users/id POST email and password 
// all categories // /categories/id GET
// all products for a particular category// /products/id   POST cat_id
// particular product // /products/id   POST prod_id
// add item POST products/id POST all data for columns 
// profile page users/id GET 
// My orders (whatever items kept for selling) products/id POST seller_id
// My orders particular products bids/id prod_id

const express = require('express');

const {loginUser } = require('../Controller/authControllers');

const router = express.Router();

//router.post('/login', loginUser);
 
module.exports = router;
 