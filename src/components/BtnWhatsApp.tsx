import IconWhatsApp from '@/icons/IconWhatsApp'
import Link from 'next/link';
import React from 'react'

const BtnWhatsApp = () => {

  const phoneNumber = '5492494597241';

  return (
    <Link href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
    <div  className='fixed z-50  bottom-8 md:bottom-16 right-8 md:right-16  cursor-pointer'>
        <IconWhatsApp className='text-[#C171D6]'/>
    </div>
    </Link>
  )
}

export default BtnWhatsApp