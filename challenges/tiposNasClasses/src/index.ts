//

class MC {
  greet(event: string = `party`): string {
    return `Sorry for party ${event}`;
  }
}

const mc = new MC();
console.log(mc.greet(`Rocking`));
