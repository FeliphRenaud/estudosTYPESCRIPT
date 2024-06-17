"use strict";
/*
Encontrando o erro no codigo:

ANOTAÇÃO MENTAL:
SEMPRE QUEBRE O PROBLEMA EM PARTES PEQUENAS

passo 1: definir o tipo de todas as constantes
que no caso são do tipo number

passo 2: todas as variaeis são evocadas no array members
que veio setado como ANY mudando assim o tipo das variaveis
foi necessario fazer a correção do array members de ANY para NUMBER

passo 3: quando o array é invocado no indice zero adicionando um numero nesse indice ln 43
esse valor foi passado como string, mas todos os valores de members foram setados anteriormente
como number bastando somente remover as aspas


*/
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;
const members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
];
members[0] = 12345;
console.log(members);
