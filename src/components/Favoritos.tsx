import Image from 'next/image'
import React from 'react'
import favorite1 from '../assets/favorite1.png'
import favorite2 from '../assets/favorite2.png'
import favorite3 from '../assets/favorite3.png'
import favorite4 from '../assets/favorite4.png'

const Favoritos = () => {
    return (
        <div>
            <h2 className='text-4xl text-[#79B4B7] font-light mb-4'>NUESTROS FAVORITOS</h2>
            <div className='grid grid-cols-4 gap-4'>
                <div className='flex flex-col items-center gap-4'>
                    <Image width={300} height={300} src={favorite1} alt='favorite1' style={{ objectFit: 'cover' }} />
                    <button className='border border-[#79B4B7] py-2 px-10 rounded-md text-[#79B4B7]'>Ver más</button>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <Image width={300} height={300} src={favorite2} alt='favorite2' style={{ objectFit: 'cover' }} />
                    <button className='border border-[#79B4B7] py-2 px-10 rounded-md text-[#79B4B7]'>Ver más</button>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <Image width={300} height={300} src={favorite3} alt='favorite3' style={{ objectFit: 'cover' }} />
                    <button className='border border-[#79B4B7] py-2 px-10 rounded-md text-[#79B4B7]'>Ver más</button>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    <Image width={300} height={300} src={favorite4} alt='favorite4' style={{ objectFit: 'cover' }} />
                    <button className='border border-[#79B4B7] py-2 px-10 rounded-md text-[#79B4B7]'>Ver más</button>
                </div>
            </div>
        </div>
    )
}

export default Favoritos