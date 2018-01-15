//saving some html elements in variables, to be used later:
//the reset button, C:
let reset = document.getElementById('reset');
//the result html element:
let resultTD = document.getElementById('result');

// the variables for the numbers/values and operators input into the calculator:
let currentResult = 0,
    previousResult = 0,
    operator = '+';

// object created to be used to assign values to the td elements in the html, since the html has no button or input elements, but a table with td elements meant to present the calculator buttons
let buttons = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '0': 0,
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/',
    '=': '='
};

//assigning values to the td html elements on click, using the buttons object
for (let property in buttons) {
    document.getElementById(property).addEventListener('click', () => {
        let result;
        if (!isNaN(buttons[property])) { //if a number is input
            //making input of a multidigit number possible
            currentResult = (currentResult * 10) + buttons[property];
            result = currentResult;
        } else { //if an operator is input
            //calculating the result with the operation function
            result = operation(buttons[property]);
        }
        //passing the result into the result html element, to be displayed
        resultTD.textContent = result;
    });
}

//the principal function of the calculator, performing the calculations
function operation(operatorParam) {
    let result;
    switch (operator) {
        case '+':
            result = previousResult + currentResult;
            break;
        case '-':
            result = previousResult - currentResult;
            break;
        case '*':
            result = previousResult * currentResult;
            break;
        case '/':
            //integer division with Math.trunc, as required in the task
            result = Math.trunc(previousResult / currentResult);
            break;
    }
    //updating the result/operation with the updateOperation function
    updateOperation(operatorParam, result);
    return result;
}

//the function which updates the operation/result, depending on the operator, and also controls what is displayed in the result html element 
function updateOperation(operatorParam, result) {
    if (operatorParam === '=') {
        previousResult = 0;
        currentResult = result;
        operator = '+';
    } else {
        previousResult = result;
        currentResult = 0;
        operator = operatorParam;
    }
}

//resetting the variables and the result html element when C is clicked
reset.addEventListener('click', () => {
    currentResult = 0;
    previousResult = 0;
    operator = '+';
    result.innerText = '';
});

//adding an event listener to the document for keypress events on numbers and operators, by simulating click events on the appropriate html elements
document.addEventListener('keypress', (event) => {
    let keyPressed = String.fromCharCode(event.charCode);
    let numbersString = "0123456789";
    let operatorsString = "+-*/=";

    if (numbersString.indexOf(keyPressed) !== -1) {
        document.getElementById(keyPressed).click();
    }
    if (operatorsString.indexOf(keyPressed) !== -1) {
        document.getElementById(keyPressed).click();
    }
});

//adding event listener to the document for keydown events on the Enter and ESC keys, by simulating click events on the appropriate html elements
document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        document.getElementById('reset').click();
    }
    if (event.keyCode === 13) {
        document.getElementById('=').click();
    }
});