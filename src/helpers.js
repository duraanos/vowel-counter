import { TEXTAREA, PUNCTUATIONS } from './config.js';

export const generateText = function () {
  const text = TEXTAREA.value;
  const newText = text.toLowerCase().replace(' ', '').replace(PUNCTUATIONS, '');
  return newText;
};
