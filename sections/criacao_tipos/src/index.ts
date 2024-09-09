// 1 Generics

function showData<T>(arg: T): string {
  return `O dado é ${arg}`;
}
console.log(showData(5));
console.log(showData(`testando Genercs`));

// 2 Constrains Generics

function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é ${obj.name}`;
}

const obj1 = { name: `Porta`, cor: `branca`, tamanho: `Grande` };

console.log(obj1);
console.log(showProductName(obj1));

//3 Generics com Interface

interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<Number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: `Fusca`, wheels: 4, engine: 1300, color: `Blue` };
const myPen: Pen = {
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

function getSomeKey<T, K extends keyof T>(objt: T, key: K) {
  return `A chave ${String(key)} está resente no objeto e tem valor de ${
    objt[key]
  }`;
}

const server = {
  hd: `2TB`,
  ram: `32GB`,
};

console.log(getSomeKey(server, `ram`));

// 5 kEYOF TYPE OPERATOR

type Character = { name: string; age: number; hasDriverLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, name: C): string {
  return `${obj[name]}`;
}

const myChar: Character = {
  name: `Matheus`,
  age: 30,
  hasDriverLicense: true,
};

console.log(showCharName(myChar, `name`));
