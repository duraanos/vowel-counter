import { TEXTAREA, PUNCTUATIONS } from '../js/config.js';
import { generateText } from '../js/helpers.js';

const words = document.querySelector('.words-count');
const letters = document.querySelector('.letters-count');

export const countWords = function () {
  const text = TEXTAREA.value;
  const newText = text.toLowerCase().replace(PUNCTUATIONS, '');
  let numWords = 0;

  newText.split(' ').forEach(word => (word !== '' ? numWords++ : 0));

  words.textContent = numWords;
};

export const countLetters = function () {
  const newText = generateText();
  let numLetters = 0;

  [...newText].forEach(letter => (letter !== ' ' ? numLetters++ : 0));

  letters.textContent = numLetters;
};