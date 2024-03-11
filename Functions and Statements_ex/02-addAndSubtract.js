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

// solve(23, 6, 10);   
// solve(1, 17, 30);