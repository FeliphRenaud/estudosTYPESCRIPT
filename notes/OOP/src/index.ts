// criando uma aplicação para instituição financeira com os dados do cliente:

//criando o esqueleto do app

class Users {
  name: string;
  private balance: number = 0;

  constructor(n: string, b: number) {
    this.name = n;
    this.balance = b;
  }

  addMoney(amount: number) {
    this.balance += amount;
  }
}

const user1 = new Users(`Feliph`, 10);
user1.addMoney(100);
const user2 = new Users(`marcos`, 20);
console.log(user1);
console.log(user2);
