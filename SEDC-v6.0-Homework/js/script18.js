for(var i = 1; i <= 20; i++){
    if(i % 2 == 0) {
        document.getElementById('result').innerHTML += i + '<br>';
    } else {
        document.getElementById('result').innerHTML += i + ' ';
    }
}