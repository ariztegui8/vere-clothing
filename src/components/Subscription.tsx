
import IconEmail from '@/icons/IconEmail'
import React from 'react'

const Subscription = () => {
    return (
        <div className=' w-full h-[250px] bg-[#79B4B7] p-8'>
            <div className=' w-full flex flex-col items-center justify-center gap-8 h-full'>
                <IconEmail />
                <p className='text-white font-light text-2xl'>Suscribite a nuestras ofertas y RECIBE LAS ÚLTIMAS novedades</p>
                <div className='flex items-center w-full justify-center max-w-lg'>
                   <input 
                        type="email" 
                        placeholder='Ingrese su email'
                        className='h-14 w-full px-3 border border-white bg-transparent outline-none rounded-md text-white placeholder:text-white'
                    />
                    <button className='text-[#79B4B7] text-sm border border-white bg-white h-14 px-4 rounded-md relative right-2'>ENVIAR</button>
                </div>
            </div>
        </div>
    )
}

export default Subscription