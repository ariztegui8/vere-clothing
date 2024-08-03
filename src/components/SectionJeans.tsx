import Image from 'next/image'
import React from 'react'
import fondoJeans from '../assets/fondo-jeans.png'
import logoWhite from '../assets/logo-white.png'

const SectionJeans = () => {
    return (
        <div className='relative w-full h-[350px]'>
            <Image fill src={fondoJeans} alt='fondo-jeans' style={{ objectFit: 'cover' }} />
            <div className='absolute w-full flex flex-col items-center justify-center gap-8 h-full'>
                <p className='text-white font-light text-3xl'>Descubre todos los jeans de la nueva colección</p>
                <Image width={250} src={logoWhite} alt='logo' className='mb-6' />
                <button className='text-white text-2xl border border-white py-2 px-10 rounded-md bg-[#C4C4C4] opacity-80'>Ver más</button>
            </div>
        </div>


    )
}

export default SectionJeans