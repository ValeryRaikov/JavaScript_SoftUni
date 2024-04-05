// 01
/* class Vehicle {
    #parts = {};

    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
    }

    get parts() {
        return this.#parts;
    }

    set parts(value) {
        this.#parts = {
            engine: value.engine,
            power: value.power,
            quality: value.engine * value.power,
        }
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
} */

// 02
class Vehicle {
    #parts = {};

    constructor(type, model, parts, fuel) {
        this._type = type;
        this._model = model;
        this.parts = parts;
        this._fuel = fuel;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    get parts() {
        return this.#parts;
    }

    set parts(value) {
        this.#parts = {
            engine: value.engine,
            power: value.power,
            quality: value.engine * value.power,
        };
    }

    get fuel() {
        return this._fuel;
    }

    set fuel(value) {
        this._fuel = value;
    }

    drive(fuelLoss) {
        this._fuel -= fuelLoss;
    }
}

// Bonus
class Car extends Vehicle {
    constructor(type, model, parts, fuel) {
        super(type, model, parts, fuel)
    }

    printCar() {
        console.log(`Car ->\nType: ${this._type}\nModel: ${this._model}\nParts: ${this.parts}\nFuel: ${this._fuel}`);
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

// Bonus
let car = new Car('c', 'd', parts, 150);
car.printCar();