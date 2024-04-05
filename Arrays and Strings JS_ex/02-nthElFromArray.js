// 01
function printNthEl(arr, step) {
    let nthElArr = [];

    for (let i = 0; i < arr.length; i+= step) {
        nthElArr.push(arr[i]);
    }

    return nthElArr;
}

// 02
function printNthEl(arr, step) {
    let nthElArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % step == 0) {
            nthElArr.push(arr[i]);
        }
    }

    return nthElArr;
}

// printNthEl(['5', '20', '31', '4', '20'], 2);
// printNthEl(['dsa','asd', 'test', 'tset'], 2);