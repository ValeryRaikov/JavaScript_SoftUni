// 01
function repeatString(text, times) {
    console.log(text.repeat(times));
}
// repeatString("abc", 3);

// 02
function solve(text, times) {
    function repeatString(text, times) {
        let output = '';

        for (let i = 0; i < times; i++) {
            output += text;
        }

        console.log(output);
    }

    repeatString(text, times);
}

// solve("abc", 3);