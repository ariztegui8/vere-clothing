
import IconEmail from '@/icons/IconEmail'
import React from 'react'

const Subscription = () => {
    return (
        <div className=' w-full h-[250px] bg-[#79B4B7] p-4 md:p-8'>
            <div className=' w-full flex flex-col items-center justify-center gap-4 md:gap-8 h-full'>
                <div className='hidden md:flex'>
                    <IconEmail />
                </div>
                <p className='text-white font-light text-base md:text-2xl text-center'>Suscribite a nuestras ofertas y RECIBE LAS ÚLTIMAS novedades</p>
                <div className='flex items-center w-full justify-center max-w-xs md:max-w-lg'>
                   <input 
                        type="email" 
                        placeholder='Ingrese su email'
                        className='h-10 md:h-14 w-full m px-3 border border-white bg-transparent outline-none rounded-md text-white placeholder:text-white'
                    />
                    <button className='text-[#79B4B7] text-sm border border-white bg-white h-10 md:h-14 px-4 rounded-md relative right-2'>ENVIAR</button>
                </div>
            </div>
        </div>
    )
}

export default Subscription