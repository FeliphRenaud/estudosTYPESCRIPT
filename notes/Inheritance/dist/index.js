"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get greet() {
        return this.firstName + ` ` + this.lastName;
    }
}
//Cliente do banco
class Clients extends Person {
    get greet() {
        return `Dear ` + super.greet;
    }
}
//Funionario do banco
class Staff extends Person {
    get greet() {
        return `Hi ` + super.greet;
    }
}
let cliente1 = new Clients(`Feliph`, `Renaud `, 28);
let cliente2 = new Clients(`Andre`, `Iacono`, 25);
let staff1 = new Staff(`Anna `, `Silva`, 28);
let staff2 = new Staff(`Diego `, `Froelich`, 30);
console.log(cliente1.greet);
console.log(staff1.greet);
