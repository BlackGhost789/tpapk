const express = require('express');
const routerAuthor = express.Router();

const {createAuthor} = require('../controllers/author.controller');

routerAuthor.post('/', createAuthor);


module.exports = routerAuthor;