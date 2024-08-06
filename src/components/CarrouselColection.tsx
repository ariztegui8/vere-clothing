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


    <div className='relative w-full h-[480px] md:h-[550]'>
      <Image className='hidden md:flex' fill src={fondoCarrousel} alt='fondo-carrousel' style={{ objectFit: 'cover' }} />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-8 flex flex-col gap-4 md:gap-8'>
        <h2 className='text-2xl md:text-4xl text-[#C171D6] md:text-white font-light'>LA NUEVA COLECCIÓN</h2>
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
                <Image width={270} height={350} src={data.image} alt='img-cards' style={{ objectFit: 'cover' }} />
                <div className='flex justify-between items-center gap-2'>
                  <div>
                    <p className='text-[#303030] md:text-[#E5E5E5] text-sm font-light'>{data.title}</p>
                    <p className='text-[#303030] md:text-[#E5E5E5] text-sm font-light'>{data.price}</p>
                  </div>
                  <div className='pr-3'>
                    <IconCorazon className='w-7 cursor-pointer text-white' />
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