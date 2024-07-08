interface UserSchema {
  id: number;
  name: string;
}

class User implements UserSchema {
  constructor(public name: string, readonly id: number) {}
}

const user = new User("Dog", 1);

console.log(user.id);

user.name = "Harold"; // pode mudar
// user.id = 5; // nao pode mudar

console.log(`User:`, user);
