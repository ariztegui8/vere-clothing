import React from 'react'
import bannerMobile from '../assets/banner-mobile.png'
import Image from 'next/image'
import Link from 'next/link'

const BannerMobile = () => {
  return (
    <div className='relative w-full h-[350px]'>
      <Image fill src={bannerMobile} alt='banner-mobile' style={{ objectFit: 'cover' }} />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full '>
        <div className='flex items-center flex-col justify-between h-full p-8 sm:p-16'>
          <div className='flex flex-col gap-2 items-end w-full'>
            <p className='text-xl text-[#C171D6] font-light'>Descubre la nueva colección</p>
            <p className='text-2xl text-white font-light'>Winter 22</p>
          </div>
          <div className='flex flex-col items-center gap-6 text-center'>
            <Link href='/arrivals'>
              <button className='bg-[#C171D6] py-1 px-8 rounded-xl text-white'>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerMobile