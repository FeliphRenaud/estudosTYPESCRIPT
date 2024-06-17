function add( num1: number, num2:number){
  return num1 + num2
}

function result(price:number){
  console.log(price);
  
}

let calc = add(5,8)
console.log(calc);

enum Role {admin = 1, read = 2, backup = 3}

const user ={
  firstName:'Feliph',
  age:36,
  role: Role.admin
}

console.log(user);



