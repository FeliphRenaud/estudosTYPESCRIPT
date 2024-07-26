"use strict";
// type guard
function sum(a, b) {
    if (typeof a === `string` && typeof b === `string`) {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === `number` && typeof b === `number`) {
        console.log(a + b);
    }
    else {
        console.log(`impossivel realizar a operação `);
    }
}
sum(`4`, `59`);
sum(12, 42.3);
sum(`4`, 6);
// checando existencia de valores
function operations(arr, operations) {
    if (operations) {
        if (operations === `sum`) {
            const sum = arr.reduce((i, total) => i + total); // PERCEBA A UTILIZAÇÃO de metodos em arrays
            console.log(sum);
        }
        else if (operations === `multiply`) {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log(`Por favor, defina uma operação `);
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], `sum`);
operations([1, 2, 3], `multiply`);
//instanceOf
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User(`Jhon`);
const paul = new SuperUser(`Paul`);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Ola ${user.name} deseja acessar os dados do sistema ? `);
    }
    else if (user instanceof User) {
        console.log(`Ola ${user.name} seja bem vindo novamente `);
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 operator in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog(`turca`);
const bob = new Dog(`bob`, `Pastor Alemão `);
function showDogDetails(dog) {
    if (dog.breed != undefined) {
        console.log(`O nome do pet é ${dog.name} e sua raça é ${dog.breed}`);
    }
    else {
        console.log(`O nome do seu pet é ${dog.name} mas ele nao possui raça definida `);
    }
}
showDogDetails(turca);
showDogDetails(bob);
