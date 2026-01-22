import {getCartTotal,getCartItems} from './cart.js'
// Available coupons
const coupons = {
  WELCOME10: { type: "percentage", value: 10, minAmount: 1000 },
  FLAT500: { type: "flat", value: 500, minAmount: 5000 },
  ELECTRONICS20: {
    type: "percentage",
    value: 20,
    minAmount: 10000,
    category: "electronics",
  },
};

// validating the coupan
export function validateCoupan(coupancode, cartTotal, cartItems){
    let isCoupanExist = false;
    for(let val in coupons){
        if(val === coupancode) {
            isCoupanExist=true;
            break;
        }
    }
    console.log(isCoupanExist);
}
// validateCoupan('FLAT500',getCartTotal(),getCartItems());

// calculating the discount
export function calculateDiscount(coupanCode, cartTotal){
    let discount = cartTotal;
    let typeOf
}
