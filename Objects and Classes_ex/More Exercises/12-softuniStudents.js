// 01
function storeStudents(input) {
    const courses = {};

    for (const row of input) {
        if (row.includes(':')) {
            const [courseName, capacity] = row.split(': ');
            courses[courseName] = { capacity: Number(capacity), students: [] };
        } else {
            const [studentInfo, courseName] = row.split(' joins ');
            const [username, credits] = studentInfo.split(/\[(\d+)\] with email /);
            const email = studentInfo.split(' with email ')[1];
            if (courses[courseName] && courses[courseName].students.length < courses[courseName].capacity) {
                courses[courseName].students.push({ username, email, credits: Number(credits) });
            }
        }
    }

    const sortedCourses = Object.entries(courses)
        .sort((a, b) => b[1].students.length - a[1].students.length);

    for (const [courseName, { capacity, students }] of sortedCourses) {
        const placesLeft = capacity - students.length;
        console.log(`${courseName}: ${placesLeft} places left`);
        students.sort((a, b) => b.credits - a.credits)
            .forEach(({ username, email, credits }) => console.log(`--- ${credits}: ${username}, ${email}`));
    }
}

// storeStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);