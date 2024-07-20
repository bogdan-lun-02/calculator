function add(x, y) {
  console.log(x + y) 
}

function subtract(x, y) {
  console.log(x - y) 
}

function multiply(x, y) {
  console.log(x * y) 
}

function divide(x, y) {
  console.log(x / y) 
}

// add(344, 231);
// subtract(555, 233);
// multiply(21, 33);
// divide(888, 4);


let firstNumber = '';
let operator = '';
let secondNumber = '';


function operate(firstNumber, operator, secondNumber) {
  if (operator === '+') return add(firstNumber, secondNumber);
	else if (operator === '-') return subtract(firstNumber, secondNumber);
	else if (operator === '*') return multiply(firstNumber, secondNumber);
	else if (operator === '/') return divide(firstNumber, secondNumber);
  else return 'WRONG OPERATOR!'
}

operate(344, '+', 231);
operate(2344, '-', 299);
operate(5000, '*', 20);