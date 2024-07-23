const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const display = document.querySelector('.display');

let firstNumber = '';
let operator = '';
let secondNumber = '';
let totalCount = '';

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
  if (totalCount !== '') {
    secondNumber += e.target.value;
    display.textContent = secondNumber;
  }

  else { if (operator === '') {
    firstNumber += e.target.value;
    display.textContent = firstNumber;
  }
  else if (operator !== '') {
		secondNumber += e.target.value
		display.textContent = secondNumber
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
			e.target.style.backgroundColor = '#ad0a30';
		} else {
			operate()
		}
  }
}

function operate() {
  if (operator === '+') {
		totalCount = add(firstNumber, secondNumber)
	} else if (operator === '-') {
		totalCount = subtract(firstNumber, secondNumber)
	}

  display.textContent = totalCount;
  firstNumber = totalCount;
  operator = '';
  secondNumber = '';
}


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