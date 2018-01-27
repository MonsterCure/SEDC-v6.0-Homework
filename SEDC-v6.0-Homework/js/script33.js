function foo() {
    let result = document.getElementById('result');
    let puzzleOriginal = document.getElementById('input').value;
    let puzzle = [];
    let sumOne = 0;
    let sumTwo = 0;    

    puzzle = puzzleOriginal.split('').map(number => parseInt(number));

    if (puzzle[0] == puzzle[puzzle.length - 1]) {
        sumOne += puzzle[0];
    }

    sumOne = puzzle.reduce((result, number, index, array) => {
        if (number == array[index + 1]) {
            result += number;
        }
        return result;
    }, sumOne);

    // OR 
    // for (let i = 0; i < puzzle.length; i++) {
    //     if (puzzle[i] == puzzle[i + 1]) {
    //         sum = sum + puzzle[i];
    //     }
    // }

    sumTwo = puzzle.reduce((result, number, index, array) => {
        if (index < array.length / 2 && number == array[index + array.length / 2]) {
            result += number;
        }
        if (index >= array.length / 2 && index < array.length && number == array[index - array.length / 2]) {
            result += number;
        }
        return result;
    }, 0);

    //OR
    // for (var i = 0; i < puzzle.length; i++) {
    //     if (i < puzzle.length / 2 && Number(puzzle[i]) == Number(puzzle[i + puzzle.length / 2])) {
    //         sum = sum + Number(puzzle[i]);
    //     }
    //     if (i >= puzzle.length / 2 && i < puzzle.length && Number(puzzle[i]) == Number(puzzle[i - puzzle.length / 2])) {
    //         sum = sum + Number(puzzle[i]);
    //     }
    // }

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