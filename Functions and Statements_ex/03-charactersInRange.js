// 01
function printCharsInRange(chr1, chr2) {
    let output = '';

    if (chr1.charCodeAt() < chr2.charCodeAt()) {
        for (let i = chr1.charCodeAt() + 1; i < chr2.charCodeAt(); i++) {
            output += String.fromCharCode(i) + ' ';
        }
    } else {
        for (let i = chr2.charCodeAt() + 1; i < chr1.charCodeAt(); i++) {
            output += String.fromCharCode(i) + ' ';
        }
    }

    console.log(output);
}

// 02
function printCharsInRange(chr1, chr2) {
    let output = '';
    
    const startCharCode = Math.min(chr1.charCodeAt(), chr2.charCodeAt());
    const endCharCode = Math.max(chr1.charCodeAt(), chr2.charCodeAt());

    for (let i = startCharCode + 1; i < endCharCode; i++) {
        output += String.fromCharCode(i) + ' ';
    }

    console.log(output);
}


// printCharsInRange('C','#');
// printCharsInRange('#', ':');