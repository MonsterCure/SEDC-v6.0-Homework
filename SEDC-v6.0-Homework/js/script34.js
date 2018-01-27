function foo() {
    let result = document.getElementById('result');
    let puzzleOriginal = document.getElementById('input').value;
    let puzzle = [];
    let sumOne = 0;
    let sumTwo = 0;    

    puzzle = puzzleOriginal.split('\n').map((rows) => {
        return rows.split('\t').map(Number);
    });

    sumOne = puzzle.map((rows) => {
        return Math.max(...rows) - Math.min(...rows);
    }).reduce((result, number) => {
        return result + number;
    }, 0);

    sumTwo = puzzle.map((rows) => {
        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < rows.length; j++) {
                if (rows[i] % rows[j] == 0 && rows[i] !== rows[j]) {
                    return rows[i] / rows[j];
                }
            }
        }
    }).reduce((result, number) => {
        return result + number;
    });

    result.innerHTML = `Part one: ${sumOne}<br>Part two: ${sumTwo}`;

}

document.getElementById('sbtbtn').addEventListener('click', function (e) {
    foo();
});

document.getElementById('sbtbtn').addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        foo();
    }
}, false);