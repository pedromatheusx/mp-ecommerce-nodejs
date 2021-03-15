const { query } = require('express');
const express = require('express');
const PreferenceController = require('./src/controller/PreferenceController');
const router = express.Router();




router.get('/', function (req, res) {
    res.render('home');
});

router.get('/detail', function (req, res) {
    res.render('detail', req.query);
});

router.get('/success' ,function (req, res) {
    res.render('success', req.query)
})

router.get('/pending' ,function (req, res) {
    res.render('pending', req.query)
})

router.get('/rejected' ,function (req, res) {
    res.render('rejected', req.query)
})

router.post('/preference', PreferenceController.preference)

module.exports = router;