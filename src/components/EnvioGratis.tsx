import IconCamion from '@/icons/IconCamion'
import IconCard from '@/icons/IconCard'
import React from 'react'

const EnvioGratis = () => {
  return (
    <div className='py-5 px-20 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <IconCamion />
            <p>ENVÍOS GRATIS POR COMPRAS SUPERIORES A $10.000</p>
        </div>
        <div className='flex items-center gap-3'>
            <IconCard />
            <p>3 Y 6 CUOTAS SIN INTERÉS</p>
        </div>
    </div>
  )
}

export default EnvioGratis