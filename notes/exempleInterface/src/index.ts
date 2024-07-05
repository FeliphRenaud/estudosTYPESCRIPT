interface item{
  name: string
  price: number

  itemPurchased(message: string): void
}

let product1: item
product1 = {
  name: 'Apple',
  price: 2,
  itemPurchased(message: string) {
    console.log(message  + ` ` + this.name);
    
  }

}

product1.itemPurchased(`You just bought a `)