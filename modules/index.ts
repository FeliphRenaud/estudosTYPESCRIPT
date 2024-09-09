import importGreet from "./greet.js";

importGreet();

// import de variavel

import { x } from "./variable.js";
console.log(x);

// multiplas importações

import { a, b, myFunction } from "./multiple.js";

console.log(a);
console.log(b);
myFunction();

// alias

import { someName as name } from "./changeName.js";
console.log(name);

//import all
import * as mynumbers from "./number.js";
console.log(mynumbers);
const nx = mynumbers.n1;
console.log(nx);

mynumbers.showNumber();

// importando tipos

import { Human } from "./mytipe.js";

class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new User("João", 25);
console.log(joao);
