
let operand1 = "";
let operator = "";
let operand2 = "";
let firstOp = true;
let eq_pressed = false;
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const ops = ['-', '+', '/', '*', '%'];
const numCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
const opCodes = [189, 191]; // -, /
const shiftOpCodes = [187, 56, 53]; // +, *, %
const simpInputs = Array.from(document.querySelectorAll('.simp-input'));
simpInputs.forEach(input => input.addEventListener('click', (e) => getNumInput(e)));

const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(input => input.addEventListener('click', (e) => getOperatorInput(e)));

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clear);

const equals = document.querySelector('#equals');
equals.addEventListener('click', calculate);
equals.addEventListener('click', eqPresser);

const resultScreen = document.querySelector('.result-screen');
const operatorScreen = document.querySelector('#operator-screen');

window.addEventListener('keydown', keyInput);

function keyInput(e) {
    console.log(e.key);
    console.log(e.keyCode);
    if (e.key === '=' || e.keyCode === 13) {
        calculate();
        eqPresser();
    } else if (ops.includes(e.key)) {
            console.log('here')
            operatorInput(e.key);
            return;
    } else if (nums.includes(e.key)) {
        console.log('there')
        numberInput(e.key);
        return;
}}


function getNumInput(e) {
    const input = e.target.textContent;
    numberInput(input);
}

function numberInput(input) {
    if (firstOp || eq_pressed) {
        if (eq_pressed) {
            operand1 = "";
            eq_pressed = false;
            firstOp = true;
        }
        operand1 = inputter(operand1);
    } else {
        operand2 = inputter(operand2);   
    }

    function inputter(operand) {
        if (input === "0" && operand === "") {
            operand = ""
            return operand;
        } else if (input === "." && operand.includes(".")) {
            return;
        } else {
            // if (operand.split()[0] === "0") {
            //     operand = operand.split().shift().join('') // remove a leading zero if there is one
            // }
            operand += input;
            resultScreen.textContent = operand;
            return operand;  
        }}; 
};

function getOperatorInput(e) {
    const input = e.target.textContent;
    operatorInput(input);
}

function operatorInput(input) {
    if (operand2 != "") {
        operand1 = calculate();
        operand2 = "";
        firstOp = false;
    }
    operator = input;
    firstOp = false;
    operatorScreen.textContent = operator;
}

function calculate() {
    console.log('calc')
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
    operand1 = result
    operand2 = ""
    resultScreen.textContent = result;
    operatorScreen.textContent = ""
    return result;
}

function eqPresser() {
    eq_pressed = true;
}

function clear() {
    operand1 = "";
    operand2 = "";
    firstOp = true;
    eq_pressed = false;
    resultScreen.textContent = "0"
    operatorScreen.textContent = ""
}

