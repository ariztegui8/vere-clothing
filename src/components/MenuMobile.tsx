import React from 'react'
import Link from 'next/link'
import IconInstagram from '@/icons/IconInstagram'
import IconFacebook from '@/icons/IconFacebook'
import IconGooglePlus from '@/icons/IconGooglePlus'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type MenuMobileProps = {
    toggleSubMenu: (subMenu: string) => void
    openSubMenu: string | null
    setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>
}

const MenuMobile = ({ openSubMenu, toggleSubMenu, setOpenMenu }: MenuMobileProps) => {
    return (
        <div className={`flex py-8 transition-all duration-500 ${openSubMenu === 'subMenu' ? 'px-4' : 'p-10'}`}>
            <div className='flex flex-col gap-4'>
                <Link href="#">
                    <p className='text-sm font-light duration-100 hover:font-medium'>VER TODO</p>
                </Link>
                <Link href="#">
                    <p className='text-sm font-light duration-100 hover:font-medium'>NEW ARRIVALS</p>
                </Link>
                <Link
                    href="#"
                    onClick={() => toggleSubMenu('subMenu')}
                >
                    <div className='flex items-center gap-4'>
                        <p className='text-sm font-light duration-100 hover:font-medium'>CLOTHING</p>
                        {openSubMenu === 'subMenu' ?
                            <MdKeyboardArrowLeft size={20} color='#858484' />
                            :
                            <MdKeyboardArrowRight size={20} color='#858484' />
                        }

                    </div>
                </Link>
                <Link href="#">
                    <p className='text-sm font-light duration-100 hover:font-medium'>+ INFO</p>
                </Link>
                <Link href="#" className='mb-6'>
                    <p className='text-sm font-medium text-[#79B4B7]'>OUTLET</p>
                </Link>

                <div className={`items-center gap-4 justify-center ${openSubMenu === 'subMenu' ? 'hidden' : 'flex'}`}>
                    <IconInstagram className='w-8 text-[#303030] cursor-pointer' />
                    <IconFacebook className='w-8 text-[#303030] cursor-pointer' />
                    <IconGooglePlus className='w-8 text-[#303030] cursor-pointer' />
                </div>
            </div>

            {openSubMenu === 'subMenu' &&
                <div className='flex '>
                    <div className="w-px h-full bg-gray-300 mx-3"></div>
                    <div className='flex flex-col gap-4'>
                        <Link href="/coleccion" onClick={() => setOpenMenu(null)}>
                            <p className='text-xs font-light duration-100 hover:font-medium hover:text-[#C171D6]'>COLECCIÓN INVIERNO 24</p>
                        </Link>
                        <Link href="/remeras" onClick={() => setOpenMenu(null)}>
                            <p className='text-xs font-light duration-100 hover:font-medium hover:text-[#C171D6]'>REMERAS</p>
                        </Link>
                        <Link href="camisas" onClick={() => setOpenMenu(null)}>
                            <p className='text-xs font-light duration-100 hover:font-medium hover:text-[#C171D6]'>CAMISAS</p>
                        </Link>
                        <Link href="/pantalones" onClick={() => setOpenMenu(null)}>
                            <p className='text-xs font-light duration-100 hover:font-medium hover:text-[#C171D6]'>PANTALONES</p>
                        </Link>
                        <Link href="/camperas" onClick={() => setOpenMenu(null)}>
                            <p className='text-xs font-light duration-100 hover:font-medium hover:text-[#C171D6]'>CAMPERAS</p>
                        </Link>
                        <Link href="/buzos" onClick={() => setOpenMenu(null)}>
                            <p className='text-xs font-light duration-100 hover:font-medium hover:text-[#C171D6]'>BUZOS</p>
                        </Link>
                        <Link href="/accesorios" onClick={() => setOpenMenu(null)}>
                            <p className='text-xs font-light duration-100 hover:font-medium hover:text-[#C171D6]'>ACCESORIOS</p>
                        </Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default MenuMobile
