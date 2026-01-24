import { getAllProducts, searchProducts } from "./product.js";
import {processPayment} from "./payment.js";
import {addToCart,getCartItems,getCartTotal,updateQuantity,removeFromCart} from "./cart.js";

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
console.log("\n=== Current Cart ===");
console.log(getCartItems());
console.log("Cart Total: ",getCartTotal());

console.log("\n=== Updating the quantities ===");
updateQuantity(1,2); // updating the quantity of laptop to 2

console.log("\n=== Remove an Item ===");
removeFromCart(3) // removes headphones

console.log("==== View Updated Cart ====");
console.log(getCartItems());
console.log(getCartTotal());

console.log("==== checkout ===");
let order = processPayment('upi','WELCOME10');
console.log(order)

