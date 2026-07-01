import React from 'react'
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Products from '../pages/Products'

const display = () => {
    return (

        <div
            className='relative'>


            <div
                className='sticky top-0 left-0 border-2 border-theme-main'>

                <Navbar />

            </div>

            <div 
                className='text-white'>

                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/products' element={<Products />} />

                </Routes>

            </div>

        </div>

    )
}

export default display
