function equality(){
    $('#results1').empty();
    var numInput = $('#numInput1').val();
    numInput = numInput.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    console.log(numInput);
    if(numInput.length != 2) {
        $('#results1').text('Please input two numbers.');
    } else if(numInput[0] == numInput[1]) {
        $('#results1').text('The numbers are equal.');        
    } else {
        $('#results1').text('The numbers aren\'t equal.');        
    }
}

$('#sbtbtn1').click(function(e){
    e.preventDefault();
    equality();
});

$('#numInput1').keydown(function(e){
    if (e.which == 13) {
        $('#sbtbtn1').click();
        return false;
    }
});

function oddEven(){
    $('#results2').empty();
    var numInput = $('#numInput2').val();
    console.log(numInput);
    if(numInput % 2 == 0) {
        $('#results2').text('The number is even.');
    } else {
        $('#results2').text('The number is odd.');        
    }
}

$('#sbtbtn2').click(function(e){
    e.preventDefault();
    oddEven();
});

$('#numInput2').keydown(function(e){
    if (e.which == 13) {
        $('#sbtbtn2').click();
        return false;
    }
});

function posNeg(){
    $('#results3').empty();
    var numInput = $('#numInput3').val();
    console.log(numInput);
    if(numInput > 0) {
        $('#results3').text('The number is positive.');
    } else if(numInput < 0) {
        $('#results3').text('The number is negative.');
    } else {
        $('#results3').text('The number is zero.');        
    }
}

$('#sbtbtn3').click(function(e){
    e.preventDefault();
    posNeg();
});

$('#numInput3').keydown(function(e){
    if (e.which == 13) {
        $('#sbtbtn3').click();
        return false;
    }
});

function leapYear(){
    $('#results4').empty();
    var year = $('#numInput4').val();
    console.log(year);
    if(year % 4 == 0) {
        if(year % 100 == 0) {
            if(year % 400 == 0) {
                $('#results4').text('The year is a leap year.');
            } else {
                $('#results4').text('The year is not a leap year.');
            }
        } else {
            $('#results4').text('The year is a leap year.');        
        }
    } else {
        $('#results4').text('The year is not a leap year.');
    }
}

$('#sbtbtn4').click(function(e){
    e.preventDefault();
    leapYear();
});

$('#numInput4').keydown(function(e){
    if (e.which == 13) {
        $('#sbtbtn4').click();
        return false;
    }
});

function canVote(){
    $('#results5').empty();
    var age = $('#numInput5').val();
    console.log(age);
    if(age > 140) {
        $('#results5').text('You can\'t be Methuselah.');        
    } else if(age >= 21) {
        $('#results5').text('You can vote.');        
    } else if(age < 1) {
        $('#results5').text('Please input your age correctly.');    
    } else {
        $('#results5').text('You can\'t vote.');                
    }
}

$('#sbtbtn5').click(function(e){
    e.preventDefault();
    canVote();
});

$('#numInput5').keydown(function(e){
    if (e.which == 13) {
        $('#sbtbtn5').click();
        return false;
    }
});