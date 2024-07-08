//simplifique o codigo abaixo

interface Employee {
  title: string;
  salary: number;
}

class Employee implements Employee {
  constructor(public title: string, public salary: number) {}
}

const Employee1 = new Employee(`Engenier`, 10000);
const Employee2 = new Employee(`Developer`, 50000);

console.log(
  `the new employee is ${Employee1.title} and you salary is ${Employee1.salary}`
);
console.log(
  `the new employee is ${Employee2.title} and you salary is ${Employee2.salary}`
);

//simpificado

class Employeer {
  constructor(public title: string, public salary: number) {}
}

const newEmployee = new Employeer(`engenieer`, 11000);

console.log(
  `The new employee's title is ${newEmployee.title} and they earn $ ${newEmployee.salary}`
);
