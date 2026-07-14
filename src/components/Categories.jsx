import React from 'react'

const Categories = () => {

    const category = [
        {
            id: 1,
            title: "Beauty",
            image_url: "/icons/lipstick.svg"
        },
        {
            id: 2,
            title: "Furniture",
            image_url: "/icons/couch.svg"
        },
        {
            id: 3,
            title: "Groceries",
            image_url: "/icons/shopping-basket.svg"
        },
        {
            id: 4,
            title: "Home",
            image_url: "/icons/lamp-floor.svg"
        },
        {
            id: 5,
            title: "Kitchen",
            image_url: "/icons/hat-chef.svg"
        },
        {
            id: 6,
            title: "Electronics",
            image_url: "/icons/laptop.svg"
        },
        {
            id: 7,
            title: "Accessories",
            image_url: "/icons/appliances.svg"
        },
        {
            id: 8,
            title: "Fashion",
            image_url: "/icons/shirt.svg"
        },
        {
            id: 9,
            title: "Sports",
            image_url: "/icons/volleyball.svg"
        },
        {
            id: 10,
            title: "Vehicle",
            image_url: "/icons/vehicle.svg"
        },
    ];

    return (
        <div
            className='h-full'>

            {/* heading */}

            <div
                className='flex justify-between items-center w-full px-6 py-2 mt-4'>

                <h1
                    className='text-white lg:text-3xl text-2xl font-heading-1'>
                    Shop by categories
                </h1>


            </div>

            {/* Categories */}

            <div
                className='flex gap-2 md:gap-4 items-center overflow-x-scroll w-full py-2 px-4 flex-nowrap'>

                {category.map((items, idx) => {
                    return <div
                        key={idx}
                        className='shadow-box flex flex-col justify-center rounded-2xl p-4 items-center cursor-pointer gap-2 w-30 bg-bg-dark hover:scale-105 active:translate-y-2 transition-all duration-200 shrink-0'>
                        <img
                            className='h-6 invert'
                            src={items.image_url}
                            alt="category" />
                        <h2
                            className='text-center font-light text-sm'>
                            {items.title}
                        </h2>
                    </div>
                })}


            </div>

        </div>
    )
}

export default Categories