function findLargest(num1, num2, num3) {
    /*
    if (num1 > num2) {
        if (num1 > num3) {
            console.log(`The largest number is ${num1}.`);
        } else {
            console.log(`The largest number is ${num3}.`)
        }
    } else {
        if (num2 > num3) {
            console.log(`The largest number is ${num2}.`);
        } else {
            console.log(`The largest number is ${num3}.`);
        }
    }
    */

    console.log(`The largest number is ${Math.max(num1, num2, num3)}.`);
}

findLargest(6, 5, 7);