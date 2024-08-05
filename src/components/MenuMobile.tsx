import React from 'react'
import Link from 'next/link'
import IconInstagram from '@/icons/IconInstagram'
import IconFacebook from '@/icons/IconFacebook'
import IconGooglePlus from '@/icons/IconGooglePlus'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


type MenuMobileProps = {
    subMenu: boolean
    setSubMenu: React.Dispatch<React.SetStateAction<boolean>>
    handleSubMenuClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void

}

const MenuMobile = ({ subMenu, setSubMenu, handleSubMenuClick }: MenuMobileProps) => {
    return (
        <div className={`flex py-8 transition-all duration-500 ${subMenu ? 'px-4' : 'p-10'}`}>
            <div className='flex flex-col gap-4'>
                <Link href="#">
                    <p className='text-sm font-light duration-100 hover:font-medium'>VER TODO</p>
                </Link>
                <Link href="#">
                    <p className='text-sm font-light duration-100 hover:font-medium'>NEW ARRIVALS</p>
                </Link>
                <Link
                    href="#"
                    onClick={handleSubMenuClick}
                >
                    <div className='flex items-center gap-4'>
                        <p className='text-sm font-light duration-100 hover:font-medium'>CLOTHING</p>
                        {subMenu ?
                        <MdKeyboardArrowLeft size={20} color='#858484'/>
                        :
                        <MdKeyboardArrowRight size={20} color='#858484'/>
                        }
                        
                    </div>
                </Link>
                <Link href="#">
                    <p className='text-sm font-light duration-100 hover:font-medium'>+ INFO</p>
                </Link>
                <Link href="#" className='mb-6'>
                    <p className='text-sm font-medium text-[#79B4B7]'>OUTLET</p>
                </Link>

                <div className={`items-center gap-4 justify-center ${subMenu ? 'hidden' : 'flex'}`}>
                    <IconInstagram className='w-8 text-[#303030] cursor-pointer' />
                    <IconFacebook className='w-8 text-[#303030] cursor-pointer' />
                    <IconGooglePlus className='w-8 text-[#303030] cursor-pointer' />
                </div>
            </div>



            {subMenu &&
                <div className='flex '>
                    <div className="w-px h-full bg-gray-300 mx-3"></div>
                    <div className='flex flex-col gap-4'>

                        <Link href="#">
                            <p className='text-xs font-light duration-100 hover:font-medium'>COLECCIÓN INVIERNO 22</p>
                        </Link>
                        <Link href="#">
                            <p className='text-xs font-light duration-100 hover:font-medium'>REMERAS</p>
                        </Link>
                        <Link href="#">
                            <p className='text-xs font-light duration-100 hover:font-medium'>CAMISAS</p>
                        </Link>
                        <Link href="#">
                            <p className='text-xs font-light duration-100 hover:font-medium'>PANTALONES</p>
                        </Link>
                        <Link href="#">
                            <p className='text-xs font-light duration-100 hover:font-medium'>CAMPERAS</p>
                        </Link>
                        <Link href="#">
                            <p className='text-xs font-light duration-100 hover:font-medium'>BUZOS</p>
                        </Link>
                        <Link href="#">
                            <p className='text-xs font-light duration-100 hover:font-medium'>ACCESORIOS</p>
                        </Link>
                    </div>
                </div>
            }
        </div>

    )
}

export default MenuMobile