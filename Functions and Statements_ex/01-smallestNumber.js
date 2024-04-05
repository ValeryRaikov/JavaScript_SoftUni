// 01
function printSmallestNumber(a, b, c) {
    console.log(Math.min(a, b, c));
}

// 01.1
const printSmallestNumber = function(a, b, c) {
    console.log(Math.min(a, b, c));
}

// 02
function printSmallestNumber(a, b, c) {
    if (a < b) {
        if (a < c) {
            return console.log(a);
        }
        return console.log(c);
    } else {
        if (b < c) {
            return console.log(b);
        }
        return console.log(c);
    }
}

// printSmallestNumber(600, 342, 123);