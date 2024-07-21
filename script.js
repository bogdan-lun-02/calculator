
// function operate(firstNumber, operator, secondNumber) {
// 	if (operator === '+') return add(firstNumber, secondNumber)
// 	else if (operator === '-') return subtract(firstNumber, secondNumber)
// 	else if (operator === '*') return multiply(firstNumber, secondNumber)
// 	else if (operator === '/') return divide(firstNumber, secondNumber)
// 	else return 'WRONG OPERATOR!'
// }

const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const display = document.querySelector('.display');

let firstNumber = '';
let operator = '';
let secondNumber = '';

// event listeners

numberButtons.forEach((button) => {
  button.addEventListener('click', addNumbers)
})

operatorButtons.forEach(button => {
	button.addEventListener('click', addOperator)
})

equalButton.addEventListener('click', () => {
  if (operator === '+') display.textContent = add(firstNumber, secondNumber)
	else if (operator === '-')
		display.textContent = subtract(firstNumber, secondNumber)
	else if (operator === '*')
		display.textContent = multiply(firstNumber, secondNumber)
	else if (operator === '/')
		display.textContent = divide(firstNumber, secondNumber)
});

// function declarations

function addNumbers(e) {
  if (operator === '') {
		firstNumber += e.target.value;
    display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
	} 
  
  else secondNumber += e.target.value;
  display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
}

function addOperator(e) {
	operator += e.target.value;
  display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
}

const operateResult = '';



function add(x, y) {
  return Number(x) + Number(y)
}

function subtract(x, y) {
  return Number(x) - Number(y)  
}

function multiply(x, y) {
  return Number(x) * Number(y)   
}

function divide(x, y) {
  return Number(x) / Number(y)  
}