const express = require('express');

const Word = require('../models/word');

const router = express.Router();

router.get('/:word', (req, res) => {
  const { word } = req.params;

  Word.findOne({word: word})
    .then(words => res.json(words))
    .catch(err => res.status(500).json({ error: err}));
});

module.exports = router;
