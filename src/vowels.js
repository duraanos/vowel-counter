const numA = document.querySelector('.a-count');
const numE = document.querySelector('.e-count');
const numI = document.querySelector('.i-count');
const numO = document.querySelector('.o-count');
const numU = document.querySelector('.u-count');

export const countVowels = function () {
  const text = textarea.value;
  const newText = text.replace(' ', '').replace(punctuations, '');

  const eachVowels = [...newText.toLowerCase()].reduce(
    (acc, char) => {
      if (vowelsArr.includes(char)) acc[char] = (acc[char] || 0) + 1;
      return acc;
    },
    { a: 0, e: 0, i: 0, o: 0, u: 0 }
  );

  numA.textContent = eachVowels.a;
  numE.textContent = eachVowels.e;
  numI.textContent = eachVowels.i;
  numO.textContent = eachVowels.o;
  numU.textContent = eachVowels.u;
};
