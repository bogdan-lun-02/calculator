const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const display = document.querySelector('.display');

let firstNumber = '';
let operator = '';
let secondNumber = '';
let totalCount = '';
let numberOfOperations = 0;

// event listeners

numberButtons.forEach((button) => {
  button.addEventListener('click', addNumbers)
})

operatorButtons.forEach(button => {
	button.addEventListener('click', addOperator)
})

equalButton.addEventListener('click', operate);

// function declarations

function addNumbers(e) {
  if (numberOfOperations > 0) {
    secondNumber += e.target.value;
    display.textContent = secondNumber;
  }

  else { if (operator === '') {
    firstNumber += e.target.value;
    display.textContent = firstNumber;
  }
  else if (operator !== '') {
		secondNumber += e.target.value;
		display.textContent = secondNumber;
	}
}
}

function addOperator(e) {
  if (totalCount !== '') {
    operator += e.target.value;
    operate();
  }
	else {if (operator === '') {
			operator += e.target.value;
		} else {
			operate()
		}
  }
}

function operate() {

  if (firstNumber === '' && secondNumber === '' && numberOfOperations === 0) {
    totalCount = 0;
    display.textContent = totalCount;
  }

  else if ((operator === '' || secondNumber === '') && numberOfOperations === 0) {
    display.textContent = firstNumber;
  }

  else { if (operator === '+') {
		totalCount = add(firstNumber, secondNumber)
	} else if (operator === '-') {
		totalCount = subtract(firstNumber, secondNumber)
	} else if (operator === '*') {
    totalCount = multiply(firstNumber, secondNumber)
  } else if (operator === '/') {
    totalCount = divide(firstNumber, secondNumber)
  }

  display.textContent = totalCount;
  firstNumber = totalCount;
  totalCount = '';
  operator = '';
  secondNumber = '';
  numberOfOperations++;
}}


function add(x, y) {
  let num = Number(x) + Number(y);
  let roundedNum = roundDecimal(num);
  return roundedNum;
}

function subtract(x, y) {
  let num = Number(x) - Number(y);
	let roundedNum = roundDecimal(num);
	return roundedNum;
}

function multiply(x, y) {
  let num = Number(x) * Number(y);
	let roundedNum = roundDecimal(num);
	return roundedNum;
}

function divide(x, y) {
  let num = Number(x) / Number(y);
	let roundedNum = roundDecimal(num);
	return roundedNum;
}

function roundDecimal(num) {
  if (Number.isInteger(num)) {
    return num;
  } else {
    let countDecimal = num.toString().split('.')[1].length;
    if (countDecimal > 5) return num.toFixed(5);
    else return num;
  } 
}