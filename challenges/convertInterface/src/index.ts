// converter o codigo abaixo para interface

/*
function addToCart(item: {id: number, title: string, variantId: number}) {
    console.log(`Adding "${item.title}" to cart.`);
  }

  addToCart({id: 1, title: 'shoes'});
*/

interface Cart {
  id: number;
  title: string;
  variantId?: number;
}

function addToCart(item: Cart) {
  console.log(`Adding "${item.title}" to cart.`);
}

addToCart({ id: 1, title: "shoes" });
addToCart({ id: 2, title: `Car` });
addToCart({ id: 3, title: `Snake` });
addToCart({ id: 4, title: `Ps4` });
