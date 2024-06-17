"use strict";
/*

1º preciso corrigir os tipo das variaveis
pi recebe uma string e deve ser convertido a number

para que o erro do tau suma e a multiplicação aconteça

*/
let pi = '3.14159';
let number = parseFloat(pi);
let tau = number * 2;
console.log(`${tau} is ${number} times two.`);
