import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.svg'
import IconUser from '@/icons/IconUser'
import IconCart from '@/icons/IconCart'
import IconSearch from '@/icons/IconSearch'

const Navbar = () => {
  return (
    <div className='bg-white flex items-end justify-between px-10 py-2'>
        <div>
            <Image width={90} src={logo} alt='logo' />
        </div>

        <div className='flex items-center gap-12'>
            <p className='text-xl'>NEW ARRIVALS</p>
            <p className='text-xl'>CLOTHING</p>
            <p className='text-xl'>+ INFO</p>
        </div>

        <div className='flex items-center gap-6'>
            <IconUser
                className='cursor-pointer w-5'
            />
            <IconCart 
                 className='cursor-pointer w-5'
            />
            <IconSearch 
                 className='cursor-pointer w-5'
            />
        </div>
    </div>
  )
}

export default Navbar