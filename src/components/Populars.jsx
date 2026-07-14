import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const Populars = () => {


    const [products, setProducts] = useState([]);


    async function handleAPI() {

        const { data } = await axios.get('https://dummyjson.com/products?limit=194');

        setProducts(data.products)
    }

    function App() {
        useEffect(() => {
            handleAPI();
        }, []);
    }

    App()

    const hotDeals = products.filter(product => product.discountPercentage > 15.0);

    console.log(products);
    // console.log(hotDeals);

    return (
        <div>

            {/* Heading */}

            <div>

                <h2
                    className='text-2xl lg:text-3xl font-heading-1 text-white p-6'>
                    Hello World
                </h2>
            </div>

            <div
                className='flex gap-2 md:gap-4 items-center overflow-x-scroll w-full py-2 px-4 flex-nowrap mb-8'>

                {hotDeals.map(product => (
                    <div
                        key={product.id}
                        className='rounded-xl bg-bg-dark shrink-0 justify-center items-center flex flex-col w-40 h-60'>
                        <img
                            className='w-30'
                            src={product.thumbnail}
                            alt="" />
                        <h1
                            className='text-center'>
                            {product.title}
                        </h1>
                        <p>
                            ${product.price}
                        </p>

                        <p>
                            {product.rating} ({product.minimumOrderQuantity})
                        </p>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Populars
