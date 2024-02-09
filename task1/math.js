
function sum(a, b) {
    return a + b;
}

const PI = 3.14;

class Complex {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    display() {
        console.log(`${this.a} + ${this.b}i`);
    }
}

module.exports = {
    sum,
    PI,
    Complex
};
