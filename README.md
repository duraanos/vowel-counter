![project-image](https://github.com/user-attachments/assets/bf49672f-5e3e-48e5-b38c-1079df90eb08)

# Wovel Counter with JavaScript

Introducing the vowel counter application, a versatile text analysis tool designed to enhance your writing experience. This application not only counts vowels and consonants but also provides detailed statistics on words and letters within any given text. Whether you’re a writer, student, or language enthusiast, the vowel counter offers a user-friendly interface and accurate results to help you understand the composition of your text better. With its comprehensive features, including an online vowel counter and text statistics calculator, you can effortlessly gain insights into your writing patterns and improve your linguistic skills.

## Features
- Count the total number of vowels in the text area
- Count the total number of each vowel in the text area
- Count the total number of consonants in the text area
- Count the total number of words in the text area
- Count the total number of letters in the text area

## Overview

```javascript

import { TEXTAREA, VOWELS_ARR } from '../js/config.js';
import { generateText } from '../js/helpers.js';
import { countVowels } from '../js/vowels.js';
import { countWords } from './words-letters.js';
import { countLetters } from './words-letters.js';

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
    .forEach(char => {
      if (VOWELS_ARR.includes(char)) numVowels++;
      if (char !== ' ') numConsonants++;
    });

  vowels.textContent = numVowels;
  consonants.textContent = numConsonants;
};

TEXTAREA.addEventListener('input', countChars);
TEXTAREA.addEventListener('input', countVowels);
TEXTAREA.addEventListener('input', countWords);
TEXTAREA.addEventListener('input', countLetters);

```