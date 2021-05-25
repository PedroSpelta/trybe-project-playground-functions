// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  return a&&b;
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return base*height/2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length-1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins*3+ties*1;
}


function biggestNumber(array){
  let result = array[0];
  for (number of array){
    if (number > result) result = number;
  }
  return result;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  const biggest = biggestNumber(array);
  let count = 0;
  for (number of array){
    if (number == biggest) count +=1;
  }
  return count;
}



// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
