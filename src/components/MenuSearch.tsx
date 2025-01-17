import React from 'react'
import Link from 'next/link'
import IconClose from '@/icons/IconClose'
import IconSearch from '@/icons/IconSearch'

type MenuSearchProps = {
    setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>
}


const MenuSearch = ({ setOpenMenu }: MenuSearchProps) => {
    return (
        <div className={`transition-all bg-white duration-500 p-6 md:p-8`}>
            <div className='w-full flex justify-end mb-4'>
                <IconClose onClick={() => setOpenMenu(null)} className='w-5 h-5 cursor-pointer' />
            </div>
            <div className='flex items-center gap-3 max-w-md md:max-w-xl m-auto'>
                <input
                    type="text"
                    className='w-full border-b border-black focus:outline-none text-[#C4C4C4] placeholder:text-[#C4C4C4] placeholder:font-light'
                    placeholder='Buscar en nuestra tienda'
                />
                <button>
                    <IconSearch className='w-6 h-6 text-[#C171D6]'/>
                </button>
            </div>
        </div>

    )
}

export default MenuSearch