// 1 campos em classe

class User {
  name!: string;
  age!: number;
}

const feliph = new User();

console.log(feliph);

feliph.name = "Feliph Renaud ";
feliph.age = 33;

console.log(feliph);

// 2 constructor

class NewUser {
  name;
  age;
  constructor(name: string, age: number) {
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
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("Fusca");

console.log(fusca);

// Herança e Super

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyer = new KillerMachine("Destroyer", 4);

console.log(destroyer);

// METODOS

class Dwarf {
  name;
  constructor(name: string) {
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
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(
      `Este caminhão é do modelo: ${this.model} e sua potencia é de: ${this.hp}`
    );
  }
}
const volvo = new Truck("Volvo Globe Troter ", 1600);

console.log(volvo);
volvo.showDetails();

// Getters leem as propriedades
class Person {
  name;
  surname;
  constructor(name: string, surname: string) {
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
  y!: number;
  x!: number;

  set fillx(x: number) {
    if (x === 0) {
      return;
    }

    this.x = x;
    console.log("X inserido com sucesso ");
  }

  set filly(y: number) {
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

// implementes

interface showTitle {
  itemTitle(): string;
}

class blogPost implements showTitle {
  title;

  constructor(title: string) {
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
  public x = 10;
}

const Cinstance = new C();

console.log(Cinstance.x);

// protected

class E {
  protected x = 10;

  protected protectedMethod() {
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
  private name = "Privado";

  showName() {
    return this.name;
  }

  private privateMethod() {
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
  static prop = "teste static";

  static StaticMethod() {
    console.log("Este é um metodo statico ");
  }
}

console.log(StaticMembers.prop);

StaticMembers.StaticMethod();

// generic class

class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
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
  constructor(public name: string, private qty: number, private price: number) {
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

const myClass = class<T> {
  name;

  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass("Jones");

console.log(pessoa.name);

// abstract class
// molde de outra classe parecido com interface

abstract class AbstractClass {
  abstract showName(): void;
}

class AbstracExemple extends AbstractClass {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }

  showName() {
    console.log(`O nome é: ${this.name}`);
  }
}
const newAbstractObject = new AbstracExemple("Josias");

newAbstractObject.showName();
