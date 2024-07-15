class Movies {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
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
  constructor(
    public readonly id: number,
    public name: string,
    private _price?: number
  ) {}
}
let moovie1 = new Moovie(1, `Pirates of the Caribbean `, 20);
console.log(moovie1);
