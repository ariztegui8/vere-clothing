import Image from 'next/image'
import React from 'react'
import catRemeras from '../assets/cat-remeras.png'
import catCamisas from '../assets/cat-camisas.png'
import catPantalones from '../assets/cat-pantalones.png'
import catAccesorios from '../assets/cat-accesorios.png'

const Categorias = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
        <div className='flex flex-col items-center gap-3'>
            <Image width={300} height={300}  src={catRemeras} alt='cat-remeras' style={{ objectFit: 'cover' }} />
            <p>REMERAS</p>
        </div>
        <div className='flex flex-col items-center gap-3'>
            <Image width={300} height={300} src={catCamisas} alt='cat-camisas' style={{ objectFit: 'cover' }} />
            <p>CAMISAS</p>
        </div>
        <div className='flex flex-col items-center gap-3'>
            <Image width={300} height={300} src={catPantalones} alt='cat-pantalones' style={{ objectFit: 'cover' }} />
            <p>PANTALONES</p>
        </div>
        <div className='flex flex-col items-center gap-3'>
            <Image width={300} height={300} src={catAccesorios} alt='cat-accesorios' style={{ objectFit: 'cover' }} />
            <p>ACCESORIOS</p>
        </div>
    </div>
  )
}

export default Categorias