const router = require('express').Router();
// const categoriesController = require('../controller/category.controller');
const getCategories = require('../db/postgres/db');

router.get('/', getCategories);

module.exports = router;
