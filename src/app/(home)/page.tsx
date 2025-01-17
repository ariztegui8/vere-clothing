import BannerDesktop from '@/components/BannerDesktop'
import BannerMobile from '@/components/BannerMobile'
import CarrouselColection from '@/components/CarrouselColection'
import CarrouselFavoritos from '@/components/CarrouselFavoritos'
import Categorias from '@/components/Categorias'
import EnvioGratis from '@/components/EnvioGratis'
import Favoritos from '@/components/Favoritos'
import PreSale2 from '@/components/PreSale2'
import SectionJeans from '@/components/SectionJeans'
import SectionPreSale from '@/components/SectionPreSale'
import Subscription from '@/components/Subscription'


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
      <div className='px-4 md:px-8 bg-white md:bg-[#AB8D29]'>
        <SectionPreSale />
      </div>
      <div className='py-8 md:py-12 px-4 md:px-8 '>
        <Categorias />
      </div>
      <div>
        <CarrouselColection />
      </div>
      <div className='py-6 md:py-16 px-4 md:px-8'>
        <div className='hidden md:block'>
          <Favoritos />
        </div>
        <div className='flex md:hidden'>
          <CarrouselFavoritos />
        </div>
      </div>
      <div className='px-4 mb-10 md:hidden'>
        <PreSale2 />
      </div>
      <div className='mb-8 md:mb-12 px-4 md:px-0'>
        <SectionJeans />
      </div>
      <div>
        <Subscription />
      </div>
    </div>
  )
}

export default Home
