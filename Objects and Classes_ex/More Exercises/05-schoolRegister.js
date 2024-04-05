// 01
function processStudents(students) {
    const grades = {};

    students.forEach(student => {
        const [, name, grade, score] = student.match(/Student name: (\w+), Grade: (\d+), Graduated with an average score: (\d+\.\d+)/);
        const parsedScore = parseFloat(score);

        if (parsedScore >= 3) {
            if (!grades[grade]) grades[grade] = [];
            grades[grade].push({ name, score: parsedScore });
        }
    });

    const register = [];

    for (const grade in grades) {
        const students = grades[grade];
        const totalScore = students.reduce((sum, student) => sum + student.score, 0);
        const averageScore = totalScore / students.length;

        register.push({ grade, students, averageScore });
    }

    register.sort((a, b) => a.grade - b.grade);

    register.forEach(({ grade, students, averageScore }) => {
        console.log(`${Number(grade) + 1} Grade`);
        console.log(`List of students: ${students.map(student => student.name).join(', ')}`);
        console.log(`Average annual score from last year: ${averageScore.toFixed(2)}\n`);
    });
}

// 02
function processStudents(students) {
    const grades = students.reduce((acc, student) => {
        const [, name, grade, score] = student.match(/Student name: (\w+), Grade: (\d+), Graduated with an average score: (\d+\.\d+)/);
        const parsedScore = parseFloat(score);

        if (parsedScore >= 3) {
            if (!acc[grade]) acc[grade] = [];
            acc[grade].push({ name, score: parsedScore });
        }

        return acc;
    }, {});

    const register = Object.entries(grades)
        .map(([grade, students]) => {
            const totalScore = students.reduce((sum, student) => sum + student.score, 0);
            const averageScore = totalScore / students.length;
            return { grade, students, averageScore };
        })
        .sort((a, b) => a.grade - b.grade);

    register.forEach(({ grade, students, averageScore }) => {
        console.log(`${Number(grade) + 1} Grade`);
        console.log(`List of students: ${students.map(student => student.name).join(', ')}`);
        console.log(`Average annual score from last year: ${averageScore.toFixed(2)}\n`);
    });
}

/* processStudents([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]); */