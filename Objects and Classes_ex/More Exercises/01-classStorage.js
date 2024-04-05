// 01
class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
        this.storage.push(product);
    }

    getProducts() {
        return this.storage.map(product => JSON.stringify(product)).join('\n');
    }
}

// 02
class Storage {
    #storage = [];
    _capacity;
    _totalCost;

    constructor(capacity) {
        this._capacity = capacity;
        this._totalCost = 0;
    }

    get capacity() {
        return this._capacity;
    }

    set capacity(value) {
        this._capacity = value;
    }

    get totalCost() {
        return this._totalCost;
    }

    set totalCost(value) {
        this._totalCost = value;
    }

    addProduct(product) {
        this.capacity -= product.quantity;
        this.totalCost += product.price * product.quantity;
        this.#storage.push(product);
    }

    getProducts() {
        return this.#storage.map(product => JSON.stringify(product)).join('\n');
    }
}

let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
let productThree = {name: 'Bread', price: 1.10, quantity: 8};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);