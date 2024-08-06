import React from 'react'
import Link from 'next/link'
import IconClose from '@/icons/IconClose'
import IconPassword from '@/icons/IconPassword'
import IconUser from '@/icons/IconUser'

type MenuUserProps = {
    setOpenMenu: React.Dispatch<React.SetStateAction<string | null>>
}


const MenuUser = ({ setOpenMenu }: MenuUserProps) => {
    return (
        <div className={`transition-all duration-500 p-6 max-w-sm m-auto`}>
            <div className='w-full flex justify-end mb-3'>
                <IconClose onClick={() => setOpenMenu(null)} className='w-5 h-5 cursor-pointer' />
            </div>
            <div className='flex flex-col gap-3 md:gap-4 items-center'>
                <p className='text-xl md:text-2xl text-[#C171D6] font-light mb-1 md:mb-3'>REGISTRATE</p>

                <div className='flex flex-col gap-1 w-full'>
                    <p className='text-sm md:text-base'>Correo electrónico</p>
                    <div className='flex items-center w-full justify-center'>
                        <div className='flex justify-center items-center border border-[#C171D6] bg-white h-8 md:h-10 rounded-md px-3 relative z-10'>
                            <IconUser className='w-5 h-5 md:w-6 md:h-6 text-[#C171D6]' />
                        </div>
                        <input
                            type="email"
                            placeholder='Ingrese su email'
                            className='h-8 md:h-10 w-full px-6 border border-[#C171D6] bg-white outline-none rounded-md relative right-[6px] text-sm md:text-base'
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-1 w-full mb-4 md:mb-6'>
                    <p className='text-sm md:text-base'>Contraseña</p>
                    <div className='flex items-center w-full justify-center'>
                        <div className='flex justify-center items-center border border-[#C171D6] bg-white h-8 md:h-10 rounded-md px-3 relative z-10'>
                            <IconPassword className='w-5 h-5 md:w-6 md:h-6 text-[#C171D6]' />
                        </div>
                        <input
                            type="password"
                            placeholder='Ingrese su email'
                            className='h-8 md:h-10 w-full px-6 border border-[#C171D6] bg-white outline-none rounded-md relative right-[6px] text-sm md:text-base'
                        />
                    </div>
                </div>

                <div className='w-full mb-3'>
                    <button className='bg-[#C171D6] text-white w-full h-8 md:h-10 rounded-md text-sm md:text-base'>REGISTRATE</button>
                </div>

                <div className='text-center'>
                    <Link href="#">
                        <p className='text-[#C4C4C4] mb-3 text-sm md:text-base'>¿Olvidó su contraseña?</p>
                    </Link>
                    <Link href="#">
                        <p className='text-xs font-semibold'>CREAR UNA CUENTA</p>
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default MenuUser