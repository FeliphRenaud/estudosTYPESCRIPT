"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// exemplo de decorator
function myDercorator() {
    console.log("Iniciando decorator");
    return function (target, propertKey, descriptor) {
        console.log("executando Decorator ");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("Terminando Excução do metodo");
    }
}
__decorate([
    myDercorator()
], myClass.prototype, "testing", null);
const myObjt = new myClass();
myObjt.testing();
// multiplos decorators
function a() {
    return function (target, propertKey, descriptor) {
        console.log("Executou a ");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("Executou b ");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando a execução");
    }
}
__decorate([
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
const multiplo = new MultipleDecorators();
multiplo.testing();
// decorator de classe
function cassDec(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Criando Usuario");
    }
    else {
        console.log("paralelepipedo");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    cassDec
], User);
const feliph = new User("Feliph");
console.log(feliph);
// decorator de metodod
// modifica a execução do metodo
//deve ser declarado antes da execução do metodo
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `O nome da maquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator);
// acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get ShowNmae() {
        return `O nome do monstro é: ${this.name}`;
    }
    get ShowAge() {
        return `A idade do monstro é: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "ShowNmae", null);
__decorate([
    enumerable(true)
], Monster.prototype, "ShowAge", null);
const monstro = new Monster("Leo Stronda", 32);
console.log(monstro);
// property decorartor
// muito utilizado para validaçoes
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        });
    };
}
class Id {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], Id.prototype, "id", void 0);
const newItem = new Id("1");
console.log(newItem);
console.log(newItem.id);
//class Decorator
function createDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createDate
], Pen);
const book = new Book(12);
const pen = new Pen(13);
console.log(book);
console.log(pen);
console.log(pen.createdAt);
// method Decorator
// verificação nivel de permição
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        console.log(key);
        console.log(target);
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuario Ja Postou ");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alredyPosted = false;
    }
    post(content, alredyPosted) {
        this.alredyPosted = true;
        console.log(`Post do usuario: ${content}`);
        console.log(alredyPosted);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro Post", newPost.alredyPosted);
newPost.post("Meu primeiro Post", newPost.alredyPosted);
newPost.post("Meu segundo Post", newPost.alredyPosted);
// exemplo Property decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue.length > limit) {
                console.log(`O Usuario deve ter no maximo ${limit} digitos `);
            }
            else {
                value = newValue;
                console.log(newValue);
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
class Admin {
    constructor(userName) {
        this.userName = userName;
    }
}
__decorate([
    Max(20)
], Admin.prototype, "userName", void 0);
let pedro = new Admin("Pedro");
let feliph1 = new Admin("FeliphAdmin");
