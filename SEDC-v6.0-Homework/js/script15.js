// var numbers = [];
// var total = 0;

// // for loop for creating an array of the numbers from 101 to 150
// for (var i = 101; i <= 150; i++) {
//    numbers.push(i);
// }

// // for loop for iterating the squares of the numbers and calculating their sum
// for(var i = 0; i < numbers.length; i++) {
//     var square = Math.pow(numbers[i],2);
//     total += square;
//     document.getElementById('result').innerHTML = total;
// }


//OR

var total = 0;

for (var i = 101; i <= 150; i++) {
    let square = Math.pow(i,2);
    total += square;
    document.getElementById('result').innerHTML = total;
}