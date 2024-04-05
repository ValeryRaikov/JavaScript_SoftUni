// 01
function factorialDivision(num1, num2) {
    function factorial(num) {
        let result = 1;

        for (let i = 1; i <= num; i++) {
            result *= i;
        }

        return result;
    }

    const factNum1 = factorial(num1);
    const factNum2 = factorial(num2);

    console.log((factNum1 / factNum2).toFixed(2));
}

// 02
function factorialDivision(num1, num2) {
    function factorial(num) {
        if (num <= 1)
            return 1;

        return num * factorial(num - 1);
    }

    console.log((factorial(num1) / factorial(num2)).toFixed(2));
}

// 03 Recursion with memoization!
function factorialDivision(num1, num2) {
    const memo = {}; 

    function factorial(num) {
        if (num <= 1)
            return 1;

        if (memo[num])
            return memo[num];

        memo[num] = num * factorial(num - 1);

        return memo[num];
    }

    console.log((factorial(num1) / factorial(num2)).toFixed(2));
}


// factorialDivision(5, 2);
// factorialDivision(6, 2);