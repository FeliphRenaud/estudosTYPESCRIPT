"use strict";
// 1 Tipo de Objeto para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e o seu preço é R$ ${product.price}`);
    if (product.isAvaliable) {
        console.log(`O produto esta disponivel`);
    }
    else {
        console.log(`Produto esta indisponivel`);
    }
}
const product = {
    name: `Camisa`,
    price: 19.49,
    isAvaliable: true,
};
console.log(product);
showProductDetails(product);
showProductDetails({ name: `Tenis`, price: 159.99, isAvaliable: false });
function showUserDetails(user) {
    console.log(`O usuario tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario ${user.email} é: ${user.role}`);
    }
    else {
        console.log(`O usuario ${user.email} nao possui função administrativa`);
    }
}
const u1 = { email: `user1@email.com`, role: `Admin` };
const u2 = { email: `user2@email.com` };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: `VW`,
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10, //OK
    // x:`teste` DA ERRO
};
coords.y = 15;
console.log(coords);
const normalHuman = {
    name: `matheus`,
    age: 30,
};
console.log(normalHuman);
const superHero = {
    name: `Bruce Wayne`,
    age: 35,
    superPowers: [`Money`],
};
const superHero2 = {
    name: `Goku`,
    age: 50,
    superPowers: [`Kamehameha`, `Genki Dama`],
};
console.log(superHero);
console.log(superHero2);
console.log(superHero2.superPowers[0]);
const arnold = {
    name: `Arnold`,
    type: `ShotGun`,
    caliber: 12,
};
console.log(arnold);
// 7 ReadyOnly Array
//modificações sao permitidas atraves apenas de metodos como o map em arrays
let myArray = [`maça`, `Laranja`, `Banana`];
// myArray[3]=`Mamão` DA ERRO por causa do metodo readOnly
myArray.forEach((item) => {
    console.log(`Fruta : ` + item);
});
myArray = myArray.map((item) => {
    return `fruta ${item} `;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
const anotherUser = [`Feliph`, 28];
console.log(anotherUser);
console.log(anotherUser[1]);
anotherUser[1] = 29;
console.log(anotherUser);
// 8.1 Tuplas com ReadOnly
function ShowNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
ShowNumbers([8, 9]);
