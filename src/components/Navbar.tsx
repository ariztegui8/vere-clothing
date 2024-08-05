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
import BtnWhatsApp from './BtnWhatsApp'
import MenuMobile from './MenuMobile'

const Navbar = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [subMenu, setSubMenu] = useState(false)

    const handleOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu)
        console.log(isOpenMenu);
    }

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    }

    const handleSubMenuClick = () => {
        setSubMenu(!subMenu)
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
                    <div onClick={stopPropagation} className={`absolute top-[30px] -left-4 bg-white shadow-md transition-all duration-300  ${isOpenMenu ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} ${subMenu ? 'w-[350px]' : 'w-64'}`}>
                        {isOpenMenu &&
                            <MenuMobile
                            subMenu={subMenu}
                            setSubMenu={setSubMenu}
                            handleSubMenuClick={handleSubMenuClick}
                            />
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