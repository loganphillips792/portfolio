const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home', { pageTitle: 'Logan' });
});

router.get('/resume', (req, res) => {
    res.render('pages/resume', { pageTitle: 'Resume' });
});

module.exports = router;
