function ChineseZodiac() {
    let year = Number(document.getElementById('numInput1').value);
    let result = document.getElementById("result");
    let res = (year - 4) % 12;
    if (Number(year)) {
        switch (res) {
            case 0:
                result.innerHTML = 'Rat';
                break;
            case 1:
                result.innerHTML = 'Ox';
                break;
            case 2:
                result.innerHTML = 'Tiger';
                break;
            case 3:
                result.innerHTML = 'Rabbit';
                break;
            case 4:
                result.innerHTML = 'Dragon';
                break;
            case 5:
                result.innerHTML = 'Snake';
                break;
            case 6:
                result.innerHTML = 'Horse';
                break;
            case 7:
                result.innerHTML = 'Goat';
                break;
            case 8:
                result.innerHTML = 'Monkey';
                break;
            case 9:
                result.innerHTML = 'Rooster';
                break;
            case 10:
                result.innerHTML = 'Dog';
                break;
            case 11:
                result.innerHTML = 'Pig';
                break;
            default:
                result.innerHTML = 'Invalid input';
        }
    }
}

$('#sbtbtn1').click(function (e) {
    e.preventDefault();
    ChineseZodiac();
});

$('#numInput1').keydown(function (e) {
    if (e.which == 13) {
        $('#sbtbtn1').click();
        return false;
    }
});