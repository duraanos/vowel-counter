'use strict';

const vowels = document.querySelector('.vowels-count');
const consonants = document.querySelector('.consonants-count');


const countChars = function () {
  const text = textarea.value;
  const newText = text.replace(' ', '').replace(punctuations, '');
  let numVowels = 0;
  let numConsonants = 0;

  [...newText.toLowerCase()]
    .filter((value, index, self) =>
      vowelsArr.includes(value) ? value : self.indexOf(value) === index
    )
    .forEach(char =>
      vowelsArr.includes(char) ? numVowels++ : numConsonants++
    );

  vowels.textContent = numVowels;
  consonants.textContent = numConsonants;
};

textarea.addEventListener('input', countChars);
