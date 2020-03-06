const express = require('express');
let router = express.Router();

router.get('/movielist', (req, res) => {
  res.json({ title: 'MovieList API' });
});

module.exports = router;