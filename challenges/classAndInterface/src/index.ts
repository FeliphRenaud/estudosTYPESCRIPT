/*
neste caso eu devo adaptar o codigo para que a class 
recrute de uma interface os dados do meu user


class Person {
  constructor(public name: string, public age: number) {
    
  }
}

const jane = new Person(`jane`, 31);

console.log(`${jane.name} is ${jane.age} years old.`);
*/

interface Person {
  name: string;
  age: number;
}

class Person implements Person {
  constructor(public name: string, public age: number) {}
}

const jane = new Person(`jane`, 31);
const felp = new Person(`Feliph`, 28);

console.log(`${jane.name} is ${jane.age} years old.`);
console.log(`${felp.name} is ${felp.age} years old.`);
