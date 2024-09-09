// exemplo de decorator
function myDercorator() {
  console.log("Iniciando decorator");
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executando Decorator ");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

class myClass {
  @myDercorator()
  testing() {
    console.log("Terminando Excução do metodo");
  }
}

const myObjt = new myClass();

myObjt.testing();

// multiplos decorators

function a() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou a ");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

function b() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou b ");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

class MultipleDecorators {
  @a()
  @b()
  testing() {
    console.log("Terminando a execução");
  }
}

const multiplo = new MultipleDecorators();

multiplo.testing();

// decorator de classe
function cassDec(constructor: Function) {
  console.log(constructor);
  if (constructor.name === "User") {
    console.log("Criando Usuario");
  } else {
    console.log("paralelepipedo");
  }
}
@cassDec
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const feliph = new User("Feliph");

console.log(feliph);

// decorator de metodod
// modifica a execução do metodo
//deve ser declarado antes da execução do metodo

function enumerable(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

class Machine {
  name;
  constructor(name: string) {
    this.name = name;
  }
  @enumerable(false)
  showName() {
    return `O nome da maquina é: ${this.name}`;
  }
}

const trator = new Machine("Trator");
console.log(trator);

// acessor decorator

class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  @enumerable(true)
  get ShowNmae() {
    return `O nome do monstro é: ${this.name}`;
  }
  @enumerable(true)
  get ShowAge() {
    return `A idade do monstro é: ${this.age}`;
  }
}

const monstro = new Monster("Leo Stronda", 32);

console.log(monstro);

// property decorartor
// muito utilizado para validaçoes

function formatNumber() {
  return function (target: object, propertKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newValue: string) {
      value = newValue.padStart(5, "0");
    };
    Object.defineProperty(target, propertKey, {
      set: setter,
      get: getter,
    });
  };
}

class Id {
  @formatNumber()
  id;

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new Id("1");
console.log(newItem);
console.log(newItem.id);

//class Decorator
function createDate(created: Function) {
  created.prototype.createdAt = new Date();
}
@createDate
class Book {
  id;
  createdAt?: Date;
  constructor(id: number) {
    this.id = id;
  }
}
@createDate
class Pen {
  createdAt?: Date;
  id;
  constructor(id: number) {
    this.id = id;
  }
}

const book = new Book(12);
const pen = new Pen(13);

console.log(book);
console.log(pen);
console.log(pen.createdAt);

// method Decorator
// verificação nivel de permição

function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    console.log(key);
    console.log(target);

    const childFunction = descriptor.value;
    console.log(childFunction);
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("Usuario Ja Postou ");
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };
    return descriptor;
  };
}

class Post {
  alredyPosted = false;

  @checkIfUserPosted()
  post(content: string, alredyPosted: boolean) {
    this.alredyPosted = true;
    console.log(`Post do usuario: ${content}`);
    console.log(alredyPosted);
  }
}

const newPost = new Post();

newPost.post("Meu primeiro Post", newPost.alredyPosted);
newPost.post("Meu primeiro Post", newPost.alredyPosted);
newPost.post("Meu segundo Post", newPost.alredyPosted);

// exemplo Property decorator

function Max(limit: number) {
  return function (target: object, propertyKey: string) {
    let value: string;
    const getter = function () {
      return value;
    };
    const setter = function (newValue: string) {
      if (newValue.length > limit) {
        console.log(`O Usuario deve ter no maximo ${limit} digitos `);
      } else {
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
  @Max(20)
  userName;

  constructor(userName: string) {
    this.userName = userName;
  }
}

let pedro = new Admin("Pedro");
let feliph1 = new Admin("FeliphAdmin");
