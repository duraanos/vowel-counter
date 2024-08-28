import { TEXTAREA, VOWELS_ARR } from '../js/config.js';
import { generateText } from '../js/helpers.js';
import { countVowels } from '../js/vowels.js';
import { countWords } from './words-letters.js';

const vowels = document.querySelector('.vowels-count');
const consonants = document.querySelector('.consonants-count');

const countChars = function () {
  const newText = generateText();
  let numVowels = 0;
  let numConsonants = 0;

  [...newText]
    .filter((value, index, self) =>
      VOWELS_ARR.includes(value) ? value : self.indexOf(value) === index
    )
    .forEach(char =>
      VOWELS_ARR.includes(char) ? numVowels++ : numConsonants++
    );

  vowels.textContent = numVowels;
  consonants.textContent = numConsonants;
};

TEXTAREA.addEventListener('input', countChars);
TEXTAREA.addEventListener('input', countVowels);
TEXTAREA.addEventListener('input', countWords);
