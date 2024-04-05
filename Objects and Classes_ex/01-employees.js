// 01
function printEmployees(employeeNames) {
    let employees = {};

    for (const name of employeeNames) {
        employees[name] = name.length;
    }

    for (const empName in employees) {
        console.log(`Name: ${empName} -- Personal Number: ${employees[empName]}`);
    }
}

// 02
function printEmployees(employeeNames) {
    let employees = [];

    for (const empName of employeeNames) {
        const employee = {
            name: empName,
            personalNumber: empName.length,
        };

        employees.push(employee);
    }

    for (const employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}

// 03
function printEmployees(employeeNames) {
    employeeNames
        .map(name => ({name, personalNumber: name.length}))
        .forEach(employee => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`));
}

// 04 (Without using objects)
function printEmployees(employeeNames) {
    for (const empName of employeeNames) {
        console.log(`Name: ${empName} -- Personal Number: ${empName.length}`);
    }
}

/* printEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]); */