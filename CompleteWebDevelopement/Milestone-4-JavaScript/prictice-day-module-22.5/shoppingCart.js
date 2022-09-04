const shoppingCart = [
    { name: 'shirt', price: 1890, quantity: 2 },
    { name: 't-shirt', price: 1090, quantity: 3 },
    { name: 'pant', price: 3290, quantity: 1 },
    { name: 'shoe', price: 1500, quantity: 1 },
    { name: 'bag', price: 990, quantity: 1 },
];

function totalCost(products) {
    let productPrice = [];
    let total = 0;
    for (i = 0; i < products.length; i++) {
        const product = products[i];
        const price = product.price * product.quantity;
        productPrice.push(price);
        total += price;
    }
    console.log(productPrice);
    return total;
}
const expensive = totalCost(shoppingCart);
console.log("Total Shopping Price: ", expensive);