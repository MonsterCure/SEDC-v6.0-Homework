function maxOfNums(){
    $('#results1').empty();
    var numInput = $('#numInput1').val();
    var max = -Infinity;
    numInput = numInput.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    console.log(numInput);
    for(var i=0; i<numInput.length; i++) {
        if(numInput[i] > max) {
            max = numInput[i];
            $('#results1').text('The largest number is: ' + max);
        }
    }
    console.log(max);
}

$('#sbtbtn1').click(function(e){
    e.preventDefault();
    maxOfNums();
});

$('#numInput1').keydown(function(e){
    if (e.which == 13) {
        $('#sbtbtn1').click();
        return false;
    }
});

function averageMark(){
    $('#results2').empty();
    var numInput = $('#numInput2').val();
    numInput = numInput.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    console.log(numInput);
    var average = (numInput[0] + numInput[1] + numInput[2] + numInput[3]) / 4;
    if(average > 100) {
        $('#results2').text('Please input your marks correctly.');
    } else if(average >= 60) {
        $('#results2').text('You have passed.');        
    } else {
        $('#results2').text('You have failed.');        
    }
}

$('#sbtbtn2').click(function(e){
    e.preventDefault();
    averageMark();
});

$('#numInput2').keydown(function(e){
    if (e.which == 13) {
        $('#sbtbtn2').click();
        return false;
    }
});


/*var numPrompt = prompt('Enter any numbers, separated by commas.');
// var numbers = [465, 3684, 332, 45, 9, 368, 75, 0, 3, 485, 968, 74, 6];
var numbers = numPrompt.split(', ');
var largestNumber = 0;

for(var i=0; i<numbers.length; i++) {
    if(numbers[i] > largestNumber) {
        largestNumber = numbers[i];
        document.getElementById('result').innerHTML = largestNumber;
    }
}*/

