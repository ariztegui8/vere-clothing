import React from 'react'
import bannerDesktop from '../assets/banner-desktop.png'
import Image from 'next/image'
import Link from 'next/link'

const BannerDesktop = () => {
  return (
    <div className='relative w-full h-[600px]'>
      <Image fill src={bannerDesktop} alt='banner-desktop' style={{ objectFit: 'cover' }} />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
        <div className='flex flex-col xl:flex-row gap-20 xl:gap-36 items-center justify-end sm:pr-10 md:pr-20 xl:pr-44 '>
          <p className='text-2xl text-white font-light'>Descubre la nueva colección y elige tus favoritos </p>
          <div className='flex flex-col items-center gap-6 text-center'>
            <p className='text-5xl text-white font-light'>Winter 22</p>
            <Link href='/arrivals'>
              <button className='bg-[#C171D6] py-2 px-10 rounded-md text-white'>Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerDesktop