// Product database (simulated)
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 10, category: "electronics" },
  { id: 2, name: "Phone", price: 30000, stock: 15, category: "electronics" },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    stock: 25,
    category: "accessories",
  },
  { id: 4, name: "Mouse", price: 500, stock: 50, category: "accessories" },
  { id: 5, name: "Keyboard", price: 1500, stock: 30, category: "accessories" },
];

export function getProductById(id){
    //  applying filter on the products arr which has object to find the object which matched the product id which the user is trying to search
    let searchedPrd = products.find((product) => product.id === id);
    if(searchedPrd !== undefined) return searchedPrd;
    return {}
}
// testing
// console.log(getProductById(22));

export function getAllProducts(){
    // just returning all the products directly just creating a new reff
    let allProducts = products;
    return allProducts;
}
// console.log(getAllProducts());

// if we need all the product with specific category
export function getProductByCategory(category){
    let allProductsWithGivenCategory = products.filter((product)=> product.category===category);
    return allProductsWithGivenCategory;
}
// console.log(getProductByCategory('electronics'));

// searching of a product
export function searchProducts(query){
    // now we have to search according to the query let's apply filer and try to match the name with the query
    let searchedPrd = products.filter((product)=>product.name.toLowerCase === query.toLowerCase)
    if(searchProducts !== undefined) return searchProducts;
    return "No product Found"
}

// now we need to check if there is enough stock of a particular product or not 
export function checkStock(productId,quantity){
    let prd = products.find((product)=>product.id===productId);
    if(prd.stock >= quantity) return true;
    return false;
}
// console.log(checkStock(1,10))
// we are now going to reduct the stock of the product which is sold
export function reduceStock(productId,quantity){
    products.map((product)=>{
        if(product.id===productId && product.stock >= quantity){
            product.stock -= quantity;
        }
    })
}
// console.log(reduceStock(1,5));
// console.log(products);