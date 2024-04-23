import React, { useEffect, useState } from 'react'

function Card() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProduct = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProduct(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    // console.log(product)
    useEffect(() => {
        getProduct();
    }, []);
    return (
        <div>
            <h1 className=' text-center text-3xl font-bold py-5'>Top Product</h1>
            {loading 
            ? 
            <div className='flex justify-center '>
                <img className=' w-16 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="" />
            </div> 
            :
                <div className='flex flex-wrap px-4 lg:px-10 '>
                    {product.map((item, index) => {
                        const { title, image, price, rating, category } = item
                        return (
                            <div key={index} className="p-2 md:w-1/4 w-full">
                                <div className="bg-[#ffffff] p-3 rounded-2xl 
                            shadow-[inset_0_0px_3px_rgba(0,0,0,0.6)] hover:-translate-y-1 ">
                                    <div className="flex justify-center items-center">
                                        <img className='rounded-lg h-80 mb-2' src={image} alt="" />
                                    </div>
                                    <h2 className='text-xl text-black font-bold'>{title}</h2>
                                    <h2 className='text-xl text-black font-semibold'>₹{price}</h2>
                                    <h2 className='text-xl text-black mb-1  '><span className='font-semibold'>Category :</span> {category}</h2>
                                    <div className="flex items-center mb-3">
                                        <svg
                                            className="w-5 h-5 text-red-400 mr-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-red-400 mr-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-red-400 mr-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-red-400 mr-1"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <svg
                                            className="w-5 h-5 text-gray-400 mr-1 "
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 22 20"
                                        >
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <p className="ml-2 text-sm font-medium text-gray-500 ">
                                            {rating.rate} out of 5
                                        </p>
                                    </div>
                                    <div className=" flex  space-x-2 justify-between">
                                        <button className='bg-[#444444] px-5 py-1.5 text-white rounded-lg'>
                                            Add to card
                                        </button>
                                        <button className='bg-[#4c050b] px-5 py-1.5 text-white rounded-lg'>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>}

        </div>
    )
}

export default Card