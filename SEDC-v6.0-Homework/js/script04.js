var total = 0;

for (var i = 101; i <= 150; i++) {
   total += i*i; 
   $('#results1').text(total);
}

function digits(){
    $('#results2').empty();
    var number = $('#numInput2').val();
    var result = [];
    while (number > 0) {
    //     // result[result.length] = Math.floor(number % 10);
    //     // number = number / 10;
    
    //     // result[result.length] = number % 10;
    //     // number = Math.floor(number / 10);
    
        result.push(number % 10);
        number = Math.floor(number/10);
    
    }

    
    //OR
    // var sum1 = 0;
    // for(number; number != 0; number = Math.floor(number/10)) {
        // sum1 += number % 10;       
    // }
    // $('#results2').append('<br>This is the sum of the digits of your integer:' + sum1);    
    

    var sum = 0;
    for(var i = 0; i < result.length; i++) {
        // console.log(result);
        sum += result[i];
        // console.log(sum);
    }


    result = result.reverse().join(', ');
    console.log(result);    
    $('#results2').append('These are the digits of your integer:' + result);
    $('#results2').append('<br>This is the sum of the digits of your integer:' + sum);    
}

$('#sbtbtn2').click(function(e){
    e.preventDefault();
    digits();
});

$('#numInput2').keydown(function(e){
    if (e.which == 13) {
        $('#sbtbtn2').click();
        return false;
    }
});

function binaryDigits(){
    $('#results3').empty();
    var number = $('#numInput3').val();
    var result = [];
    while (number > 0) {    
        result.push(number % 2);
        number = Math.floor(number/2);
    }
    result = result.reverse().join('');
    console.log(result);    
    $('#results3').text('These are the binary digits of your integer:\n' + result);
}

$('#sbtbtn3').click(function(e){
    e.preventDefault();
    binaryDigits();
});

$('#numInput3').keydown(function(e){
    if (e.which == 13) {
        $('#sbtbtn3').click();
        return false;
    }
});