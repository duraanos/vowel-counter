import { TEXTAREA, VOWELS_ARR, PUNCTUATIONS, TEXTAREA } from './config.js';
import { generateText } from './helpers.js';
import { countVowels } from "./vowels.js";


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

