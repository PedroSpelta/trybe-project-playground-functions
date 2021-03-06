// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties * 1;
}

function biggestNumber(array) {
  let result = array[0];
  for (let number of array) {
    if (number > result) result = number;
  }
  return result;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  const biggest = biggestNumber(array);
  let count = 0;
  for (let number of array) {
    if (number === biggest) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) return 'cat1';
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) return 'cat2';
  return 'os gatos trombam e o rato foge';
}

function fizzBuzzSelector(number) {
  if (number % 3 === 0 && number % 5 === 0) return 'fizzBuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return 'bug!';
}
// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  for (let number of array) {
    result.push(fizzBuzzSelector(number));
  }
  return result;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let final = string;
  let vowels = 'aeiou';
  for (let letter of vowels) {
    let re = new RegExp(`${letter}`, 'g');
    final = final.replace(re, `${vowels.indexOf(letter) + 1}`);
  }
  return final;
}
function decode(string) {
  // seu código aqui
  let final = string;
  let vowels = 'aeiou';
  for (let index = 0; index < vowels.length; index += 1) {
    let re = new RegExp(`${parseInt(index, 10) + 1}`, 'g');
    final = final.replace(re, `${vowels[parseInt(index, 10)]}`);
  }
  // for (let letter in vowels) {
  //   let re = new RegExp(`${parseInt(letter, 10) + 1}`, 'g');
  //   final = final.replace(re, `${vowels[parseInt(letter, 10)]}`);
  // }
  return final;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
