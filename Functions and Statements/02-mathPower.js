// 01
function raiseToPower(number, power) {
    console.log(number ** power);
}
// raiseToPower(2,8);

// 02
function solve(number, power) {
    function raiseToPower() {
        console.log(Math.pow(number, power));
    }
    
    raiseToPower();
}
// solve(2, 8);

// 03
function solve(number, power) {
    function raiseToPower() {
        let result = 1;

        for (let i = 0; i < power; i++) {
            result *= number;
        }

        console.log(result);
    }

    raiseToPower();
}
// solve(2, 8);

// 04 (not for judge)
const mathPower = (number, power) => number ** power;
//console.log(mathPower(2, 8));