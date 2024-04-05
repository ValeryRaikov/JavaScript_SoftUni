// 01
function sortElements(arr) {
    let resultArr = []; 

    while (arr.length > 0) {
        const minValue = Math.min(...arr);
        const maxValue = Math.max(...arr);

        resultArr.push(minValue, maxValue);

        arr.splice(arr.indexOf(minValue), 1);
        arr.splice(arr.indexOf(maxValue), 1);
    }

    return resultArr;
}

// 02
function sortElements(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let resultArr = [];

    while (sortedArr.length > 0) {
        resultArr.push(sortedArr.shift(), sortedArr.pop());
    }

    return resultArr;
}

// sortElements([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);