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
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

    const toggleMenu = (menu: string) => {
        setOpenMenu(prev => prev === menu ? null : menu);
        if (menu !== 'subMenu') {
            setOpenSubMenu(null);
        }
    }

    const toggleSubMenu = (subMenu: string) => {
        setOpenSubMenu(prev => prev === subMenu ? null : subMenu);
    }

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
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
                    <div onClick={() => toggleMenu('desktop')} className='flex items-center gap-4 relative cursor-pointer'>
                        <p className='text-xl font-light duration-100 hover:font-medium'>CLOTHING</p>
                        {openMenu === 'desktop' ?
                            <MdKeyboardArrowUp size={20} color='#858484' />
                            :
                            <MdKeyboardArrowDown size={20} color='#858484' />
                        }

                        <div onClick={stopPropagation} className={`absolute top-9 bg-white shadow-md transition-all duration-300 w-72 ${openMenu === 'desktop' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            {openMenu === 'desktop' &&
                                <MenuDesktop
                                    setOpenMenu={setOpenMenu}
                                />
                            }
                        </div>
                    </div>
                    <Link href="#">
                        <p className='text-xl font-light duration-100 hover:font-medium'>+ INFO</p>
                    </Link>
                </div>

                <div className='flex items-center gap-6'>
                    <div onClick={() => toggleMenu('user')}>
                        <IconUser
                            className='cursor-pointer w-5 text-[#C171D6]'
                        />
                        <div onClick={stopPropagation} className={`absolute top-[60px] right-8 w-[400px]  bg-white shadow-md transition-all duration-300 ${openMenu === 'user' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            <div>
                                {openMenu === 'user' &&
                                    <MenuUser
                                        setOpenMenu={setOpenMenu}
                                    />
                                }
                            </div>
                        </div>
                    </div>

                    <IconCart
                        className='cursor-pointer w-5 text-[#C171D6]'
                    />

                    <div onClick={() => toggleMenu('search')}>
                        <IconSearch
                            className='cursor-pointer w-5 text-[#C171D6]'
                        />
                        <div onClick={stopPropagation} className={`absolute top-[60px] left-0 w-full shadow-md transition-all duration-300 ${openMenu === 'search' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            <div className=''>
                                {openMenu === 'search' &&
                                    <MenuSearch
                                        setOpenMenu={setOpenMenu}
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
                <div onClick={() => toggleMenu('mobile')} className='flex items-center relative'>
                    {openMenu === 'mobile' ?
                        <IconClose className='w-6 h-5 cursor-pointer z-40' />
                        :
                        <IconMenu className='w-6 h-5 cursor-pointer' />
                    }
                    <div onClick={stopPropagation} className={`absolute top-[30px] -left-4 bg-white shadow-md transition-all duration-300  ${openMenu === 'mobile' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} ${openMenu === 'mobile' && 'w-[350px]'}`}>
                        {openMenu === 'mobile' &&
                            <MenuMobile
                                toggleSubMenu={toggleSubMenu}
                                openSubMenu={openSubMenu}
                                setOpenMenu={setOpenMenu}
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
                    <div onClick={() => toggleMenu('user')}>
                        <IconUser
                            className='cursor-pointer w-5 h-6'
                        />
                        <div onClick={stopPropagation} className={`absolute top-[54px] right-0 w-full bg-white shadow-md transition-all duration-300 ${openMenu === 'user' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            <div>
                                {openMenu === 'user' &&
                                    <MenuUser
                                        setOpenMenu={setOpenMenu}
                                    />
                                }
                            </div>
                        </div>
                    </div>

                    <IconCart
                        className='cursor-pointer w-5 h-6'
                    />

                    <div onClick={() => toggleMenu('search')}>
                        <IconSearch
                            className='cursor-pointer w-5 h-6'
                        />
                        <div onClick={stopPropagation} className={`absolute top-[54px] left-0 w-full shadow-md transition-all duration-300 ${openMenu === 'search' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            <div className=''>
                                {openMenu === 'search' &&
                                    <MenuSearch
                                        setOpenMenu={setOpenMenu}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
