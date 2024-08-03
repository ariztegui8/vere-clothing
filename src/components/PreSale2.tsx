import Image from 'next/image'
import React from 'react'
import preSale2 from '../assets/pre-sale2.png'

const PreSale2 = () => {
    return (
        <div className='relative w-full h-[600px]'>
            <Image fill src={preSale2} alt='pre-sale1' style={{ objectFit: 'cover' }} />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                <div className='flex flex-col items-center gap-36'>
                    <div className='flex flex-col gap-8 items-center'>
                        <p className='text-5xl text-[#C171D6] font-light'>PRE SALE</p>
                        <p className='text-white text-2xl font-light'>BOOTS VERÉ</p>
                    </div>
                    <div >
                        <button className='text-white text-2xl font-light border border-[#C171D6] py-2 px-10 rounded-md'>NEW 22</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreSale2