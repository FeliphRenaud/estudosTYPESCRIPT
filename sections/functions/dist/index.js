"use strict";
// 1 Void ( retorno para funções que nao retornam nada )
function withoutReturn() {
    console.log(`Esta Função não tem retorno `);
}
withoutReturn();
// callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log(`Preparando a função `);
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, `Feliph`);
// 3 generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4]));
console.log(firstElement([`a`, `b`, `c`, `d`]));
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: `Feliph` }, { Age: 30, job: `Programmer` });
console.log(newObject);
// 4 constraints
//MAIS INDICADO PARA UTILIZAR QUANDO ESTAMOS CRIANDO ALGO
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber(`12`, `5`));
// especificação de argumentos
// MIAS INDICADO PARA UTILIZAR QUANDO ESTAMOS LIDADANDO COM ALGO PRONTO DE TERCEIROS
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [`teste`, `testando`]));
//6 parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Ola ${greet} ${name}, tudo bem?`;
    }
    return `Ola ${name}, tudo bem ? `;
}
console.log(modernGreeting(`Feliph`));
console.log(modernGreeting(`Feliph`, `Mst`));
// 7 PARAMETROS OPCIONAIS
// 7.1 DEFAULT
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 12));
// 7.2 UNKNOWN
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === `number`) {
        console.log(`X é um numero = ${x}`);
    }
}
doSomething(1);
doSomething([1, 2, 3]);
// 7.3 NEVER
// semelhante ao void ele nao retorna nada
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage(`Algum erro`);
//7.4 REST OPERATOR
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 348, 2348));
//console.log(sumAll(`teste`));
//8 Destructuring como parametro
function showProductDetails({ name, price, }) {
    return `O nome do produto é ${name} e ele custa R$ ${price}`;
}
const shirt = { name: `Camisa`, price: 49.99 };
console.log(showProductDetails(shirt));
