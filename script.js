
let operand1 = "";
let operator = "";
let operand2 = "";
let firstOp = true


const simpInputs = Array.from(document.querySelectorAll('.simp-input'));
simpInputs.forEach(input => input.addEventListener('click', (e) => numberInput(e)));

const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(input => input.addEventListener('click', (e) => operatorInput(e)));

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clear);

const equals = document.querySelector('#equals');
equals.addEventListener('click', calculate);

const resultScreen = document.querySelector('.result-screen');
const operatorScreen = document.querySelector('#operator-screen');


function numberInput(e) {
    if (firstOp) {
        if (e.target.textContent === "0" && operand1 === "") {
            return;
        } else if (e.target.textContent === "." && operand1.includes(".")) {
            return;
        } else {
            if (operand1.split()[0] === "0") {
                operand1 = operand1.split().shift().join('')
            }
            operand1 += e.target.textContent;
            resultScreen.textContent = operand1;    
        }
    } else {
        if (e.target.textContent === "0" && operand2 === "") {
            return;
        } else if (e.target.textContent === "." && operand2.includes(".")) {
            return;
        } else {
            if (operand2.split()[0] === "0") {
                operand2 = operand2.split().shift().join('')
            }
            operand2 += e.target.textContent;
            resultScreen.textContent = operand2;    
        }      
    }
};

function operatorInput(e) {
    if (operand2 != "") {
        operand1 = calculate();
        operand2 = ""
    }
    operator = e.target.textContent;
    firstOp = false;
    operatorScreen.textContent = operator
}

function calculate() {
    let o1 = Number(operand1);
    let o2 = Number(operand2);
    let result;
    if (operator === "+") {
        result = o1 + o2;
    } else if (operator === "-") {
        result = o1 - o2;        
    } else if (operator === "*") {
        result = o1 * o2;
    } else if (operator === "/") {
        result = o1 / o2;
    } else if (operator === "%") {
        result = o1 % o2;
    }
    resultScreen.textContent = result;
    operatorScreen.textContent = ""
    return result;
}

function clear() {
    operand1 = 0;
    operand2 = 0;
    resultScreen.textContent = "0"
    operatorScreen.textContent = ""
}

