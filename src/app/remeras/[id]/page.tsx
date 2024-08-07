'use client'
import Footer from '@/components/Footer'
import { dataRemeras } from '@/dataRemeras'
import IconStar from '@/icons/IconStar'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
const RemerasId = () => {

    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const { id } = useParams();

    const toggleMenu = (menu: string) => {
        setOpenMenu(prev => prev === menu ? null : menu);
    }

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

                <div className='flex gap-4 mb-10'>
                    <div className='w-3/4'>
                        <div className='flex items-center gap-3'>
                            <div className='flex flex-col gap-4'>
                                <Image width={95} height={120} src={remerasId.image} alt='img-remeras' style={{ objectFit: 'cover' }} className='cursor-pointer' />
                                <Image width={95} height={120} src={remerasId.image} alt='img-remeras' style={{ objectFit: 'cover' }} className='cursor-pointer' />
                                <Image width={95} height={120} src={remerasId.image} alt='img-remeras' style={{ objectFit: 'cover' }} className='cursor-pointer' />
                            </div>
                            <div className='m-auto'>
                                <Image width={450} height={550} src={remerasId.image} alt='img-remeras' style={{ objectFit: 'cover' }} className='cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='w-1/4'>
                        <div className='mb-20'>
                            <p className='text-3xl text-[#303030] mb-1'>{remerasId.title}</p>
                            <div className='flex items-center gap-3 mb-1'>
                                <p className='text-2xl font-light text-[#303030]'>{remerasId.price}</p>
                                <div className='flex items-center gap-1'>
                                    <IconStar className='text-[#79B4B7] w-6 h-6' />
                                    <IconStar className='text-[#79B4B7] w-6 h-6' />
                                    <IconStar className='text-[#79B4B7] w-6 h-6' />
                                    <IconStar className='text-[#79B4B7] w-6 h-6' />
                                    <IconStar className='text-[#79B4B7] w-6 h-6' />
                                </div>
                            </div>
                            <p className='text-sm text-[#9B9B9B]'>* 3 Y 6 CUOTAS SIN INTERÉS</p>
                        </div>

                        <div className='mb-6'>
                            <p className='mb-2 font-light'>TALLE</p>
                            <div className='flex items-center gap-2'>
                                <div className='border border-[#79B4B7] w-9 h-7 flex items-center justify-center rounded-md cursor-pointer'>
                                    <p className='font-light'>S</p>
                                </div>
                                <div className='border border-[#79B4B7] w-9 h-7 flex items-center justify-center rounded-md cursor-pointer'>
                                    <p className='font-light'>M</p>
                                </div>
                                <div className='border border-[#79B4B7] w-9 h-7 flex items-center justify-center rounded-md cursor-pointer'>
                                    <p className='font-light'>L</p>
                                </div>
                                <div className='border border-[#79B4B7] w-9 h-7 flex items-center justify-center rounded-md cursor-pointer'>
                                    <p className='font-light'>XL</p>
                                </div>
                            </div>
                        </div>

                        <div className='mb-16'>
                            <p className='mb-2 font-light'>COLOR</p>
                            <div className='flex items-center gap-2'>
                                <div className='bg-black w-9 h-7 flex items-center justify-center rounded-md cursor-pointer'>

                                </div>
                                <div className='border border-black bg-white w-9 h-7 flex items-center justify-center rounded-md cursor-pointer'>

                                </div>
                                <div className='bg-[#C11A56] w-9 h-7 flex items-center justify-center rounded-md cursor-pointer'>

                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-3 py-2 px-6 border border-[#79B4B7] rounded-md'>
                                <button>-</button>
                                <p>1</p>
                                <button>+</button>
                            </div>
                            <button className='py-2 px-6 rounded-md text-white bg-[#79B4B7] duration-200 font-light'>COMPRAR</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='max-w-3xl'>
                        <div onClick={() => toggleMenu('description')} className='flex items-center gap-3 cursor-pointer'>
                            <p className={`text-xl font-light ${openMenu === 'description' ? 'text-[#C171D6]' : ''}`}>DESCRIPCIÓN</p>
                            {openMenu === 'description' ?
                                <MdKeyboardArrowUp size={22} color='#858484' />
                                :
                                <MdKeyboardArrowDown size={22} color='#858484' />
                            }
                        </div>
                        <div className={`transition-all duration-300 w-full ${openMenu === 'description' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            {openMenu === 'description' &&
                                <p className='py-3'>Remera de hombre Adventures algodón liviano, con un ajuste atlético y tela de malla para
                                    eliminar la humedad y ofrecer un movimiento fácil y cómodo para que puedas mantenerte
                                    concentrado y alcanzar el máximo rendimiento. El estilo clásico del cuello redondo se ve
                                    muy bien dentro y fuera del gimnasio, mientras que los detalles reflectantes y el contraste
                                    de colores le dan un estilo deportivo.</p>
                            }
                        </div>
                    </div>

                    <hr className='my-3' />

                    <div className='max-w-3xl'>
                        <div onClick={() => toggleMenu('reseña')} className='flex items-center gap-3 cursor-pointer'>
                            <p className={`text-xl font-light ${openMenu === 'reseña' ? 'text-[#C171D6]' : ''}`}>RESEÑA</p>
                            {openMenu === 'reseña' ?
                                <MdKeyboardArrowUp size={22} color='#858484' />
                                :
                                <MdKeyboardArrowDown size={22} color='#858484' />
                            }
                        </div>
                        <div className={`transition-all duration-300 w-full ${openMenu === 'reseña' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            {openMenu === 'reseña' &&
                                <div className='py-3'>
                                    <div className='flex items-center gap-1 mb-2'>
                                        <IconStar className='text-[#79B4B7] w-6 h-6' />
                                        <IconStar className='text-[#79B4B7] w-6 h-6' />
                                        <IconStar className='text-[#79B4B7] w-6 h-6' />
                                        <IconStar className='text-[#79B4B7] w-6 h-6' />
                                        <IconStar className='text-[#79B4B7] w-6 h-6' />
                                    </div>
                                    <p>
                                        concentrado y alcanzar el máximo rendimiento. El estilo clásico del cuello redondo se ve
                                        muy bien dentro y fuera del gimnasio, mientras que los detalles reflectantes y el contraste
                                        de colores le dan un estilo deportivo.</p>
                                </div>
                            }
                        </div>
                    </div>

                    <hr className='my-3' />

                    <div >
                        <div onClick={() => toggleMenu('talles')} className='flex items-center gap-3 cursor-pointer'>
                            <p className={`text-xl font-light ${openMenu === 'talles' ? 'text-[#C171D6]' : ''}`}>TABLA DE TALLES</p>
                            {openMenu === 'talles' ?
                                <MdKeyboardArrowUp size={22} color='#858484' />
                                :
                                <MdKeyboardArrowDown size={22} color='#858484' />
                            }
                        </div>
                        <div className={`transition-all duration-300 w-full ${openMenu === 'talles' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            {openMenu === 'talles' &&
                                <div className='py-3'>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border border-[#3f3f3f]">
                                            <thead>
                                                <tr>
                                                    <th className="p-4 border border-[#9B9B9B]"></th>
                                                    <th className="p-4 border border-[#9B9B9B] text-[#C171D6] text-lg font-light">RESEÑA</th>
                                                    <th className="p-4 border border-[#9B9B9B] text-[#C171D6] text-lg font-light">RESEÑA</th>
                                                    <th className="p-4 border border-[#9B9B9B] text-[#C171D6] text-lg font-light">RESEÑA</th>
                                                    <th className="p-4 border border-[#9B9B9B] text-[#C171D6] text-lg font-light">RESEÑA</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className='text-center'>
                                                    <td className="p-4 border border-[#9B9B9B] text-[#C171D6] font-light">Hombros</td>
                                                    <td className="p-4 border border-[#9B9B9B] text-sm">TABLA DE TALLES</td>
                                                    <td className="p-4 border border-[#9B9B9B] text-sm">TABLA DE TALLES</td>
                                                    <td className="p-4 border border-[#9B9B9B] text-sm">TABLA DE TALLES</td>
                                                    <td className="p-4 border border-[#9B9B9B] text-sm">TABLA DE TALLES</td>
                                                </tr>
                                                <tr className='text-center'>
                                                    <td className="p-4 border border-[#9B9B9B] text-[#C171D6] font-light">Cintura</td>
                                                    <td className="p-4 border border-[#9B9B9B] text-sm">TABLA DE TALLES</td>
                                                    <td className="p-4 border border-[#9B9B9B] text-sm">TABLA DE TALLES</td>
                                                    <td className="p-4 border border-[#9B9B9B] text-sm">TABLA DE TALLES</td>
                                                    <td className="p-4 border border-[#9B9B9B] text-sm">TABLA DE TALLES</td>
                                                </tr>
                                                <tr className='text-center'>
                                                    <td className="p-4 border border-[#9B9B9B] text-[#C171D6] font-light">Largo</td>
                                                    <td className="p-4 border border-[#9B9B9B] text-sm">TABLA DE TALLES</td>
                                                    <td className="p-4 border border-[#9B9B9B] text-sm">TABLA DE TALLES</td>
                                                    <td className="p-4 border border-[#9B9B9B] text-sm">TABLA DE TALLES</td>
                                                    <td className="p-4 border border-[#9B9B9B] text-sm">TABLA DE TALLES</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <hr className='my-3' />


                </div>

            </div>


            <div className='bg-[#303030] py-8 px-4 md:px-6 xl:px-12'>
                <Footer />
            </div>
        </div>
    )
}

export default RemerasId