const express = require('express');
const PreferenceController = require('./src/controller/PreferenceController');
const router = express.Router();




router.get('/', function (req, res) {
    res.render('home');
});

router.get('/detail', function (req, res) {
    res.render('detail', req.query);
});

router.post('/preference', PreferenceController.preference)

module.exports = router;