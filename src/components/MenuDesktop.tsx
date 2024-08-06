import React from 'react'
import Link from 'next/link'
import IconClose from '@/icons/IconClose'

type MenuDesktopProps = {
    setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>
}


const MenuDesktop = ({setOpenMenu} : MenuDesktopProps) => {
    return (
        <div className={`transition-all duration-500 p-6`}>
            <div  className='w-full flex justify-end mb-3'>
                <IconClose onClick={()=> setOpenMenu(null)} className='w-5 h-5'/>
            </div>
            <div className='flex flex-col gap-4'>
                <Link href="#">
                    <p className='text-sm font-light duration-100 hover:font-medium'>COLECCIÓN INVIERNO 22</p>
                </Link>
                <Link href="/remeras" onClick={()=> setOpenMenu(null)}>
                    <p className='text-sm font-light duration-100 hover:font-medium'>REMERAS</p>
                </Link>
                <Link href="#">
                    <p className='text-sm font-light duration-100 hover:font-medium'>CAMISAS</p>
                </Link>
                <Link href="#">
                    <p className='text-sm font-light duration-100 hover:font-medium'>PANTALONES</p>
                </Link>
                <Link href="#">
                    <p className='text-sm font-light duration-100 hover:font-medium'>CAMPERAS</p>
                </Link>
                <Link href="#">
                    <p className='text-sm font-light duration-100 hover:font-medium'>BUZOS</p>
                </Link>
                <Link href="#">
                    <p className='text-sm font-light duration-100 hover:font-medium'>ACCESORIOS</p>
                </Link>
            </div>
        </div>

    )
}

export default MenuDesktop