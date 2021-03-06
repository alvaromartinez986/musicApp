'use strict'

let express = require('express');
let userController = require('../controllers/user');

let api = express.Router();

api.get('/probando-controlador', userController.pruebas);
api.post('/register', userController.saveUser);
api.post('/login', userController.loginUser);


module.exports = api;
