// 01
class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.isOn = false;
        this.quality = quality;
    }

    turnOn() {
        this.isOn = true;
        this.quality -= 1;
    }

    turnOff() {
        this.isOn = false;
        this.quality -= 1;
    }

    showInfo() {
        const { producer, age, brand } = this.info;
        return JSON.stringify({ producer, age, brand });
    }

    get price() {
        const { age } = this.info;
        return 800 - (age * 2) + (this.quality * 0.5);
    }
}

// 02
class Laptop {
    constructor(info, quality) {
        this._info = info;
        this._isOn = false;
        this._quality = quality;
    }

    get info() {
        return this._info;
    }

    set info(value) {
        this._info = value;
    }

    get isOn() {
        return this._isOn;
    }

    set isOn(value) {
        this._isOn = value;
        this._quality -= 1;
    }

    get quality() {
        return this._quality;
    }

    set quality(value) {
        this._quality = value;
    }

    get price() {
        const { age } = this.info;
        return 800 - (age * 2) + (this.quality * 0.5);
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }

    showInfo() {
        const { producer, age, brand } = this.info;
        return JSON.stringify({ producer, age, brand });
    }
}


/* let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price) */

/* let info = {producer: "Lenovo", age: 1, brand: "Legion"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
laptop.turnOn()
laptop.turnOff()
console.log(laptop.isOn) */