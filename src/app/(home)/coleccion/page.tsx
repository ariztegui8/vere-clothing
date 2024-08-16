'use client'
import EnvioGratis from '@/components/EnvioGratis'
import Filtros from '@/components/Filtros'
import SectionJeans from '@/components/SectionJeans'
import Subscription from '@/components/Subscription'
import { dataColeccion24 } from '@/db/dataColeccion24'
import { formatPrice } from '@/helpers'
import useCarrito from '@/hooks/useCarrito'
import IconCorazon from '@/icons/IconCorazon'
import IconCorazonLleno from '@/icons/IconCorazonLleno'
import { CartItem, ProductType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const HomeColeccion = () => {

    const router = useRouter()

    const { handleAddCart, handleLike, likedItems } = useCarrito()

    const handleCardClick = (id: number) => {
        router.push(`/coleccion/${id}`);
    };


    const handleAddToCart = (product: ProductType) => {
        if (handleAddCart) {
            const productWithQuantity: CartItem = { ...product, quantity: 1 }
            handleAddCart(productWithQuantity);
        }
    };


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
                        <p className='text-xs text-[#79B4B7]'>colección</p>
                    </div>
                    <div>
                        <Filtros />
                    </div>
                </div>

                <div className='text-center mb-10'>
                    <p className='text-3xl text-[#C171D6] font-light'>COLECCIÓN</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {dataColeccion24.map(data => (
                        <div key={data.id} className='flex flex-col gap-2 m-auto p-4'>
                            <div className='relative mx-auto'>
                                <Image onClick={() => handleCardClick(data.id)} width={250} height={380} src={data.image} alt='img-remeras' style={{ objectFit: 'cover' }} className='cursor-pointer' />
                                {data.new22 &&
                                    <div className='absolute top-0 left-0 bg-[#79B4B7] rounded-b-lg w-8 h-9 flex items-center justify-center'>
                                        <p className='text-white font-medium text-xs'>OFF</p>
                                    </div>
                                }
                            </div>
                            <div className='flex justify-between items-center gap-2 mb-4'>
                                <div>
                                    <p className='text-[#303030] font-light'>{data.title}</p>
                                    <p className='text-[#303030] font-light'>{formatPrice(data.price)}</p>
                                </div>
                                <div className='pr-3' onClick={() => handleLike(data.id)} >
                                    {likedItems.includes(data.id) ?
                                        <IconCorazonLleno className='w-7 text-[#C171D6] cursor-pointer' />
                                        :
                                        <IconCorazon className='w-7 text-[#303030] cursor-pointer' />
                                    }
                                </div>
                            </div>
                            <div className='text-center'>
                                <button onClick={() => handleAddToCart(data)} className='border border-[#C171D6] py-2 px-6 rounded-md text-[#C171D6] duration-200 hover:bg-[#C171D6] hover:text-white'>Agregar al carrito</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='px-4 md:px-0'>
                <SectionJeans />
            </div>
            <div>
                <EnvioGratis />
            </div>
            <div>
                <Subscription />
            </div>
        </div>

    )
}

export default HomeColeccion