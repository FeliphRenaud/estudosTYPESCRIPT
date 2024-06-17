
/*

opções: 

1ª Opção:
arrumar o codigo original na mãozada apenas removendo as aspas de let pi = '' 
isso faria com que pi deixasse de ser uma string e fosse considerada como number  

let pi = '3.14159';
let tau = pi * 2;

console.log(`${tau} is ${pi} times two.`);

2ª Opção:

1º preciso corrigir os tipo das variaveis 
pi recebe uma string e deve ser convertido a number 

para que o erro do tau suma e a multiplicação aconteça 

*/
let pi = '3.14159';
let number = parseFloat(pi)
let tau =  number * 2;

console.log(`${tau} is ${number} times two.`);