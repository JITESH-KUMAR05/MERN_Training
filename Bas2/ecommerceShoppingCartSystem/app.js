import { getAllProducts, searchProducts } from "./product.js";
import {} from "./payment.js";
import {addToCart} from "./cart.js";

console.log("====================================");
console.log("E-Commerce Store");
console.log("====================================");

// getting all the products
let allProducts = getAllProducts();
console.log(allProducts);

// now we will try searching for some product
console.log("\n=== Searching a product ===");
console.log(searchProducts("phone"));

console.log("\n=== Adding to Cart ===");
addToCart(1, 2); // 2 Laptops
addToCart(3, 3); // 3 Headphones
addToCart(1, 1); // 1 more Laptop (should update quantity)

// now we will view the cart