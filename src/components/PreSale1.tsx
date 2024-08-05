import Image from 'next/image'
import React from 'react'
import preSale1 from '../assets/pre-sale1.png'

const PreSale1 = () => {
    return (
        <div className='relative w-full h-[400px] lg:h-[600px] '>
            <Image fill src={preSale1} alt='pre-sale1' style={{ objectFit: 'cover' }}/>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                <div className='flex flex-col items-center gap-36'>
                    <div>
                        <p className='text-white text-2xl font-light'>WINTER VERÉ</p>
                    </div>
                    <div className='flex flex-col gap-10 items-center'>
                        <p className='text-5xl text-[#79B4B7] font-light'>PRE SALE</p>
                        <button className='text-white text-2xl font-light border border-[#79B4B7] py-1 md:py-2 px-10 rounded-xl md:rounded-md duration-200 hover:bg-[#79B4B7]'>NEW 22</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreSale1