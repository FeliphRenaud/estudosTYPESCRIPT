"use strict";
// Criar uma function que recebe notas de review dos usuarios
// 1 os dados devem ser recebidos utilizando Narrowing
// 2 as possibilidades sao booleam e number
// 3 as notas vao de 1 a 5 e cada nota deve conter uma mensagem especifica
// 4 caso o usuario nao de uma nota deve haver um retorno tambem
class Usuario {
    constructor(name, note) {
        this.name = name;
        if (note) {
            this.note = note;
        }
    }
}
const usuarios = [
    new Usuario(`Alex`, 5),
    new Usuario(`Rovilson`, 3),
    new Usuario(`Dani`, 3),
    new Usuario(`Jack`, 2),
    new Usuario(`Manu`, 1),
    new Usuario(`jacque`),
];
function feedBackReview(review) {
    if (`note` in review) {
        if (typeof review.note === `number`) {
            switch (review.note) {
                case 5:
                    return `${review.name}, excelente`;
                case 4:
                    return `${review.name}, muito bom!`;
                case 3:
                    return `${review.name}, bom!`;
                case 2:
                    return `${review.name},regular !`;
                case 1:
                    return `${review.name}, ruim :( `;
                default:
                    return `${review.name}, nota invalida`;
            }
        }
        else if (typeof review.note === `boolean`) {
            return review.note
                ? `${review.name}, nota positiva!`
                : `${review.name}, nota negativa`;
        }
    }
    return `${review.name}`;
}
usuarios.forEach((user) => {
    console.log(feedBackReview(user));
});
