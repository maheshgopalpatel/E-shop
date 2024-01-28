import React, { useContext} from 'react'
import { GlobalContext } from '../Context/ProductContext';

const Product = () => {
    const {productsList, filteredList } = useContext(GlobalContext);
    const arr = filteredList??productsList;
    return (
        <div className=''>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-10  gap-2'>
                {
                    arr.length > 0 ? arr.map(({ productCategory: item }, i) => {
                        const { productCategoryImage, productCategoryName } = item;
                        return (
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center flex-col" key={i}>
                                <img className="p-8 rounded-t-lg" src={productCategoryImage} alt="product image" />
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productCategoryName}</h5>
                                </div>
                            </div>
                        )
                    }) :<> <h1 className=' w-full text-center bg-orange-400 text-white text-xl py-4 lg:col-span-4 md:col-span-3 sm:col-span-2'>Product Unavailable</h1> { productsList.map(({ productCategory: item }, i) => {
                        const { productCategoryImage, productCategoryName } = item;
                        return (
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center flex-col" key={i}>
                                <img className="p-8 rounded-t-lg" src={productCategoryImage} alt="product image" />
                                <div className="px-5 pb-5">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{productCategoryName}</h5>
                                </div>
                            </div>
                        )
                    })}</> 
                }
            </div>
        </div>
    )
}

export default Product