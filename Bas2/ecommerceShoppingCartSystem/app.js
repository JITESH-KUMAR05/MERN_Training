import {getAllProducts} from './product.js'
import {} from './payment.js'
import {} from './cart.js'

console.log('====================================');
console.log("E-Commerce Store");
console.log('====================================');

// getting all the products
let allProducts = getAllProducts();
console.log(allProducts)
