function calculateDiff(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const currElement = arr[i];

        (currElement % 2 == 0) ? evenSum += currElement : oddSum += currElement;
    }

    console.log(evenSum - oddSum);
}

// calculateDiff([2,4,6,8,10]);