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
    // console.log(isCoupanExist);
    return isCoupanExist;
}
// validateCoupan('FLAT500',getCartTotal(),getCartItems());

// calculating the discount
export function calculateDiscount(coupanCode, cartTotal){
    let discount = 0;
    let typeOfDiscount  = coupons[coupanCode].type;
    // console.log(typeOfDiscount)
    if(typeOfDiscount==='flat'){
        discount = coupons[coupanCode].value
    }
    else if(typeOfDiscount === 'percentage'){
        discount = coupons[coupanCode].value * cartTotal / 100;
    }
    // console.log(discountedPrice)
    return discount;
}

// calculateDiscount('FLAT500',1000);

// we now got the discount now we need to deduct the discount from the cart total;

export function applyDiscount(cartTotal,coupanCode,cartItems){
    let afterDiscount = cartTotal;
    let discount = 0;
    if(validateCoupan(coupanCode,cartTotal,cartItems)){
        discount = calculateDiscount(coupanCode,cartTotal);
        afterDiscount = cartTotal - discount;
        return {originalPrice : cartTotal,discount:discount,finalTotal:afterDiscount,message:"Thank you for being our valueable customer"};
    }
    
    return {originalPrice : cartTotal,discount:discount,finalTotal:afterDiscount,message:"Sorry There is no Discount Available at the moment"};;
}

// console.log(applyDiscount(1500,'FLAT500',{ id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" }));