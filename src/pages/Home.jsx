import React from 'react'
import Category1 from '../components/Category1'
import PopularProducts1 from '../components/PopularProducts1'

const Home = () => {
    return (
        <div
            className='relative'>

            <div
                className='relative'>
                <img
                    className='top-0 left-0 z-10'
                    src="images/lp-banner.png"
                    alt="heroImage" />

                <div
                    className='z-100 text-white absolute top-25 left-5 -translate-y-1/2 flex flex-col justify-center items-start gap-1 sm:top-50 sm:left-10'>
                    <p
                        className='text-mist-300 text-sm sm:text-lg'>
                        New Collection
                    </p>
                    <h1
                        className='text-3xl text-theme-main font-semibold font-heading-4 sm:text-5xl'>
                        Elevate Your Style
                    </h1>

                    <p
                        className='my-2 text-white-2 text-sm sm:text-lg'>
                        Discover our lates collection of premium <br /> products at amazing prices
                    </p>

                    <button
                        className='py-2 px-4 bg-theme-dark rounded-xl mt-2 text-sm flex gap-4 sm:text-lg cursor-pointer active:scale-95 transition-all duration-150'>
                        Shop Now
                        <img
                            className='invert'
                            src="/actions/right-arrow.svg"
                            alt="" />
                    </button>

                </div>

            </div>

            <Category1 />

            {/* <PopularProducts1 /> */}
        
        </div>
    )
}

export default Home
