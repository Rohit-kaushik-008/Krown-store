import React from 'react'

const Navbar = ({openNav}) => {


    const openSidebar = () => {
   
        
        openNav(true);
    }
    


  return (
    <div
        className='bg-bg-light w-screen lg:w-[70vw] p-4 flex justify-between items-center gap-4 z-1000'>

            <div
                className=''>
                <img 
                    onClick={openSidebar}
                    className='w-16 sm:h-16 cursor-pointer'
                    src="/icons/newlogo.png" 
                    alt="logo" />
            </div>

            <div
                className='w-[50%]'>

                <input
                    className='searchbar bg-bg-light w-[90%] sm:w-full border-theme-light border rounded-4xl focus:outlisne-0 py-2 px-6 shadow-shadow-light transition-shadow duration-300 text-white-2 text-normal' 
                    type="text"
                    placeholder='Search for Products' />

            </div>

            <div
                className='flex justify-center items-center gap-4 px-4 sm:gap-8'>

                <img 
                    className='invert h-6 sm:h-9 cursor-pointer hover:-translate-y-1 transition-all duration-300 active:translate-y-0.5'
                    src="/actions/wishlist.svg" 
                    alt="home" />
 
                <img 
                    className='invert h-6 sm:h-9 cursor-pointer hover:-translate-y-1 transition-all duration-300 active:translate-y-0.5'
                    src="/actions/cart.svg" 
                    alt="search" />

                <img 
                    className='invert h-6 sm:h-9 cursor-pointer hover:-translate-y-1 transition-all duration-300 active:translate-y-0.5'
                    src="/actions/profile.svg" 
                    alt="menu" />

            </div>
        
      
    </div>
  )
}

export default Navbar
