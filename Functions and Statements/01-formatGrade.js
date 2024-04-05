// 01 (for judge)
function solve(grade) {
    function formatGrade() {
        if (grade < 3) 
            console.log(`Fail (2)`);
        else if (grade < 3.5)
            console.log(`Poor (${grade.toFixed(2)})`);
        else if (grade < 4.5)
            console.log(`Good (${grade.toFixed(2)})`);
        else if (grade < 5.5)
            console.log(`Very good (${grade.toFixed(2)})`);
        else
            console.log(`Excellent (${grade.toFixed(2)})`);
    }

    formatGrade(grade)
}

// solve(2.99);
// solve(3.33); 


// 02 
const formatGrade = function(grade) {
    if (grade < 3) 
        console.log(`Fail (2)`);
    else if (grade < 3.5)
        console.log(`Poor (${grade.toFixed(2)})`);
    else if (grade < 4.5)
        console.log(`Good (${grade.toFixed(2)})`);
    else if (grade < 5.5)
        console.log(`Very good (${grade.toFixed(2)})`);
    else
        console.log(`Excellent (${grade.toFixed(2)})`);
}

// formatGrade(3.33)