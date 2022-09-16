
let operand1 = "";
let operator = "";
let operand2 = "";
let firstOp = true


const simpInputs = Array.from(document.querySelectorAll('.simp-input'));
simpInputs.forEach(input => input.addEventListener('click', (e) => numberInput(e)));

const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(input => input.addEventListener('click', (e) => operatorInput(e)));

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => console.log(this));

const equals = document.querySelector('#equals');
equals.addEventListener('click', calculate);

const screen = document.querySelector('.screen');


function numberInput(e) {
    if (firstOp) {
        operand1 += e.target.textContent;
        screen.textContent = operand1;
    } else {
        operand2 += e.target.textContent;
        screen.textContent = operand2;        
    }
};

function operatorInput(e) {
    operator = e.target.textContent;
    firstOp = false;
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
    screen.textContent = result;

}

