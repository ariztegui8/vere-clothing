import IconCamion from '@/icons/IconCamion'
import IconCard from '@/icons/IconCard'
import React from 'react'

const EnvioGratis = () => {
  return (
    <div className='py-5 p-4 md:px-20 flex items-center justify-center lg:justify-between gap-2'>
        <div className='flex items-center gap-3'>
            <IconCamion className='w-14 h-10 lg:w-auto lg:h-auto'/>
            <p className='text-sm lg:text-base'>ENVÍOS GRATIS POR COMPRAS SUPERIORES A $10.000</p>
        </div>
        <div className='hidden lg:flex items-center gap-3'>
            <IconCard />
            <p>3 Y 6 CUOTAS SIN INTERÉS</p>
        </div>
    </div>
  )
}

export default EnvioGratis