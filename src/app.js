'use strict';

const vowels = document.querySelector('.vowels-count');
const consonants = document.querySelector('.consonants-count');
const textarea = document.querySelector('textarea');

const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
const punctuations = /[.,?\/#!$%\^&\*;:{}=\-_`~()]/g;

const countChars = function () {
  const text = textarea.value;
  const newText = text.replace(' ', '').replace(punctuations, '');
  let numVowels = 0;
  let numConsonants = 0;

  [...newText]
    .filter((value, index, self) =>
      vowelsArr.includes(value) ? value : self.indexOf(value) === index
    )
    .forEach(char =>
      vowelsArr.includes(char) ? numVowels++ : numConsonants++
    );

  vowels.textContent = numVowels;
  consonants.textContent = numConsonants;
};

const countVowels = function () {
  const numA = document.querySelector('.a-count');
  const numE = document.querySelector('.e-count');
  const numI = document.querySelector('.i-count');
  const numO = document.querySelector('.o-count');
  const numU = document.querySelector('.u-count');

  const text = textarea.value;
  const newText = text.replace(' ', '').replace(punctuations, '');

  const eachVowels = [...newText.toLowerCase()].reduce(
    (acc, char) => {
      if (vowelsArr.includes(char)) acc[char] = (acc[char] || 0) + 1;
      return acc;
    },
    { a: 0, e: 0, i: 0, o: 0, u: 0 }
  );

  const vowelsObj = eachVowels;

  numA.textContent = vowelsObj.a;
  numE.textContent = vowelsObj.e;
  numI.textContent = vowelsObj.i;
  numO.textContent = vowelsObj.o;
  numU.textContent = vowelsObj.u;
};

textarea.addEventListener('input', countChars);
textarea.addEventListener('input', countVowels);
