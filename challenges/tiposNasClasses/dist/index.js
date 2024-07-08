"use strict";
//
class MC {
    greet(event = `party`) {
        return `Sorry for party ${event}`;
    }
}
const mc = new MC();
console.log(mc.greet(`Rocking`));
