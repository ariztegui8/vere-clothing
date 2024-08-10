import React from 'react'
import Link from 'next/link'
import IconClose from '@/icons/IconClose'
import noProduct from '../assets/no-products.png'
import Image from 'next/image'
import useCarrito from '@/hooks/useCarrito'
import { formatPrice } from '@/helpers'
import { useRouter } from 'next/navigation'

type MenuUserProps = {
    setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>
}


const MenuCarrito = ({ setOpenMenu }: MenuUserProps) => {

    const { cartItems, deleteItem, addQuantity, deleteQuantity, subtotal, total } = useCarrito()

    const router = useRouter();

    const handleCheckout = () => {
        setOpenMenu(null);
        router.push('/checkout');
    };

    return (
        <div className={`transition-all duration-500 p-6 max-w-sm m-auto ${cartItems.length === 0 ? 'h-lvh' : ''}`}>
            <div className='w-full flex justify-start mb-1'>
                <IconClose onClick={() => setOpenMenu(null)} className='w-5 h-5 cursor-pointer' />
            </div>
            <div className='w-full flex justify-end mb-10'>
                <p className='text-lg font-semibold'>Mi carrito</p>
            </div>

            {cartItems.length === 0 ?
                <div className='flex flex-col items-center gap-8'>
                    <Image width={150} height={150} src={noProduct} alt='no-product' style={{ objectFit: 'cover' }} className='cursor-pointer' />
                    <div className='text-center'>
                        <p className='text-sm font-semibold text-[#262626]'>Tu carrito está vacío.</p>
                        <p className='text-sm text-[#262626]'>¡Agrega productos para empezar tu compra!</p>
                    </div>
                </div>
                :
                <>
                    {cartItems.map(item => (
                        <>
                            <div className='mb-10'>
                                <div className='w-full flex justify-end mb-2'>
                                    <IconClose onClick={() => deleteItem(item.id)} className='w-3 h-3 cursor-pointer' />
                                </div>
                                <div className='flex gap-4'>
                                    <Image width={80} height={100} src={item.image} alt='img-remeras' style={{ objectFit: 'cover' }} className='cursor-pointer' />
                                    <div className=''>
                                        <p className='text-xs text-[#303030] mb-3'>{item.title}</p>
                                        <div className='flex items-center justify-center gap-3 border border-[#79B4B7] rounded-md w-[80px] mb-3'>
                                            <button onClick={() => deleteQuantity(item.id)} className='px-2'>-</button>
                                            <p>{item.quantity}</p>
                                            <button onClick={() => addQuantity(item.id)} className='px-2'>+</button>
                                        </div>
                                        <p className='text-sm font-semibold'>{formatPrice(item.price * item.quantity)}</p>
                                    </div>
                                </div>
                                <hr className='my-4' />
                            </div>
                        </>
                    ))}

                    <div className='mb-16'>
                        <div className='flex items-center justify-between gap-3 mb-3'>
                            <p className='text-sm'>Total parcial</p>
                            <p className='text-sm'>{formatPrice(subtotal)}</p>
                        </div>
                        <div className='flex items-center justify-between gap-3 mb-4'>
                            <p className='text-lg font-semibold'>Total</p>
                            <p className='text-lg font-semibold'>{formatPrice(total)}</p>
                        </div>
                        <div className='mb-6'>
                            <p className='text-xs'>Precio incluye IVA. El costo del despacho se incluye al finalizar la compra. </p>
                        </div>
                        <div>
                            <button onClick={handleCheckout} className='py-2 px-6 rounded-md text-white bg-[#C171D6] duration-200 font-light w-full'>Comprar ahora</button>
                        </div>
                    </div>
                </>

            }

        </div>

    )
}

export default MenuCarrito