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
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import MenuDesktop from './MenuDesktop'
import MenuSearch from './MenuSearch'
import MenuUser from './MenuUser'

const Navbar = () => {

    const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)
    const [isOpenMenuDesktop, setIsOpenMenuDesktop] = useState(false)
    const [isOpenSearch, setIsOpenSearch] = useState(false)
    const [isOpenUser, setIsOpenUser] = useState(false)
    const [subMenu, setSubMenu] = useState(false)

    const handleOpenMenuMobile = () => {
        setIsOpenMenuMobile(!isOpenMenuMobile)
    }

    const handleOpenMenuDesktop = () => {
        setIsOpenMenuDesktop(!isOpenMenuDesktop)
    }

    const handleOpenSearch = () => {
        setIsOpenSearch(!isOpenSearch)
    }

    const handleOpenUser = () => {
        setIsOpenUser(!isOpenUser)
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
                    <Link href="/">
                        <Image width={90} src={logo} alt='logo' />
                    </Link>
                </div>

                <div className='flex items-center gap-12'>
                    <Link href="#">
                        <p className='text-xl font-light duration-100 hover:font-medium'>NEW ARRIVALS</p>
                    </Link>
                    <Link
                        href="#"
                        onClick={handleOpenMenuDesktop}
                    >
                        <div className='flex items-center gap-4 relative'>
                            <p className='text-xl font-light duration-100 hover:font-medium'>CLOTHING</p>
                            {isOpenMenuDesktop ?
                                <MdKeyboardArrowUp size={20} color='#858484' />
                                :
                                <MdKeyboardArrowDown size={20} color='#858484' />
                            }

                            <div onClick={stopPropagation} className={`absolute top-9 bg-white shadow-md transition-all duration-300 w-64 ${isOpenMenuDesktop ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                {isOpenMenuDesktop &&
                                    <MenuDesktop
                                        setIsOpenMenuDesktop={setIsOpenMenuDesktop}
                                    />
                                }
                            </div>
                        </div>
                    </Link>

                    <Link href="#">
                        <p className='text-xl font-light duration-100 hover:font-medium'>+ INFO</p>
                    </Link>
                </div>

                <div className='flex items-center gap-6'>
                    <div onClick={handleOpenUser}>
                        <IconUser
                            className='cursor-pointer w-5 text-[#C171D6]'
                        />
                        <div onClick={stopPropagation} className={`absolute top-[60px] right-8 w-[400px]  bg-white shadow-md transition-all duration-300 ${isOpenUser ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            <div>
                                {isOpenUser &&
                                    <MenuUser
                                        setIsOpenUser={setIsOpenUser}
                                    />
                                }
                            </div>
                        </div>
                    </div>

                    <IconCart
                        className='cursor-pointer w-5 text-[#C171D6]'
                    />

                    <div onClick={handleOpenSearch}>
                        <IconSearch
                            className='cursor-pointer w-5 text-[#C171D6]'
                        />
                        <div onClick={stopPropagation} className={`absolute top-[60px] left-0 w-full  bg-white shadow-md transition-all duration-300 ${isOpenSearch ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            <div>
                                {isOpenSearch &&
                                    <MenuSearch
                                        setIsOpenSearch={setIsOpenSearch}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BtnWhatsApp />

            {/* MOBILE */}
            <div className='bg-white flex md:hidden items-end justify-between px-4 md:px-8 gap-2 py-3 fixed z-50 w-full shadow-md'>
                <div onClick={handleOpenMenuMobile} className='flex items-center relative'>
                    {isOpenMenuMobile ?
                        <IconClose className='w-6 h-5 cursor-pointer z-40' />
                        :
                        <IconMenu className='w-6 h-5 cursor-pointer' />
                    }
                    <div onClick={stopPropagation} className={`absolute top-[30px] -left-4 bg-white shadow-md transition-all duration-300  ${isOpenMenuMobile ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} ${subMenu ? 'w-[350px]' : 'w-64'}`}>
                        {isOpenMenuMobile &&
                            <MenuMobile
                                subMenu={subMenu}
                                setSubMenu={setSubMenu}
                                handleSubMenuClick={handleSubMenuClick}
                            />
                        }
                    </div>

                </div>

                <div>
                    <Link href="/">
                        <Image width={75} src={logo} alt='logo' />
                    </Link>
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