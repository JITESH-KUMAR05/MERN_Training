let product = {
    productName:"LED",
    brand:"Sony",
    price:100000,
    reviews:[{},{},{}]
}

// create product obj with with 30% discount
let discountProduct = {...product,price:70000};
console.log(product);
console.log(discountProduct);

