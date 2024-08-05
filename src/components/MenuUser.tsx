import React from 'react'
import Link from 'next/link'
import IconClose from '@/icons/IconClose'
import IconPassword from '@/icons/IconPassword'
import IconUser from '@/icons/IconUser'

type MenuUserProps = {
    setIsOpenUser: React.Dispatch<React.SetStateAction<boolean>>
}


const MenuUser = ({ setIsOpenUser }: MenuUserProps) => {
    return (
        <div className={`transition-all duration-500 p-6`}>
            <div className='w-full flex justify-end mb-3'>
                <IconClose onClick={() => setIsOpenUser(false)} className='w-5 h-5 cursor-pointer' />
            </div>
            <div className='flex flex-col gap-4 items-center'>
                <p className='text-2xl text-[#C171D6] font-light mb-3'>REGISTRATE</p>

                <div className='flex flex-col gap-1 w-full'>
                    <p>Correo electrónico</p>
                    <div className='flex items-center w-full justify-center'>
                        <button className='border border-[#C171D6] bg-white h-10 rounded-md px-3 relative z-10'>
                            <IconUser className='w-6 h-6 text-[#C171D6]' />
                        </button>
                        <input
                            type="email"
                            placeholder='Ingrese su email'
                            className='h-10 w-full px-6 border border-[#C171D6] bg-white outline-none rounded-md relative right-[6px]'
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-1 w-full mb-6'>
                    <p>Contraseña</p>
                    <div className='flex items-center w-full justify-center'>
                        <button className='border border-[#C171D6] bg-white h-10 rounded-md px-3 relative z-10'>
                            <IconPassword className='w-6 h-6 text-[#C171D6]' />
                        </button>
                        <input
                            type="password"
                            placeholder='Ingrese su email'
                            className='h-10 w-full px-6 border border-[#C171D6] bg-white outline-none rounded-md relative right-[6px]'
                        />
                    </div>
                </div>

                <div className='w-full mb-3'>
                    <button className='bg-[#C171D6] text-white w-full h-10 rounded-md'>REGISTRATE</button>
                </div>

                <div className='text-center'>
                    <Link href="#">
                        <p className='text-[#C4C4C4] mb-3'>¿Olvidó su contraseña?</p>
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