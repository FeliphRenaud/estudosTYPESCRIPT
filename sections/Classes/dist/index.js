"use strict";
// 1 campos em classe
class User {
}
const feliph = new User();
console.log(feliph);
feliph.name = "Feliph Renaud ";
feliph.age = 33;
console.log(feliph);
// 2 constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 22);
console.log(joao);
const pedro = new NewUser("Pedro", 35);
console.log(pedro);
// Read Only
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
// Herança e Super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(destroyer);
// METODOS
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("hey stranger! ");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy);
console.log(jimmy.name);
jimmy.greeting();
// this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Este caminhão é do modelo: ${this.model} e sua potencia é de: ${this.hp}`);
    }
}
const volvo = new Truck("Volvo Globe Troter ", 1600);
console.log(volvo);
volvo.showDetails();
// Getters leem as propriedades
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + ` ` + this.surname;
    }
}
const user = new Person(`Feliph`, "Renaud ");
console.log(user);
console.log(user.name);
console.log(user.fullName);
// setters modificam as propriedades
class Cords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso ");
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `x:${this.x} e y:${this.y}`;
    }
}
const myCoords = new Cords();
myCoords.fillx = 15;
myCoords.filly = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é ${this.title}`;
    }
}
const myPost = new blogPost(" Hello World");
console.log(myPost.itemTitle());
//overRide de metodos
class base {
    someBase() {
        console.log("ALGUMA COISA ");
    }
}
class Nova extends base {
    someBase() {
        console.log("tentando subcrição de metodos");
    }
}
const myObject = new Nova();
myObject.someBase();
// public
class C {
    constructor() {
        this.x = 10;
    }
}
const Cinstance = new C();
console.log(Cinstance.x);
// protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("este metodo é protegido ");
    }
}
class D extends E {
    showX() {
        console.log("x:" + this.x);
    }
}
class F extends E {
    showProtected() {
        this.protectedMethod();
    }
}
const d = new D();
const f = new F();
d.showX();
f.showProtected();
// private
class privateClass {
    constructor() {
        this.name = "Privado";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Metodo Privado");
    }
    showMethod() {
        this.privateMethod();
    }
}
const pObj = new privateClass();
console.log(pObj.showName());
console.log(pObj.showMethod());
// static members
class StaticMembers {
    static StaticMethod() {
        console.log("Este é um metodo statico ");
    }
}
StaticMembers.prop = "teste static";
console.log(StaticMembers.prop);
StaticMembers.StaticMethod();
// generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `o First é :${this.first}`;
    }
    get showSecond() {
        return ` o second item é : ${this.second}`;
    }
}
const newItem = new Item("Caixa", "Surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item(12, true);
console.log(secondItem);
console.log(secondItem.showFirst);
console.log(typeof secondItem.showFirst);
console.log(secondItem.showSecond);
console.log(typeof secondItem);
console.log(typeof secondItem.showFirst);
//parameters properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showPrice() {
        return `O preço é: ${this.price} `;
    }
    get showQty() {
        return `A quantidade é: ${this.qty}`;
    }
}
const newShirt = new ParameterProperties("camisa", 5, 19.99);
console.log(newShirt.name);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
// class expressionms
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
console.log(pessoa.name);
// abstract class
// molde de outra classe parecido com interface
class AbstractClass {
}
class AbstracExemple extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractObject = new AbstracExemple("Josias");
newAbstractObject.showName();
