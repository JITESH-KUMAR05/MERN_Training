import {getCartItems,getCartTotal,clearCart,addToCart} from './cart.js'
import {validateCoupan,calculateDiscount} from './discount.js'
import {reduceStock} from './product.js'
export function processPayment(paymentMethod,coupanCode=null){
    // addToCart(1,5);
    // addToCart(3,8);
    let allItems = getCartItems();
    if(allItems.length===0) return "Cart Empty"
    // console.log(allItems);
    let totalPrice = getCartTotal();
    let finalPrice = totalPrice;
    if(coupanCode!==null){
        let isValid = validateCoupan(coupanCode,totalPrice,allItems);
        let totalDiscount = calculateDiscount(coupanCode,totalPrice);
        if(isValid){
            finalPrice = finalPrice - totalDiscount;
            if(validatePaymentMethod(paymentMethod)){
                let result = allItems.map((product)=>{
                    reduceStock(product.id,product.quantity);
                    // { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" },
                    return {
                        id:product.id,
                        name: product.name,
                        price: product.price,
                        stock: product.stock,
                        category: product.category
                    }
                })
                clearCart();
                return {
                        orderId: generateOrderId(),
                        items: result,
                        subtotal: totalPrice,
                        discount: totalDiscount,
                        total: finalPrice,
                        paymentMethod: paymentMethod,
                        status: "Success",
                        message: "Thank you for shopping with us!"
                    }
            }
            return {orderId: generateOrderId(),items: allItems,subtotal: totalPrice,discount: totalDiscount,total: finalPrice,paymentMethod: paymentMethod,status: "failure", message: "Wrong Payment method"}
        }
        return {orderId: generateOrderId(),items: allItems,subtotal: totalPrice,discount: totalDiscount,total: finalPrice,paymentMethod: paymentMethod,status: "failure", message: "Coupan code not valid"}
    }
    if(validatePaymentMethod(paymentMethod)){

        let result = allItems.map((product)=>{
                    reduceStock(product.id,product.quantity);
                    // { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" },
                    return {
                        id: product.id,
                        name: prodcuct.name,
                        price: product.price,
                        stock: product.stock,
                        category: product.category
                    }
            })
            clearCart();
                return {
                        orderId: generateOrderId(),
                        items: result,
                        subtotal: totalPrice,
                        discount: totalDiscount,
                        total: finalPrice,
                        paymentMethod: paymentMethod,
                        status: "Success",
                        message: "Thank you for shopping with us!"
                    }
            }
         return {orderId: generateOrderId(),items: result,subtotal: totalPrice,discount: 0,total: finalPrice,paymentMethod: paymentMethod,status: "failure", message: "Payment Method not valid"}
}

// validating the payment method
export function validatePaymentMethod(method){
    if(method==='card' || method ==='upi' || method==='cod'){
        return true;
    }
    return false;
}

function generateOrderId(){
    return 'ORD' + Date.now();
}

// console.log(processPayment('cod','FLAT500'));