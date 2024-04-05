// 01
function solve(a, b, c) {
    function sum() {
        return a + b;
    }

    function subtract() {
        return sum() - c;
    }

    console.log(subtract());
}

// 02
function solve(a, b, c) {
    const sum = (a, b) => a + b;
    const subtract = (a, b) => a - b;

    console.log(subtract(sum(a, b), c));
}

// solve(23, 6, 10);   
// solve(1, 17, 30);