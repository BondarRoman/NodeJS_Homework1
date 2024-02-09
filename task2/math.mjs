
export function sum(a, b) {
    return a + b;
}

export const PI = 3.14;

export class Complex {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    display() {
        console.log(`${this.a} + ${this.b}i`);
    }
}

// ЗАПУСКАТИ В КОНСОЛІ npm start
