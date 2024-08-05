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
        <div className='grid grid-cols1 md:grid-cols-4 gap-10 md:gap-4'>
            <div className='mx-0 md:mx-auto'>
                <Link href='/'>
                    <p className='text-xl text-white mb-4 font-light'>veré</p>
                </Link>
                <Link href='#'>
                    <p className='text-sm text-white font-light mb-3'>Nuestra historia</p>
                </Link>
                <Link href='#'>
                    <p className='text-sm text-white font-light mb-3'>Sucursales</p>
                </Link>
                <Link href='#'>
                    <p className='text-sm text-white font-light'>Contacto</p>
                </Link>
            </div>

            <div className='mx-0 md:mx-auto '>
                <p className='text-xl text-white mb-4 font-light'>Atención al cliente</p>
                <Link href='#'>
                    <p className='text-sm text-white font-light mb-3'>Preguntas frecuentes</p>
                </Link>
                <Link href='#'>
                    <p className='text-sm text-white font-light mb-3'>Términos y condiciones</p>
                </Link>
                <Link href='#'>
                    <p className='text-sm text-white font-light mb-3'>Políticade privacidad</p>
                </Link>
                <Link href='#'>
                    <p className='text-sm text-white font-light mb-3'>Cambios y devoluciones</p>
                </Link>
                <Link href='#'>
                    <p className='text-sm text-white font-light'>Promociones Bancarias</p>
                </Link>
            </div>

            <div className='mx-0 md:mx-auto'>
                <p className='text-xl text-white mb-4 font-light'>¡Seguinos en redes!</p>
                <Link href='#'>
                    <div className='flex items-center gap-2 mb-3'>
                        <IconInstagram className='w-8 text-[#C171D6]' />
                        <p className='text-sm text-white font-light'>Instagram</p>
                    </div>
                </Link>
                <Link href='#'>
                    <div className='flex items-center gap-2 mb-3'>
                        <IconFacebook className='w-8 text-[#C171D6]' />
                        <p className='text-sm text-white font-light'>Facebook</p>
                    </div>
                </Link>
                <Link href='#'>
                    <div className='flex items-center gap-2 '>
                        <IconGooglePlus className='w-8 text-[#C171D6]' />
                        <p className='text-sm text-white font-light'>YouTube</p>
                    </div>
                </Link>
            </div>

            <div className='flex items-end gap-8 mx-0 md:mx-auto'>
                <Image src={logoVtex} alt='logo-vtex' />
                <Image src={logoAfip} alt='logo-afip' />
            </div>
        </div>
    )
}

export default Footer