function circleArea(radius) {
    if (typeof radius !== 'number') 
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    else {
        let result = Math.PI * (radius ** 2);
        console.log(result.toFixed(2));
    }
}

// circleArea(5);
// circleArea('string');