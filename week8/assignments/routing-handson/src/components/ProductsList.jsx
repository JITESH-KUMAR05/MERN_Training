import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router"
import {useForm} from "react-hook-form"

const ProductsList = () => {

    let [products, setProducts] = useState([]);
    let [loading,setLoading] = useState(false);
    let [error,setError] = useState(null);
    const {register, handleSubmit}  = useForm()
    const navigate = useNavigate();
    // navigate to the product component
    const goToProduct= (productObj)=> {
        // navigation logic
        // while navigating, transger product object too
        navigate("/product",{state:{product:productObj}});

    }

    const searchItem = (data)=>{
        console.log(data);
        let searchWith = data?.searchWith;
        let type = data?.type;
        if(searchWith.length === 0) return;
        let newObj;
        if(type === "title"){
            newObj = products.filter((obj)=> obj.title === searchWith);

        }else if(type === "category"){
            newObj = products.filter((obj) => obj.category === searchWith);
        }
        setProducts(newObj);
    }

    useEffect(()=>{
        async function getProducts(){
            setLoading(true);
            try {
                let res = await fetch("https://fakestoreapi.com/products");
            
                if(res.status===200){
                    // extract json
                    let productsData = await res.json();
                    // update the state
                    setProducts(productsData);
                }
                else{
                    throw new Error("failed to fetch");
                }
            } catch (error) {
                setError(error)
            }finally{
                setLoading(false)
            }
        }
        getProducts();
    },[])

    if(loading===true){
        return <p className='text-center text-2xl text-blue-400'>Loading...</p>
    }

    if(error!=null){
        return <p className='text-center text-red-500'>{error.message}</p>
    }

  return (
    <div>
        <form onSubmit={handleSubmit(searchItem)} className='w-full text-center mt-2'>
            <input {...register("searchWith")} className='bg-gray-300 w-72 px-6 py-2 mr-3' type="text" placeholder='Search here' />
            <select {...register("type")} id="">
                <option value="category">Category</option>
                <option value="title">title</option>
            </select>
            <button type='submit'>search</button>
        </form>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5'>
        
            {
                products.map((productObj) => {
                    return (
                        <div onClick={()=>goToProduct(productObj)} key={productObj.id} className='shadow-2xl p-5 rounded-2xl cursor-pointer'>
                            <img src={productObj.image} className='w-[60%] m-auto object-contain h-44 mb-8 ' alt="" />
                            <h1>{productObj.title}</h1>
                            <h2>💲{productObj.price}</h2>
                            <button className='bg-gray-300 p-2 rounded-2xl cursor-pointer'>View details</button>
                        </div>
                    )
                })
                // products.length
            }
        </div>
    </div>
  )
}

export default ProductsList
