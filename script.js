let displayValue = "";
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}




function setOperation(operation) {
    if (currentOperation !== null) {
        calculate()

    }
    firstOperand = parseFloat(displayValue);
    currentOperation = operation;
    displayValue = '';
}

function calculate() {
    if(currentOperation === null || displayValue === '') return;
    
    const secondOperand = parseFloat(displayValue);
    switch(currentOperation) {
        case '+':
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case '-':
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case '*':
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case '/':
            displayValue = (firstOperand / secondOperand).toString();
            break;

    }
    updateDisplay();
    currentOperation = null;
}

function clearDisplay() {
    displayValue ='';
    currentOperation = null;
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('calc-display').value = displayValue;
}

function calculate() {
    const display = document.getElementById('calc-display');
    display.value = 'Hello World';

    const prankDiv = document.getElementById('prank-video');
    prankDiv.innerHTML = `
        <video width="560" height="315" controls autoplay loop>
            <source src="video.mp4" type="video/mp4">
            Tu navegador no soporta video HTML5.
        </video>`;
    prankDiv.style.display = 'block';
}