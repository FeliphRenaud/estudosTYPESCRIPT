"use strict";
let product1;
product1 = {
    name: 'Apple',
    price: 2,
    itemPurchased(message) {
        console.log(message + ` ` + this.name);
    }
};
product1.itemPurchased(`You just bought a `);
