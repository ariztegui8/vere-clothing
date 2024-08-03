import IconFacebook from '@/icons/IconFacebook'
import IconGooglePlus from '@/icons/IconGooglePlus'
import IconInstagram from '@/icons/IconInstagram'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoVtex from '../assets/vtex.png'
import logoAfip from '../assets/afip.png'

const Footer = () => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            <div className='mx-auto '>
                <p className='text-xl text-white mb-4 font-light'>veré</p>
                <Link href='#'>
                    <p className='text-sm text-white font-light mb-3'>Nuestra historia</p>
                </Link>
                <p className='text-sm text-white font-light mb-3'>Sucursales</p>
                <p className='text-sm text-white font-light'>Contacto</p>
            </div>

            <div className='mx-auto '>
                <p className='text-xl text-white mb-4 font-light'>Atención al cliente</p>
                <p className='text-sm text-white font-light mb-3'>Preguntas frecuentes</p>
                <p className='text-sm text-white font-light mb-3'>Términos y condiciones</p>
                <p className='text-sm text-white font-light mb-3'>Políticade privacidad</p>
                <p className='text-sm text-white font-light mb-3'>Cambios y devoluciones</p>
                <p className='text-sm text-white font-light'>Promociones Bancarias</p>
            </div>

            <div className='mx-auto'>
                <p className='text-xl text-white mb-4 font-light'>¡Seguinos en redes!</p>
                <div className='flex items-center gap-2 mb-3'>
                    <IconInstagram className='w-8 text-[#C171D6]'/>
                    <p className='text-sm text-white font-light'>Instagram</p>
                </div>
                <div className='flex items-center gap-2 mb-3'>
                    <IconFacebook className='w-8 text-[#C171D6]' />
                    <p className='text-sm text-white font-light'>Facebook</p>
                </div>
                <div className='flex items-center gap-2 '>
                    <IconGooglePlus className='w-8 text-[#C171D6]' />
                    <p className='text-sm text-white font-light'>YouTube</p>
                </div>
            </div>

            <div className='flex items-end gap-8 mx-auto'>
                <Image src={logoVtex} alt='logo-vtex' />
                <Image src={logoAfip} alt='logo-afip' />
            </div>
        </div>
    )
}

export default Footer