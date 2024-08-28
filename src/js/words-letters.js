import { TEXTAREA, PUNCTUATIONS } from '../js/config.js';

const words = document.querySelector('.words-count');

export const countWords = function () {
  const text = TEXTAREA.value;
  const newText = text.toLowerCase().replace(PUNCTUATIONS, '');
  let numWords = 0;

  newText.split(' ').forEach(word => (word !== '' ? numWords++ : 0));

  words.textContent = numWords;
};
