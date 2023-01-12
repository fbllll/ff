const express = require('express');
const router = express.Router();

    router

.get('/', async (req, res) => {
    res.render('index', {
        doc_title: 'Gmail'
    })
})

.get('/gmail-password', async (req, res) => {
    res.render('password', {
        doc_title: 'Gmail'
    })
})

module.exports = router;