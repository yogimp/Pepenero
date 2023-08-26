'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
    {
        id: 1,
        title: 'Always fresh, crispy and always Hot',
        image: '/slide1.png'
    },
    {
        id: 2,
        title: 'We delivery your order wherever you are',
        image: '/slide2.png'
    },
    {
        id: 3,
        title: 'The best pizza to share with your family',
        image: '/slide3.jpg'
    },
]

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    // useEffect( () => {
    //     const interval = setInterval( () => {
    //         setCurrentSlide(prev => (prev === data.length-1 ? 0 : prev + 1 ))
    //     }, 4000)
    //     return () => clearInterval(interval)
    // },[])

    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg bg-fuchsia-50'>
            {/* TEXT CONTAINER */}
            <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
                <h1 className='text-3xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
                    {data[currentSlide].title}
                </h1>
                <button className='bg-red-500 text-white py-2 px-4 md:py-4 md:px-8'>Order Now</button>
            </div>
            {/* IMAGE CONTAINER */}
            <div className='w-full flex-1 relative'>
                <Image src={data[currentSlide].image} alt='slider' fill className='object-cover'/>
            </div>
        </div>
    )
}

export default Slider