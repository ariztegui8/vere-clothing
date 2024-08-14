'use client'
import { dataCamisas } from '@/db/dataCamisas';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const CarrouselCamisas = () => {

    const router = useRouter()

    const handleCardClick = (id: number) => {
        router.push(`/camisas/${id}`);
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1200 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1200, min: 992 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 992, min: 768 },
            items: 3,
        },
        mobile2: {
            breakpoint: { max: 768, min: 576 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
        }
    };


    return (


        <div className='relative w-full '>
            {/* <Image className='hidden md:flex' fill src={fondoCarrousel} alt='fondo-carrousel' style={{ objectFit: 'cover' }} /> */}
            <div className='flex flex-col gap-4'>
                <h2 className='text-xl text-[#C171D6] font-light'>Productos relacionados</h2>
                <div>
                    <Carousel
                        responsive={responsive}
                        infinite={true}
                    >
                        {dataCamisas.map(data => (
                            <div key={data.id} className='flex flex-col gap-3 w-[210px] m-auto'>
                                <Image onClick={() => handleCardClick(data.id)} width={210} height={260} src={data.image} alt='img-cards' style={{ objectFit: 'cover' }} className='cursor-pointer' />
                                <div className=' gap-2'>
                                    <p className='text-[#303030] text-sm font-light'>{data.title}</p>
                                    <p className='text-[#303030] text-sm font-light'>{data.price}</p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>

    )
}

export default CarrouselCamisas