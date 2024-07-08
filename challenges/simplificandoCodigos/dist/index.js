"use strict";
//simplifique o codigo abaixo
class Employee {
    constructor(title, salary) {
        this.title = title;
        this.salary = salary;
    }
}
const Employee1 = new Employee(`Engenier`, 10000);
const Employee2 = new Employee(`Developer`, 50000);
console.log(`the new employee is ${Employee1.title} and you salary is ${Employee1.salary}`);
console.log(`the new employee is ${Employee2.title} and you salary is ${Employee2.salary}`);
//simpificado
class Employeer {
    constructor(title, salary) {
        this.title = title;
        this.salary = salary;
    }
}
const newEmployee = new Employeer(`engenieer`, 11000);
console.log(`The new employee's title is ${newEmployee.title} and they earn $ ${newEmployee.salary}`);
