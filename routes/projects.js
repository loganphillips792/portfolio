const express = require('express');
const router = express.Router();

// Route for Flappy Bird Clone
router.get('/flappy-bird-clone', (req, res) => {
    res.render('flappy-bird', { pageTitle: 'Flappy Bird Clone' });
});

module.exports = router;
