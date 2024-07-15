"use strict";
class Movies {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let movie1 = new Movies(1, `Dejavu`);
let movie2 = new Movies(2, `Norseman`);
console.log(movie1);
console.log(movie2);
// reduzindo as linhas do codigo
class Moovie {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let moovie1 = new Moovie(1, `Pirates of the Caribbean `);
console.log(moovie1);
