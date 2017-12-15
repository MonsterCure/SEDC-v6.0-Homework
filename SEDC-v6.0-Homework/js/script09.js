const priceOfLaptop = 999.99;
const numberOfLaptops1 = 20;
const numberOfLaptops2 = 50;

let priceOf20 = priceOfLaptop * numberOfLaptops1;
let priceOf50 = priceOfLaptop * numberOfLaptops2;

let discountedPrice20 = 0.95 * priceOf20;
let discountedPrice50 = 0.95 * priceOf50;


document.getElementById('result1').innerHTML = Math.ceil(discountedPrice20) + '$';

document.getElementById('result2').innerHTML = Math.ceil(discountedPrice50) + '$';