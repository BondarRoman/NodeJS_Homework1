
import { sum, PI, Complex } from "./math.mjs";

console.log('Сума чисел 5 та 3:', sum(5, 3));

console.log('Число PI:', PI);

const complexNumber = new Complex(2, 4);
console.log('Комплексне число:');
complexNumber.display();

// ЗАПУСКАТИ В КОНСОЛІ npm start