function maxOfThree(a, b, c) {
    var res = 0;
    if (a > b && a > c) {
        res = a;
    } else if (b > a && b > c) {
        res = b;
    } else {
        res = c;
    }
    document.getElementById('result').innerHTML = res;
    return res
}

maxOfThree(10, 500, 32);


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