const mongoose = require('../db');

const word = new mongoose.Schema({
  word: { type: String, required: true },
  score: { type: Number, required: false },
  alphagram: { type: String, required: true },
  definition: { type: String, required: false },
  front_hooks: { type: [String], required: true },
  back_hooks: { type: [String], required: true },
  inner_front_hook: { type: Boolean, required: true },
  inner_back_hook: { type: Boolean, required: false },
  anagrams: { type: [String], required: true },
  probability: { type: Number, required: true },
  probability_order: { type: Number, required: true },
  playability: { type: Number, required: true },
  playability_order: { type: Number, required: true }
});

const Word = mongoose.model('Word', word);
module.exports = Word;
