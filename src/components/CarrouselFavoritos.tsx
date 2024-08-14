'use client'
import { dataCarrouselFav } from '@/db/dataCarrouselFav';
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const CarrouselFavoritos = () => {

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


        <div className='relative w-full h-[430px] md:h-[550]'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  flex flex-col gap-4 md:gap-8'>
                <h2 className='text-2xl text-[#79B4B7] font-light'>NUESTROS FAVORITOS</h2>
                <div>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                    // pauseOnHover={false}
                    >
                        {dataCarrouselFav.map(data => (
                             <div key={data.id} className='flex flex-col gap-3 w-[270px] m-auto'>
                             <Image width={270} height={350} src={data.image} alt='pre-sale1' style={{ objectFit: 'cover' }} />
                             <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full'>
                                 <div className='flex flex-col items-center h-full justify-between py-10'>
                                     <div>
                                         <p className='text-white text-lg font-light'>{data.title}</p>
                                     </div>
                                     <div >
                                         <button className='text-white text-lg font-light bg-[#79B4B7]  py-2 px-10 rounded-xl md:rounded-md'>{data.button}</button>
                                     </div>
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

export default CarrouselFavoritos