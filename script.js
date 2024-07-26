const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('.equal')
const clearAllButton = document.querySelector('.clear-all')
const deleteButton = document.querySelector('.backspace')
const display = document.querySelector('.display')
const decimalButton = document.querySelector('.decimal')
const clearOneButton = document.querySelector('.backspace')

let firstNumber = ''
let secondNumber = ''
let operator = ''
let finish = false
let totalCount = 0
let decimalAdded = false

display.textContent = totalCount

numberButtons.forEach(button => {
	button.addEventListener('click', addNumber)
})

operatorButtons.forEach(button => {
	button.addEventListener('click', addOperator)
})

equalsButton.addEventListener('click', operate)

decimalButton.addEventListener('click', addDecimal)

clearAllButton.addEventListener('click', clearAll)

clearOneButton.addEventListener('click', clearOne)

function addNumber(e) {
	// if (firstNumber.length > 4 || secondNumber.length > 4)  return;

	if (secondNumber === '' && operator === '') {
		firstNumber += e.target.value
		display.textContent = firstNumber
	} else if (firstNumber !== '' && secondNumber !== '' && finish) {
		secondNumber += e.target.value
		finish = false
		display.textContent = secondNumber
	} else {
		secondNumber += e.target.value
		display.textContent = secondNumber
	}
}

function addOperator(e) {
	if (firstNumber !== '' && operator !== '') {
		operate()
	}

	operator += e.target.value
	e.target.style.backgroundColor = '#ad0a30'
}

function operate() {
	firstNumber = Number(firstNumber)
	secondNumber = Number(secondNumber)

	if (operator === '+') {
		firstNumber += secondNumber
	} else if (operator === '-') {
		firstNumber -= secondNumber
	} else if (operator === '*') {
		firstNumber *= secondNumber
	} else if (operator === '/') {
		if (secondNumber === 0) return (display.textContent = 'ERROR')
		else firstNumber /= secondNumber
	}

	firstNumber = roundNumber(firstNumber)
	totalCount = String(firstNumber)
	display.textContent = totalCount
	finish = true
	secondNumber = ''
	operator = ''

	operatorButtons.forEach(button => {
		button.style.backgroundColor = '#2a2a2e'
	})
}

function roundNumber(num) {
	return Math.round(num * 1000) / 1000
}

function addDecimal() {
	if (operator === '' && finish === false) {
		firstNumber = Number(firstNumber).toFixed(1)
		firstNumber = String(firstNumber).slice(0, -1)
		display.textContent = firstNumber
		decimalAdded = true
	} else if (operator !== '' && finish === false) {
		decimalAdded = false
		secondNumber = Number(secondNumber).toFixed(1)
		secondNumber = String(secondNumber).slice(0, -1)
		display.textContent = secondNumber
		decimalAdded = true
	} else if (finish === true) {
		secondNumber = Number(secondNumber).toFixed(1)
		secondNumber = String(secondNumber).slice(0, -1)
		display.textContent = secondNumber
		decimalAdded = true
	}
}

function clearAll() {
	firstNumber = ''
	secondNumber = ''
	operator = ''
	finish = false
	totalCount = 0
	decimalAdded = false
	display.textContent = 0
}

function clearOne() {
	if (operator === '' && finish === false) {
		firstNumber = String(firstNumber).slice(0, -1)
		display.textContent = firstNumber
	} else if (operator !== '' && finish === false) {
		secondNumber = String(secondNumber).slice(0, -1)
		display.textContent = secondNumber
	}
}
