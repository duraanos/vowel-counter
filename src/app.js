import { TEXTAREA, VOWELS_ARR, PUNCTUATIONS } from './config.js';

const vowels = document.querySelector('.vowels-count');
const consonants = document.querySelector('.consonants-count');

const countChars = function () {
  const text = TEXTAREA.value;
  const newText = text.replace(' ', '').replace(PUNCTUATIONS, '');
  let numVowels = 0;
  let numConsonants = 0;

  [...newText.toLowerCase()]
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
