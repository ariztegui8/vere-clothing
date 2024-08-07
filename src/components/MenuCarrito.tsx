import React from 'react'
import Link from 'next/link'
import IconClose from '@/icons/IconClose'
import remera1 from '../assets/remeras/remera1.png'

import Image from 'next/image'

type MenuUserProps = {
    setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>
}


const MenuCarrito = ({ setOpenMenu }: MenuUserProps) => {
    return (
        <div className={`transition-all duration-500 p-6 max-w-sm m-auto`}>
            <div className='w-full flex justify-start mb-1'>
                <IconClose onClick={() => setOpenMenu(null)} className='w-5 h-5 cursor-pointer' />
            </div>
            <div className='w-full flex justify-end mb-10'>
                <p className='text-lg font-semibold'>Mi carrito</p>
            </div>

            <div className='mb-10'>
                <div>
                    <div className='w-full flex justify-end mb-2'>
                        <IconClose className='w-3 h-3 cursor-pointer' />
                    </div>
                    <div className='flex gap-4'>
                        <Image width={80} height={100} src={remera1} alt='img-remeras' style={{ objectFit: 'cover' }} className='cursor-pointer' />
                        <div className=''>
                            <p className='text-xs text-[#303030] mb-3'>Remera Road White</p>
                            <div className='flex items-center justify-center gap-3 border border-[#79B4B7] rounded-md w-[80px] mb-3'>
                                <button className='px-2'>-</button>
                                <p>1</p>
                                <button className='px-2'>+</button>
                            </div>
                            <p className='text-sm font-semibold'>$6.390</p>
                        </div>
                    </div>
                    <hr className='my-4' />
                </div>

                <div>
                    <div className='w-full flex justify-end mb-2'>
                        <IconClose className='w-3 h-3 cursor-pointer' />
                    </div>
                    <div className='flex gap-4'>
                        <Image width={80} height={100} src={remera1} alt='img-remeras' style={{ objectFit: 'cover' }} className='cursor-pointer' />
                        <div className=''>
                            <p className='text-xs text-[#303030] mb-3'>Remera Road White</p>
                            <div className='flex items-center justify-center gap-3 border border-[#79B4B7] rounded-md w-[80px] mb-3'>
                                <button className='px-2'>-</button>
                                <p>1</p>
                                <button className='px-2'>+</button>
                            </div>
                            <p className='text-sm font-semibold'>$6.390</p>
                        </div>
                    </div>
                    <hr className='my-4' />
                </div>
            </div>

            <div className='mb-16'>
                <div className='flex items-center justify-between gap-3 mb-3'>
                    <p className='text-sm'>Total parcial</p>
                    <p className='text-sm'>$55.984</p>
                </div>
                <div className='flex items-center justify-between gap-3 mb-4'>
                    <p className='text-lg font-semibold'>Total</p>
                    <p className='text-lg font-semibold'>$55.984</p>
                </div>
                <div className='mb-6'>
                    <p className='text-xs'>Precio incluye IVA. El costo del despacho se incluye al finalizar la compra. </p>
                </div>
                <div>
                    <button className='py-2 px-6 rounded-md text-white bg-[#C171D6] duration-200 font-light w-full'>Comprar ahora</button>
                </div>
            </div>
        </div>

    )
}

export default MenuCarrito