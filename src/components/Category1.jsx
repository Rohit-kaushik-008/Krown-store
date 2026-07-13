import React from 'react'

const Category1 = () => {
    return (
        <div>

            <div
                className='flex justify-between items-center w-full px-4 py-2'>

                <h1
                    className='text-white text-2xl font-heading-1'>
                    Shop by categories
                </h1>

                <button
                    className='flex gap-2 justify-center items-center active:scale-95 cursor-pointer transition-all duration-150  py-2 px-4 active:translate-x-1'>
                    View all
                    <img
                        className='invert h-5'
                        src="/actions/right-arrow.svg"
                        alt="" />
                </button>

            </div>


            <div
                className=''>

                <h1>Products Image Container</h1>

            </div>


        </div>
    )
}

export default Category1
