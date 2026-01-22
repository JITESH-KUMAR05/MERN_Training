import {checkStock,getProductById} from './product.js'

let cartItems = [];

export function addToCart(productId, quantity){
    let prd = getProductById(productId);
    let availability = checkStock(productId,quantity);
    let checkIfAvailable = cartItems.find((product)=>product.id===productId);
    if(checkIfAvailable!==undefined){
        if(availability){
            cartItems.map((product)=>{
                if(product.id===productId){
                    product.quantity += quantity;
                }
            })
        }
    }else{
        cartItems.push({id:prd.id,name:prd.name,price:prd.price,category:prd.category,quantity:quantity});
    }
}
addToCart(1,5);
addToCart(3,8);
// console.log(cartItems);

// remove from cart functionality
export function removeFromCart(productId){
    let checkIfExist = cartItems.findIndex((product)=>product.id===productId);
    if(checkIfExist === -1) return "item not exist in cart";
    cartItems.splice(checkIfExist,1);
    return "Removed Successfully";
}
// console.log(cartItems);
// console.log(removeFromCart(1));
// console.log(cartItems);
// updating the quantity of a product in cart
export function updateQuantity(productId,newQuantity){
    let checkIfExist = cartItems.findIndex((product)=>product.id===productId);
    if(checkIfExist === -1) {
        console.log("Item does not exist");
        return false;        
    };
    let stockCheck = checkStock(productId,newQuantity);
    if(stockCheck){
        cartItems[checkIfExist].quantity = newQuantity
        return true;
    }
    console.log("Not Enough Stock!");
    return false;

}
// console.log(cartItems);
// console.log(updateQuantity(3,20));
// console.log(cartItems);

// get the all cart items
export function getCartItems(){
    return cartItems;
}
// getting the cart total
export function getCartTotal(){
    let total = cartItems.reduce((accumulator,product)=>accumulator+(product.price*product.quantity),0);
    return total;
}
// console.log(cartItems);
// console.log(getCartTotal());

// deleting the whole cart
export function clearCart(){
    cartItems.splice(0,cartItems.length);
    return cartItems;
}
// console.log(clearCart());