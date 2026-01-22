import {getCartItems,getCartTotal,clearCart} from './cart'
import {validateCoupan,calculateDiscount} from './discount.js'
export function processPayment(paymentMethod,coupanCode=null){
    let allItems = getCartItems();
    let totalPrice = getCartTotal();
    let finalPrice = totalPrice;
    if(coupanCode!==null){
        let isValid = ValidCoupon(coupanCode,totalPrice,allItems);
        let totalDiscount = 
        if(isValid){
            finalPrice = 
        }
    }
}