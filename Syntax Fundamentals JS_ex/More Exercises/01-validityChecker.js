function validityChecker(x1, y1, x2, y2) {
    let initX = 0;
    let initY = 0;

    let result1 = Math.sqrt(Math.pow((x1), 2) + Math.pow((y1), 2));
    let result2 = Math.sqrt(Math.pow((x2), 2) + Math.pow((y2), 2));
    let result3 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    if (Number.isInteger(result1))
        console.log(`{${x1}, ${y1}} to {${initX}, ${initY}} is valid`);
    else 
        console.log(`{${x1}, ${y1}} to {${initX}, ${initY}} is invalid`);

    if (Number.isInteger(result2))
        console.log(`{${x2}, ${y2}} to {${initX}, ${initY}} is valid`);
    else 
        console.log(`{${x2}, ${y2}} to {${initX}, ${initY}} is invalid`);

    if (Number.isInteger(result3))
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    else 
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

// validityChecker(3, 0, 0, 4);
// validityChecker(2, 1, 1, 1);