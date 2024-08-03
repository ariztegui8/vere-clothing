import BannerDesktop from '@/components/BannerDesktop'
import BannerMobile from '@/components/BannerMobile'
import CarrouselColection from '@/components/CarrouselColection'
import Categorias from '@/components/Categorias'
import EnvioGratis from '@/components/EnvioGratis'
import Favoritos from '@/components/Favoritos'
import Footer from '@/components/Footer'
import SectionJeans from '@/components/SectionJeans'
import SectionPreSale from '@/components/SectionPreSale'
import Subscription from '@/components/Subscription'
import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='px-4 md:px-8 pt-10'>
       <div className='hidden lg:flex'>
        <BannerDesktop />
       </div>
       <div className='flex lg:hidden '>
       <BannerMobile />
       </div>
        
      </div>
      <div>
        <EnvioGratis />
      </div>
      <div className='px-8 bg-[#AB8D29]'>
        <SectionPreSale />
      </div>
      <div className='py-12 px-8 '>
        <Categorias />
      </div>
      <div>
        <CarrouselColection />
      </div>
      <div className='py-16 px-8'>
        <Favoritos />
      </div>
      <div className='mb-12'>
        <SectionJeans />
      </div>
      <div>
        <Subscription />
      </div>
      <div className='bg-[#303030] py-8 px-12'>
        <Footer />
      </div>
    </div>
  )
}

export default Home