const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    res.render('home');
});

router.get('/detail', function (req, res) {
    res.render('detail', req.query);
});


module.exports = router;