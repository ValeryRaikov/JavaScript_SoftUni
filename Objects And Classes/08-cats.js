// 01
function printCat(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = Number(age);
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    input.map(line => line.split(' '))
    .map(([name, age]) => new Cat(name, age))
    .forEach(cat => cat.meow())
}

// 02
/* for (const line of input) {
    const [name, age] = line.split(' ');
    const cat = new Cat(name, age);
    cat.meow();
} */

// printCat(['Candy 1', 'Poppy 3', 'Nyx 2']);