// 01
function validatePoints(points) {
    const x1 = points.shift();
    const y1 = points.shift();
    const x2 = points.shift();
    const y2 = points.shift();

    const validation1 = Math.sqrt(x1 ** 2 + y2 ** 2);
    const validation2 = Math.sqrt(x2 ** 2 + y2 ** 2);
    const validation3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    (validation1 === parseInt(validation1)) ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`) : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    (validation2 === parseInt(validation2)) ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`) : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    (validation3 === parseInt(validation3)) ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

// 02
function validatePoints(points) {
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    const [x1, y1, x2, y2] = points;

    const validation1 = calculateDistance(x1, y1, 0, 0);
    const validation2 = calculateDistance(x2, y2, 0, 0);
    const validation3 = calculateDistance(x1, y1, x2, y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${Number.isInteger(validation1) ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${Number.isInteger(validation2) ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(validation3) ? 'valid' : 'invalid'}`);
}


// validatePoints([3, 0, 0, 4]);
// validatePoints([2, 1, 1, 1]);