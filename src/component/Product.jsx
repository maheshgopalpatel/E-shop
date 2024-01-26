import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../Context/ProductContext';

const Product = () => {
    const { productsList, filteredList } = useContext(GlobalContext);

    return (
        <div className=''>
            <h1>Product List</h1>
            <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-10  gap-2'>
                {
                    filteredList.length > 0 ? filteredList.map(({ productCategory: item }, i) => {
                        const { productCategoryImage, productCategoryName } = item;
                        return (
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center flex-col" key={i}>
                                <img className="p-8 rounded-t-lg" src={productCategoryImage} alt="product image" />
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productCategoryName}</h5>
                                </div>
                            </div>
                        )
                    }) : <h1>Product Unavailable</h1>
                }
            </div>
        </div>
    )
}

export default Product