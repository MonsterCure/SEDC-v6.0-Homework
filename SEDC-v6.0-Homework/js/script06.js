function classMarks(){
    $('#results1').empty();
    var numInput = $('#numInput1').val();
    var max = -Infinity;
    var min = +Infinity;   
    var sum = 0;
    var average = 0; 
    numInput = numInput.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    console.log(numInput);
    for(var i=0; i<numInput.length; i++) {
        if(numInput[i] > max) {
            max = numInput[i];
        }
        if(numInput[i] < min) {
            min = numInput[i];
        }
        sum +=numInput[i];     
    }
    $('#results1').append('The highest mark is: ' + max + '<br>');
    $('#results1').append('The lowest mark is: ' + min + '<br>');
    average = sum / numInput.length;
    $('#results1').append('The average mark is: ' + average);   
}

$('#sbtbtn1').click(function(e){
    e.preventDefault();
    classMarks();
});

$('#numInput1').keydown(function(e){
    if (e.which == 13) {
        $('#sbtbtn1').click();
        return false;
    }
});

function numOfCoins(){
    $('#results4').empty();
    $('#results4').empty();
    var money = $('#numInput2').val();
    var coinsNum = 0;
    var remainingSum = 0;
    
    var coins = [100, 50, 20, 10, 5, 1];
    
    for(var i = 0; i < coins.length; i++){
        remainingSum = money % coins[i];
        coinsNum += Math.floor(money / coins[i]);
        $('#results4').append(Math.floor(money / coins[i]) + ' ' + coins[i] + ' cent/s coin/s.<br>');
        money = remainingSum;
    }
    $('#results4').append('Total number of coins: ' + coinsNum);
}

$('#sbtbtn2').click(function(e){
    e.preventDefault();
    numOfCoins();
});

$('#numInput2').keydown(function(e){
    if (e.which == 13) {
        $('#sbtbtn2').click();
        return false;
    }
});