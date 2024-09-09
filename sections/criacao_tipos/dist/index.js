"use strict";
// 1 Generics
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(5));
console.log(showData(`testando Genercs`));
// 2 Constrains Generics
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const obj1 = { name: `Porta`, cor: `branca`, tamanho: `Grande` };
console.log(obj1);
console.log(showProductName(obj1));
const myCar = { name: `Fusca`, wheels: 4, engine: 1300, color: `Blue` };
const myPen = {
    name: `Caneta Bic`,
    wheels: false,
    engine: false,
    color: `Blue`,
};
console.log(myCar);
console.log(myPen);
// 4 type parameters
// é um recurso de generics utilizxado para dozer que algum parametro de uma função é a chave de um objeto
// que por sua vez TAMBEM é um parametro
// assim criando uma ligação entre tipo generico e sua chave
function getSomeKey(objt, key) {
    return `A chave ${String(key)} está resente no objeto e tem valor de ${objt[key]}`;
}
const server = {
    hd: `2TB`,
    ram: `32GB`,
};
console.log(getSomeKey(server, `ram`));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: `Matheus`,
    age: 30,
    hasDriverLicense: true,
};
console.log(showCharName(myChar, `name`));
