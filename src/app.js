'use strict';

const vowels = document.querySelector('.vowels-count');
const consonants = document.querySelector('.consonants-count');
const textarea = document.querySelector('textarea');

const vowelsArr = ['a', 'e', 'i', 'o', 'u'];

const countLetters = function () {
  const text = textarea.value;
  let numVowels = 0;
  let numConsonants = 0;

  [...text].forEach(letter =>
    vowelsArr.includes(letter) ? numVowels++ : numConsonants++
  );

  vowels.textContent = numVowels;
  consonants.textContent = numConsonants;
};

textarea.addEventListener('input', countLetters);
