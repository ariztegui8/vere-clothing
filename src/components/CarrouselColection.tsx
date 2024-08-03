'use client'
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import fondoCarrousel from '../assets/fondo-carrousel.png'
import IconCorazon from '@/icons/IconCorazon';
import { dataCarrousel } from '@/dataCarrousel';



const CarrouselColection = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    }
  };


  return (


    <div className='relative w-full h-[550px]'>
      <Image fill src={fondoCarrousel} alt='fondo-carrousel' style={{ objectFit: 'cover' }} />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-8 flex flex-col gap-8'>
        <h2 className='text-4xl text-white font-light'>LA NUEVA COLECCIÓN</h2>
        <div>
          <Carousel 
            responsive={responsive} 
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            // pauseOnHover={false}
          >
            {dataCarrousel.map(data => (
              <div key={data.id} className='flex flex-col gap-3 w-[270px] m-auto'>
                <Image width={270} height={350} src={data.image} alt='img-cards' style={{ objectFit: 'cover' }} className='cursor-pointer duration-150 hover:brightness-50'/>
                <div className='flex justify-between items-center gap-2'>
                  <div>
                    <p className='text-[#E5E5E5] text-sm font-light'>{data.title}</p>
                    <p className='text-[#E5E5E5] text-sm font-light'>{data.price}</p>
                  </div>
                  <div className='pr-3'>
                    <IconCorazon className='w-7 cursor-pointer' />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>

  )
}

export default CarrouselColection