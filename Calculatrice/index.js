// let screen = document.getElementById("screen");
// button = document.querySelectorAll("button");
// let screenValue = "";
// for(items of button){
//     items.addEventListener("click", (e)=> {
//         buttonText=e.target.innerText;
//         console.log(buttonText);

//         if(buttonText == 'X') {
//             buttonText = "*";
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//         else if (buttonText == 'AC') {
//             screenValue = "";
//             screen.value = screenValue;
//         } 
        
//         else if (buttonText == 'Del') {
//             screenValue;
//             screen.value = screenValue;
//         }

//         else if (buttonText == '='){
//             screen.value = eval(screenValue);
//             screenValue = screen.value;
//         }

//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }
//     });
// }

let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if(isNaN(value)) {
        handleSymbol(value);
    }else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch(symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=' : 
            if(previousOperator === null) {
                return;
            }
            flushOperator(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←' :
            if(buffer.length === 1){
                buffer = '0';
            }else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case '+' :
        case '−' :
        case '×' :  
        case '÷' : 
            handleMath(symbol);
            break; 
    }
}

function handleMath(symbol) {
    if(buffer === '0') {
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runningTotal === 0){
        runningTotal = intBuffer;
    }else {
        flushOperator(buffer);
    }
    previousOperator = symbol;
    buffer = '0';
}

function flushOperator(intBuffer) {
    if(previousOperator === '+') {
        runningTotal += intBuffer;
    }else if(previousOperator === '−') {
        runningTotal -= intBuffer;
    }else if(previousOperator === '×') {
        runningTotal *= intBuffer;
    }else if(previousOperator === '÷'){
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString) {
    if(buffer === '0') {
        buffer = numberString;
    }else {
        buffer += numberString;
    }
}

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init();