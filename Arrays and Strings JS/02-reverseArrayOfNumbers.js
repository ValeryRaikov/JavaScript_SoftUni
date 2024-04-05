function reverseArray(n, arr) {
    let reversedArr = [];

/*    for (let i = 0; i < n; i++) {
        reversedArr.push(arr[i]);
    }
*/

    reversedArr = arr.slice(0, n);

    reversedArr = reversedArr.reverse();

    let output = reversedArr.join(' ');

    console.log(output);
}

// reverseArray(3, [10, 20, 30, 40, 50]);