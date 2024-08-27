import { TEXTAREA, PUNCTUATIONS } from '../js/config.js';

export const generateText = function () {
  const text = TEXTAREA.value;
  return text.toLowerCase().replace(' ', '').replace(PUNCTUATIONS, '');
};
