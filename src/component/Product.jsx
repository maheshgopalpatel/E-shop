import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Product() {
    let [productsList,setProductsList]=useState([]);
    let [filteredList,setFilteredList]=useState([]);
    async function getData(){
        let res= await axios('https://api.kalpav.com/api/v1/product/category/retail')
        let data=await res.data.response;
        setProductsList(data)
        setFilteredList(data)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
        <h1>Product List</h1>
        <div>
            {
                productsList.map(({productCategory:item},i)=>{
                    console.log(item);
                    return <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={i}>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.productCategoryName}</h5>
                       <img src={item.productCategoryImage} alt="" />
                    </div>
                    
                })
            }
        </div>
    </div>
  )
}

export default Product