'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import IconUser from '@/icons/IconUser'
import IconCart from '@/icons/IconCart'
import IconSearch from '@/icons/IconSearch'
import IconMenu from '@/icons/IconMenu'
import IconClose from '@/icons/IconClose'
import Link from 'next/link'
import IconInstagram from '@/icons/IconInstagram'
import IconFacebook from '@/icons/IconFacebook'
import IconGooglePlus from '@/icons/IconGooglePlus'
import BtnWhatsApp from './BtnWhatsApp'

const Navbar = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    return (
        <>
            {/* DESKTOP */}
            <div className='bg-white hidden md:flex items-end justify-between gap-2 px-4 md:px-8 lg:px-14 py-3 fixed z-50 w-full shadow-md '>
                <div>
                    <Image width={90} src={logo} alt='logo' />
                </div>

                <div className='flex items-center gap-12'>
                    <Link href="#">
                        <p className='text-xl font-light duration-100 hover:font-medium'>NEW ARRIVALS</p>
                    </Link>
                    <Link href="#">
                        <p className='text-xl font-light duration-100 hover:font-medium'>CLOTHING</p>
                    </Link>
                    <Link href="#">
                        <p className='text-xl font-light duration-100 hover:font-medium'>+ INFO</p>
                    </Link>
                </div>

                <div className='flex items-center gap-6'>
                    <IconUser
                        className='cursor-pointer w-5 text-[#C171D6]'
                    />
                    <IconCart
                        className='cursor-pointer w-5 text-[#C171D6]'
                    />
                    <IconSearch
                        className='cursor-pointer w-5 text-[#C171D6]'
                    />
                </div>
            </div>
            <BtnWhatsApp />

            {/* MOBILE */}
            <div className='bg-white flex md:hidden items-end justify-between px-4 md:px-8 gap-2 py-3 fixed z-50 w-full shadow-md'>
                <div onClick={handleOpenMenu} className='flex items-center relative'>
                    {isOpenMenu ?
                        <IconClose className='w-6 h-5 cursor-pointer z-40' />
                        :
                        <IconMenu className='w-6 h-5 cursor-pointer' />
                    }
                    <div className={`absolute top-[30px] -left-4 bg-white shadow-md w-64 transition-all duration-300 ${isOpenMenu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        {isOpenMenu &&
                            <div className='flex flex-col gap-4 p-8 px-10 transition-all duration-500'>
                                <Link href="#">
                                    <p className='text-sm font-light duration-100 hover:font-medium'>VER TODO</p>
                                </Link>
                                <Link href="#">
                                    <p className='text-sm font-light duration-100 hover:font-medium'>NEW ARRIVALS</p>
                                </Link>
                                <Link href="#">
                                    <p className='text-sm font-light duration-100 hover:font-medium'>CLOTHING</p>
                                </Link>
                                <Link href="#">
                                    <p className='text-sm font-light duration-100 hover:font-medium'>+ INFO</p>
                                </Link>
                                <Link href="#" className='mb-6'>
                                    <p className='text-sm font-medium text-[#79B4B7]'>OUTLET</p>
                                </Link>

                                <div className='flex items-center gap-4 justify-center'>
                                    <IconInstagram className='w-8 text-[#303030] cursor-pointer' />
                                    <IconFacebook className='w-8 text-[#303030] cursor-pointer' />
                                    <IconGooglePlus className='w-8 text-[#303030] cursor-pointer' />
                                </div>


                            </div>
                        }
                    </div>

                </div>

                <div>
                    <Image width={75} src={logo} alt='logo' />
                </div>

                <div className='flex items-center gap-4'>
                    <IconUser
                        className='cursor-pointer w-5 h-6'
                    />
                    <IconCart
                        className='cursor-pointer w-5 h-6'
                    />
                    <IconSearch
                        className='cursor-pointer w-5 h-6'
                    />
                </div>
            </div>
        </>
    )
}

export default Navbar