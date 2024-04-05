// 01
function printLoadingBar(percentage) {
    const sections = percentage / 10;

    let loadBar = '%'.repeat(sections) + '.'.repeat(10 - sections);
    
    if (percentage !== 100)
        console.log(`${percentage}% [${loadBar}]\nStill loading...`);
    else 
        console.log(`${percentage}% Complete!\n[${loadBar}]`);
}

// 02
function printLoadingBar(percentage) {
    const sections = percentage / 10;
    
    let loadBar = '';

    for (let i = 0; i < 10; i++) {
        if (i < sections) {
            loadBar += '%';
        } else {
            loadBar += '.';
        }
    }

    if (percentage !== 100) {
        console.log(`${percentage}% [${loadBar}]\nStill loading...`);
    } else {
        console.log(`${percentage}% Complete!\n[${loadBar}]`);
    }
}

// printLoadingBar(30);
// printLoadingBar(100);