"use strict";
function userInput(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
}
const combinePrices = userInput(10, 20);
const combineName = userInput('Diogo', 'Vilela');
console.log(combinePrices);
console.log(combineName);
/* Literal */
/*Setado por variavel e por tipo */
let productPrice;
let productSize;
productPrice = 10;
productSize = 'M';
console.log(productPrice);
console.log(productSize);
productPrice = 20;
console.log(productPrice);
const employee1 = {
    firstName: 'Feliph',
    age: 28,
    id: 221,
    role: 'admin'
};
console.log(employee1);
