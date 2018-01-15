//assigning the convert button from the html to a variable
let convertButton = document.getElementById('convertButton');

//adding a click event listener to the convert button
convertButton.addEventListener('click', function () {
    let input = document.getElementById('input').value.trim();
    let result = toWords(input);
    let outputEN = document.getElementById('resultEN');
    outputEN.textContent = result;
    let outputMK = document.getElementById('resultMK');
    outputMK.textContent = toMKWords(input);
});

//adding an Enter keypress event listener to the document
document.getElementById('table').addEventListener('keyup', function (e) {
    e.preventDefault();
    if (e.keyCode == 13) {
        convertButton.click();
    }
});

//a function which splits the number in segments of three digits
function splitNumber(number) {
    let thousands = [];

    while (number > 0) {
        thousands.push(number % 1000);
        number = Math.floor(number / 1000);
    }
    return thousands;
}

// a function which is used in the processing of the number input, to check if the value passed to the function is a truthy value; that it's not undefined, null, false, 0, NaN or an empty string ''
function isTruthy(item) {
    return !!item;
}


//a function which capitalizes the first letter in a string, used for the final result displayed in the html
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//the main function used to convert the numbers to words, in English
function toWords(number) {
    let result;
    number = Number(number);

    //checking if the input is a valid number
    if ((isNaN(number)) || (number < 0) || (number > 999999999999)) {
        result = 'Invalid input! Please enter a number between 0 and 999,999,999,999';
    } else { //processing the input number with the additional functions
        result = splitNumber(number)
            .map(englishWords)
            .map(splitNumberToWords)
            .filter(isTruthy)
            .reverse()
            .join(' ');
    }

    //returning the result with a capitalized first letter
    return capitalizeFirstLetter(result);

    //the function which actually converts the number to words
    function englishWords(number) {
        let result = '';
        let onesResult,
            tensResult,
            hundredsResult,
            words = [];
        let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let twos = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        if (number < 10) {
            result = ones[number];
        } else if ((number > 10) && (number < 20)) {
            result = twos[number - 10 - 1];
        } else if (number < 100) {
            onesResult = number % 10;
            tensResult = Math.floor(number / 10);
            words.push(tens[tensResult - 1]);
            words.push(ones[onesResult]);
            result = words.filter(isTruthy).join(' ');
        } else {
            hundredsResult = Math.floor(number / 100);
            words.push(englishWords(hundredsResult));
            words.push('hundred');
            let tensDigit = Math.floor((number % 100) / 10);
            if (tensDigit > 0) {
                words.push(' and ')
            }
            words.push(englishWords(number % 100));
            result = words.filter(isTruthy).join(' ');
        }
        return result;
    }

    //a function which adds words to larger numbers than 1000
    function splitNumberToWords(resultParam, index) {
        let largeNumberResult = '';

        if (!resultParam) {
            largeNumberResult = null;
        } else {
            let largeNumbers = ['thousand', 'million', 'billion'];
            let largeNumber = largeNumbers[index - 1];
            largeNumberResult = [resultParam, largeNumber].filter(isTruthy).join(' ');
        }
        return largeNumberResult;
    }
}

//the main function used to convert the numbers to words, in Macedonian
function toMKWords(number) {
    let result;
    number = Number(number);

    //checking if the input is a valid number    
    if ((isNaN(number)) || (number < 0) || (number > 999999999999)) {
        result = 'Неправилно внесена вредност! Внесете број помеѓу 0 и 999,999,999,999';
    } else { //processing the input number with the additional functions
        result = splitNumber(number)
            .map(macedonianWords)
            .map(splitNumberToWordsMK)
            .filter(isTruthy)
            .reverse()
            .join(' ');
    }

    //returning the result with a capitalized first letter
    return capitalizeFirstLetter(result);

    //a function which adds words to larger numbers than 1000    
    function splitNumberToWordsMK(resultParam, index) {
        let largeNumberResult = '';

        if (!resultParam) {
            largeNumberResult = null;
        } else {
            let largeNumberObject = largeNumbersMK(resultParam, index);
            largeNumberResult = [largeNumberObject.resultParam, largeNumberObject.largeNumberMK].filter(isTruthy).join(' ');
        }

        return largeNumberResult;
      
        function largeNumbersMK(resultParam, index) {
            let resultObject = new Object();
            let largeNumbersMK = ['илјада', 'милион', 'милијарда'];
            let largeNumberMK = largeNumbersMK[index - 1];
            
            if (largeNumberMK) {
                if (resultParam == 'еден') {
                    resultParam = '';
                } else if (index == 1 || index == 3) { //changing the gender of the number words in case of илјада and милијарда
                    if (resultParam.indexOf('еден') > -1) {
                        resultParam = resultParam.replace('еден', 'една');
                    }
                    if (resultParam.indexOf('два') == resultParam.length - 3) {
                        resultParam = resultParam.replace('два', 'две');
                    }
                    //adding plural marker -и
                    largeNumberMK = largeNumberMK.substr(0, largeNumberMK.length - 1) + 'и';
                } else if (resultParam.indexOf('еден') == -1) {
                    largeNumberMK += 'и';
                }
            }
            resultObject.largeNumberMK = largeNumberMK;
            resultObject.resultParam = resultParam;
            return resultObject;
        }
    }

    //the function which actually converts the number to words    
    function macedonianWords(number) {
        let result = '';
        let onesResult,
            tensResult,
            hundredsResult,
            words = [];
        let ones = ['нула', 'еден', 'два', 'три', 'четири', 'пет', 'шест', 'седум', 'осум', 'девет'];
        let twos = ['единаесет', 'дванаесет', 'тринаесет', 'четиринаесет', 'петнаесет', 'шеснаесет', 'седумнаесет', 'осумнаесет', 'деветнаесет'];
        let tens = ['десет', 'дваесет', 'триесет', 'четириесет', 'педесет', 'шеесет', 'седумдесет', 'осумдесет', 'деведесет'];
        let hundreds = ['сто', 'двесте', 'триста', 'четиристотини', 'петстотини', 'шестотини', 'седумстотини', 'осумстотини', 'деветстотини'];

        if (number < 10) {
            result = ones[number];
        } else if ((number > 10) && (number < 20)) {
            result = twos[number - 10 - 1];
        } else if (number < 100) {
            onesResult = number % 10;
            tensResult = Math.floor(number / 10);
            words.push(tens[tensResult - 1]);
            words.push(ones[onesResult]);
            result = words.filter(isTruthy).join(' и ');
        } else {
            hundredsResult = Math.floor(number / 100);
            words.push(hundreds[hundredsResult - 1]);
            let tensDigit = Math.floor((number % 100) / 10);
            if (tensDigit == 0) {
                words.push(' и ')
            }
            words.push(macedonianWords(number % 100));
            result = words.filter(isTruthy).join(' ');
        }

        return result;
    }
}