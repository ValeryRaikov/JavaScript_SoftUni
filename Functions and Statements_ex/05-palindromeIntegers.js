// 01
function checkForPalindromes(numbers) {
    for (let num of numbers) {
        let originalNum = num;
        let reversedNum = '';
        
        while (num > 0) {
            reversedNum += String(num % 10);
            num = parseInt(num / 10);
        }
        
        console.log(originalNum === parseInt(reversedNum));
    }
}

// 02
function checkForPalindromes(numbers) {
    for (let num of numbers) {
        const regularNum = String(num);
        const reversedNum = String(num).split('').reverse().join('');

        console.log(regularNum === reversedNum);
    }
}

// 03
function checkForPalindromes(numbers) {
    function isPalindrome(num) {
        const strNum = String(num);
        const reversedStr = strNum.split('').reverse().join('');

        return strNum === reversedStr;
    }

    const palindromes = numbers.map(num => isPalindrome(num));

    palindromes.forEach(bool => {
        console.log(bool);
    });
}

// checkForPalindromes([123,323,421,121]);
// checkForPalindromes([32,2,232,1010]);