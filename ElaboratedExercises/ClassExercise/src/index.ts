class Animal {
  constructor(public name: string) {}
  move(meters: number) {
    console.log(` ${this.name} moved ${meters}m.`);
  }
}

class Snake extends Animal {
  move(meters: number = 5) {
    console.log(`Slithering...`);
    super.move(meters);
  }
}

class Pony extends Animal {
  move(meters: number) {
    console.log(`Galloping...`);
    super.move(meters);
  }
}

const sammy = new Snake(`Sammy the snake`);
sammy.move();

const pokey = new Pony(`Pokey the pony`);
pokey.move(34);
