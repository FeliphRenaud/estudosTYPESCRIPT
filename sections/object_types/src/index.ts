// 1 Tipo de Objeto para função com interface

interface Products {
  name: string;
  price: number;
  isAvaliable: boolean;
}

function showProductDetails(product: Products) {
  console.log(
    `O nome do produto é ${product.name} e o seu preço é R$ ${product.price}`
  );

  if (product.isAvaliable) {
    console.log(`O produto esta disponivel`);
  } else {
    console.log(`Produto esta indisponivel`);
  }
}

const product: Products = {
  name: `Camisa`,
  price: 19.49,
  isAvaliable: true,
};

console.log(product);
showProductDetails(product);
showProductDetails({ name: `Tenis`, price: 159.99, isAvaliable: false });

// 2 Interface com parametro Opcional

interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuario tem o e-mail: ${user.email}`);
  if (user.role) {
    console.log(`A função do usuario ${user.email} é: ${user.role}`);
  } else {
    console.log(`O usuario ${user.email} nao possui função administrativa`);
  }
}

const u1: User = { email: `user1@email.com`, role: `Admin` };
const u2: User = { email: `user2@email.com` };

showUserDetails(u1);
showUserDetails(u2);

// 3 Propriedade ReadOnly

// podem ser alteradas apenas uma vez, (NA CRIAÇÃO DO PROJETO)
//é um forma de criar valores constantes como pro exemplo NUMERO DE ID

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: `VW`,
  wheels: 4,
};

console.log(fusca);

// fusca.wheels=5  Cannot assign to 'wheels' because it is a read-only property.ts(2540)

// 4 INDEX SIGNATURE

interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10, //OK
  // x:`teste` DA ERRO
};

coords.y = 15;

console.log(coords);

// 5 Extending Types

// heranças de propriedade e tipos ja definidos

interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superPowers: string[];
}

const normalHuman: Human = {
  name: `matheus`,
  age: 30,
};

console.log(normalHuman);

const superHero: SuperHuman = {
  name: `Bruce Wayne`,
  age: 35,
  superPowers: [`Money`],
};

const superHero2: SuperHuman = {
  name: `Goku`,
  age: 50,
  superPowers: [`Kamehameha`, `Genki Dama`],
};

console.log(superHero);
console.log(superHero2);
console.log(superHero2.superPowers[0]);

// 6 Intersection Types
//concatenação de tipos utilizando &

interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWhithGun = Character & Gun;

const arnold: HumanWhithGun = {
  name: `Arnold`,
  type: `ShotGun`,
  caliber: 12,
};

console.log(arnold);

// 7 ReadyOnly Array
//modificações sao permitidas atraves apenas de metodos como o map em arrays

let myArray: ReadonlyArray<string> = [`maça`, `Laranja`, `Banana`];

// myArray[3]=`Mamão` DA ERRO por causa do metodo readOnly

myArray.forEach((item) => {
  console.log(`Fruta : ` + item);
});

myArray = myArray.map((item) => {
  return `fruta ${item} `;
});

console.log(myArray);

// 8 Tuplas
// é uma especie de tipagem mais restrita

type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];

type nameAndAge = [string, number];
const anotherUser = [`Feliph`, 28];
console.log(anotherUser);
console.log(anotherUser[1]);

anotherUser[1] = 29;

console.log(anotherUser);

// 8.1 Tuplas com ReadOnly

function ShowNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0]);
  console.log(numbers[1]);
}

ShowNumbers([8, 9]);
