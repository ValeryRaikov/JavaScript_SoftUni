// Create an object
let person = {
    name: 'Valery',
    age: 20,
    gender: 'male',
};

console.log(person);

// Create second object and data dinamically
let secondPerson = {};

secondPerson.name = 'Ivan';
secondPerson.lastName = 'Petkov';
secondPerson.jobTitle = 'Fleet manager';

console.log(secondPerson);

// Get values (dot syntax)
console.log(person.name);
console.log(person.age);

// Get values (brackets syntax)
console.log(person['name']);
const gender = person['gender'];
console.log(gender);

// Object methods
let animal = {
    type: 'dog',
    breed: 'Dobermann',
    name: 'Herman',
    owner: {
        'Full name': 'Ivaylo Milenov',
        address: 'Sofia, zh.k. Mladost 3, bl. 350A',
        phone: '+359887123998',
    },

    makeNoise: function() {
        console.log(`${this.name} says bow bow...`);
    },

    makeNoise2() {
        console.log('The dog says bow bow');
    },
}

animal.makeNoise();
animal.makeNoise2();

// Arrow assignment
person.sayHello = () => console.log(`Hello!`);
person.sayHello();

// Built-in methods
console.log(Object.keys(person));
console.log(Object.values(secondPerson));

const animalDataInfo = Object.entries(animal).flat(1);
console.log(animalDataInfo);

console.log(
    Object.entries(secondPerson).forEach(([k, v]) => console.log(`${k} ->>> ${v}`))
);

// Convert object to JSON
let vehicle = {
    brand: 'Audi',
    model: 'RS6',
    year: 2023,
    price: 100000,
    engine: {
        fuelType: 'petrol',
        fuelConsumption: 13.4,
        dimensions: 4200,
        horsepower: 540,
    },
};

let JSONdata = JSON.stringify(vehicle);
console.log(JSONdata);

let vehicleData = JSON.parse(JSONdata);
console.log(vehicleData);

// Associative arrays
let phoneBook = {
    'Maria Mitkova': '+359889123654',
    'Ilyana Madzharova': '+359878769411',
    'Petar Peshev': '+359879123650'
};

phoneBook['Mihail Ivanov'] = '+359871123778';

console.log(phoneBook);

// Display using for-in loop
for (let name in phoneBook) {
    console.log(`${name} ->>> ${phoneBook[name]}`);
}

if (phoneBook.hasOwnProperty('Mihail Ivanov')) {
    console.log('Phone:', phoneBook['Mihail Ivanov']);
}

delete phoneBook['Mihail Ivanov'];

// Sort phoneBook object alphabetically
let sortedPhoneBook = Object.entries(phoneBook).sort((a, b) => a[0].localeCompare(b[0]));

// Sort method 2 (performed on the values)
let sortedPhoneBook2 = Object.entries(phoneBook).sort(
    ([keyA, valueA], [keyB, valueB]) => valueA.localeCompare(valueB)
);

let sortedPhoneBookObject = sortedPhoneBook.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
}, {});

console.log(sortedPhoneBookObject);

// Classes
class Person {
    constructor(firstName, lastName, age, gender, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.jobTitle = jobTitle;
    }
}

const person1 = new Person('Kaloyan', 'Blagoev', 19, 'male', 'Call service');
const person2 = new Person('Viktoria', 'Koleva', 37, 'female', 'Surgeon');
const person3 = new Person('Vasil', 'Raikov', 25, 'male', 'QA');

const people = [person1, person2, person3];
people.forEach(p => console.log(`${p.firstName} ${p.lastName} is a ${p.jobTitle}`));