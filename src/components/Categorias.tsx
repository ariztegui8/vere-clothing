import Image from 'next/image'
import React from 'react'
import catRemeras from '../assets/cat-remeras.png'
import catCamisas from '../assets/cat-camisas.png'
import catPantalones from '../assets/cat-pantalones.png'
import catAccesorios from '../assets/cat-accesorios.png'
import Link from 'next/link'

const Categorias = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            <div className='flex flex-col items-center gap-3 cursor-pointer'>
                <Link href='/remeras'>
                    <div className='overflow-hidden'>
                        <Image width={300} height={300} src={catRemeras} alt='cat-remeras' style={{ objectFit: 'cover' }} className='transition-all duration-300 hover:brightness-50 hover:scale-110' />
                    </div>
                </Link>
                <p className='text-sm md:text-base'>REMERAS</p>
            </div>

            <div className='flex flex-col items-center gap-3 cursor-pointer'>
                <Link href='/camisas'>
                    <div className='overflow-hidden'>
                        <Image width={300} height={300} src={catCamisas} alt='cat-camisas' style={{ objectFit: 'cover' }} className='transition-all duration-300 hover:brightness-50 hover:scale-110' />
                    </div>
                </Link>
                <p className='text-sm md:text-base'>CAMISAS</p>
            </div>

            <div className='flex flex-col items-center gap-3 cursor-pointer'>
                <Link href='/pantalones'>
                    <div className='overflow-hidden'>
                        <Image width={300} height={300} src={catPantalones} alt='cat-pantalones' style={{ objectFit: 'cover' }} className='transition-all duration-300 hover:brightness-50 hover:scale-110' />
                    </div>
                </Link>
                <p className='text-sm md:text-base'>PANTALONES</p>
            </div>

            <div className='flex flex-col items-center gap-3 cursor-pointer'>
                <Link href='/accesorios'>
                    <div className='overflow-hidden'>
                        <Image width={300} height={300} src={catAccesorios} alt='cat-accesorios' style={{ objectFit: 'cover' }} className='transition-all duration-300 hover:brightness-50 hover:scale-110' />
                    </div>
                </Link>
                <p className='text-sm md:text-base'>ACCESORIOS</p>
            </div>

        </div>
    )
}

export default Categorias