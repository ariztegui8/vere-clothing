import Image from 'next/image'
import React from 'react'
import fondoJeans from '../assets/fondo-jeans.png'
import logoWhite from '../assets/logo-white.png'

const SectionJeans = () => {
    return (
        <div className='relative w-full h-[350px]'>
            <Image fill src={fondoJeans} alt='fondo-jeans' style={{ objectFit: 'cover' }} />
            <div className='absolute w-full flex flex-col items-center justify-center gap-4 md:gap-8 h-full px-2'>
                <p className='text-white font-light text-base md:text-3xl text-center'>Descubre todos los jeans de la nueva colección</p>
                <Image width={250} src={logoWhite} alt='logo' className='mb-6 w-[150px] md:w-[250px]'/>
                <button className='text-white text-lg md:text-2xl border border-white py-1 md:py-2 px-6 md:px-10 rounded-xl md:rounded-md bg-[#C4C4C4] opacity-80'>Ver más</button>
            </div>
        </div>


    )
}

export default SectionJeans