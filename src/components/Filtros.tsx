import IconSearch from '@/icons/IconSearch'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import React from 'react'

const Filtros = () => {
    return (
        <div className='bg-white p-2 shadow-md'>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <p className='text-xs font-light'>FILTRAR</p>
                    <MdKeyboardArrowDown size={18} color='#858484' />
                </div>
                <div className='flex items-center gap-1 cursor-pointer'>
                    <p className='text-xs font-medium'>ORDENAR POR</p>
                    <MdKeyboardArrowDown size={18} color='#858484' />
                    {/* <MdKeyboardArrowUp size={20} color='#858484' /> */}
                </div>
                <div>
                    <IconSearch className='cursor-pointer w-4 h-4' />
                </div>
            </div>
        </div>
    )
}

export default Filtros