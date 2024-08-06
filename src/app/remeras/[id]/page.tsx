'use client'
import Footer from '@/components/Footer'
import { dataRemeras } from '@/dataRemeras'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const RemerasId = () => {

    const { id } = useParams();

    const remerasId = dataRemeras.find((data) => data.id === Number(id));

    if (!remerasId) {
        return <div>Producto no encontrado</div>;
    }

    return (
        <div>
            <div className='pt-24 px-4 md:px-8 mb-10'>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10'>
                    <div className='flex items-center gap-1'>
                        <Link href='/'>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <MdKeyboardArrowLeft size={20} color='#858484' />
                                <p className='text-xs'>INICIO /</p>
                            </div>
                        </Link>
                        <p className='text-xs'>CLOTHING /</p>
                        <p className='text-xs text-[#79B4B7]'>remeras</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2 m-auto p-4'>
                    <Image width={250} height={380} src={remerasId.image} alt='img-remeras' style={{ objectFit: 'cover' }} className='cursor-pointer' />
                    <div className='flex justify-between items-center gap-2 mb-4'>
                        <div>
                            <p className='text-[#303030] font-light'>{remerasId.title}</p>
                            <p className='text-[#303030] font-light'>{remerasId.price}</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className='border border-[#C171D6] py-2 px-6 rounded-md text-[#C171D6] duration-200 hover:bg-[#C171D6] hover:text-white'>COMPRAR</button>
                    </div>
                </div>

            </div>


            <div className='bg-[#303030] py-8 px-4 md:px-6 xl:px-12'>
                <Footer />
            </div>
        </div>
    )
}

export default RemerasId