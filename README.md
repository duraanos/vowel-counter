![project-image](https://github.com/user-attachments/assets/bf49672f-5e3e-48e5-b38c-1079df90eb08)

# Vowel Counter with JavaScript

Introducing the vowel counter application, a versatile text analysis tool designed to enhance your writing experience. This application not only counts vowels and consonants but also provides detailed statistics on words and letters within any given text. Whether you’re a writer, student, or language enthusiast, the vowel counter offers a user-friendly interface and accurate results to help you understand the composition of your text better. With its comprehensive features, including an online vowel counter and text statistics calculator, you can effortlessly gain insights into your writing patterns and improve your linguistic skills.

## Features
- Count the total number of **vowels** in the text area
- Count the total number of **each vowel** in the text area
- Count the total number of **consonants** in the text area
- Count the total number of **words** in the text area
- Count the total number of **letters** in the text area
- Does not count more than **one consonant**
- Does not count **any space**
- Does not count **any punctuation**

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

## Motivation

In today’s digital age, the ability to analyze and understand text composition is more important than ever. Whether you’re a writer aiming to refine your prose, a student working on language assignments, or a professional seeking to improve communication skills, having a reliable text analysis tool to break down the elements of your text can be incredibly beneficial. The vowel counter app is designed to meet this need by providing a comprehensive analysis of vowels and consonants, as well as detailed statistics on words and letters. This online vowel counter not only helps users identify patterns and improve their writing but also enhances their overall understanding of text composition.

Moreover, the Vowel counter app is an invaluable resource for language learners and educators. By offering precise statistics on text composition, it allows users to focus on specific areas of improvement, such as vowel usage or word count. This targeted approach can significantly accelerate the learning process and make language study more efficient and enjoyable. With its user-friendly interface and accurate results, the vowel counter app empowers users to take control of their linguistic development, making it an essential text statistics calculator for anyone looking to enhance their writing and communication skills.

## Installation
1. On GitHub.com, navigate to the main page of the repository
2. Above the list of files, click <> **Code**
![project-image-2](https://github.com/user-attachments/assets/69fbb73c-3d9f-4c5f-8c0a-9aacad26b4ae)
3. Copy the URL for the repository.

   - To clone the repository using HTTPS, under "HTTPS", click

   - To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then click

   - To clone a repository using GitHub CLI, click GitHub CLI, then click
![project-image-3](https://github.com/user-attachments/assets/66e62af2-b119-4f61-8f3a-a536c8685c46)

4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory.
6. Type `git clone`, and then paste the URL you copied earlier.
   ```
   https://github.com/duraanos/vowel-counter.git
   ```
7. Press **Enter** to create your local clone
   ```bash

   $ git clone https://github.com/duraanos/vowel-counter.git
   Cloning into 'vowel-counter'...
   remote: Enumerating objects: 308, done.
   remote: Counting objects: 100% (130/130), done.
   remote: Compressing objects: 100% (94/94), done.
   Rremote: Total 308 (delta 65), reused 95 (delta 32), pack- 
   reused 178 (from 1)
   Receiving objects: 100% (308/308), 32.46 KiB | 443.00 KiB/s, done.
   Resolving deltas: 100% (153/153), done.

   ```

## Usage 
https://github.com/user-attachments/assets/a3e45363-7e78-43ca-a058-8abe6bd5295c
    
https://github.com/user-attachments/assets/58ce931e-1c8e-4c21-94f3-77792a2d2c02

## Conclusion
In conclusion, the vowel counter application serves as an efficient and user-friendly text analysis tool for identifying and counting vowels within text. This vowel counting software not only aids in linguistic studies and educational purposes but also enhances text processing tasks by providing quick and accurate vowel counts. Its intuitive interface and robust functionality make it accessible to users of all skill levels, from students to professionals. By simplifying the process of counting vowels in text, this vowel counter app contributes to a deeper understanding of language patterns and supports various academic and professional endeavors.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT License

Copyright (c) 2024 Duran İzzet Koyuncu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

