const router = require('express').Router();
// const productsController = require('../controller/product.controller');
const getProduct = require('../db/postgres/db');

router.get('/:category/:query', getProduct);

module.exports = router;
