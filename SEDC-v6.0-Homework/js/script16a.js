function integersOfNum() {
    let number = $('#numInput1').val();
    let result = [];

    while (number > 0) {
        result.push(number % 10);
        number = Math.floor(number / 10);
    }

    document.getElementById('result').innerHTML = result.reverse().join(', ');
}



$('#sbtbtn1').click(function (e) {
    e.preventDefault();
    integersOfNum();
});

$('#numInput1').keydown(function (e) {
    if (e.which == 13) {
        $('#sbtbtn1').click();
        return false;
    }
});