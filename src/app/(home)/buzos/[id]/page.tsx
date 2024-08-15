'use client'
import CarrouselBuzos from '@/components/CarrouselBuzos'
import CarrouselPantalones from '@/components/CarrouselPantalones'
import ModalImages from '@/components/ModalImages'
import TablaTalles from '@/components/TablaTalles'
import { dataBuzos } from '@/db/dataBuzos'
import { formatPrice } from '@/helpers'
import useCarrito from '@/hooks/useCarrito'
import IconStar from '@/icons/IconStar'
import { CartItem, ProductType, StringNull } from '@/types'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'


const BuzosId = () => {

    const { handleAddCart } = useCarrito()

    const [openMenu, setOpenMenu] = useState<StringNull>(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState<StringNull>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTalle, setSelectedTalle] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const { id } = useParams();
    const router = useRouter();

    const toggleMenu = (menu: string) => {
        setOpenMenu(prev => prev === menu ? null : menu);
    }

    const buzosId = dataBuzos.find((data) => data.id === Number(id));

    useEffect(() => {
        if (buzosId) {
            setSelectedImage(buzosId.image.src);
        }
    }, [buzosId]);


    const handleAddToCart = (product: ProductType) => {
        if (handleAddCart) {
            const productWithQuantity = { ...product, quantity } as CartItem;
            handleAddCart(productWithQuantity);
        }
    };

    const handleBuyNow = (product: ProductType) => {
        handleAddToCart(product);
        router.push('/checkout');
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    };

    const handleChangeTalle = (talle: string) => {
        setSelectedTalle(talle);
    }

    const handleChangeColor = (color: string) => {
        setSelectedColor(color);
    }

    const handleChangeImage = (image: StaticImageData) => {
        setSelectedImage(image.src);
    }

    const handleZoomImage = () => {
        if (selectedImage) {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (!buzosId) {
        return <div>Producto no encontrado</div>;
    }


    return (
        <div>
            <div className='pt-24 px-4 md:px-8 mb-10'>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10'>
                    <div className='flex items-center gap-1'>
                        <Link href='/'>
                            <div className='flex items-center gap-1 cursor-pointer'>
                                <MdKeyboardArrowLeft size={20} color='#858484' />
                                <p className='text-xs'>INICIO /</p>
                            </div>
                        </Link>
                        <Link href='/buzos'>
                            <p className='text-xs'>BUZOS /</p>
                        </Link>
                        <p className='text-xs text-[#79B4B7]'>buzo {buzosId.id}</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-8 mb-20'>
                    <div className='w-auto m-auto 2xl:w-3/4 '>
                        <div className='flex flex-col-reverse md:flex-row items-center gap-3'>
                            <div className='flex flex-row md:flex-col gap-4'>
                                <Image onClick={() => handleChangeImage(buzosId.image)} width={95} height={120} src={buzosId.image} alt='img-remeras' className='cursor-pointer object-cover' />
                                <Image onClick={() => handleChangeImage(buzosId.image2)} width={95} height={120} src={buzosId.image2} alt='img-remeras' className='cursor-pointer object-cover' />
                                <Image onClick={() => handleChangeImage(buzosId.image3)} width={95} height={120} src={buzosId.image3} alt='img-remeras' className='cursor-pointer object-cover' />
                            </div>
                            <div className='m-auto'>
                                <Image onClick={handleZoomImage} width={450} height={550} src={selectedImage || buzosId.image} alt='img-remeras' className='cursor-pointer object-cover' />
                            </div>
                        </div>
                    </div>

                    <div className='w-auto m-auto 2xl:w-1/4'>
                        <div className=' mb-10 lg:mb-20 max-w-xs'>
                            <p className='text-3xl text-[#303030] mb-1'>{buzosId.title}</p>
                            <div className='flex items-center gap-3 mb-1'>
                                <p className='text-2xl font-light text-[#303030]'>{formatPrice(buzosId.price)}</p>
                                <div className='flex items-center gap-1'>
                                    <IconStar className='text-[#79B4B7] w-6 h-6' />
                                    <IconStar className='text-[#79B4B7] w-6 h-6' />
                                    <IconStar className='text-[#79B4B7] w-6 h-6' />
                                    <IconStar className='text-[#79B4B7] w-6 h-6' />
                                    <IconStar className='text-[#79B4B7] w-6 h-6' />
                                </div>
                            </div>
                            <p className='text-sm text-[#9B9B9B]'>* 3 Y 6 CUOTAS SIN INTERÉS</p>
                        </div>

                        <div className='mb-6'>
                            <p className='mb-2 font-light'>TALLE</p>
                            <div className='flex items-center gap-2'>
                                <div onClick={() => handleChangeTalle('s')} className={`border-[#79B4B7] w-9 h-7 flex items-center justify-center rounded-md cursor-pointer ${selectedTalle === 's' ? 'border-2' : 'border'}`}>
                                    <p className='font-light'>S</p>
                                </div>
                                <div onClick={() => handleChangeTalle('m')} className={`border-[#79B4B7] w-9 h-7 flex items-center justify-center rounded-md cursor-pointer ${selectedTalle === 'm' ? 'border-2' : 'border'}`}>
                                    <p className='font-light'>M</p>
                                </div>
                                <div onClick={() => handleChangeTalle('l')} className={`border-[#79B4B7] w-9 h-7 flex items-center justify-center rounded-md cursor-pointer ${selectedTalle === 'l' ? 'border-2' : 'border'}`}>
                                    <p className='font-light'>L</p>
                                </div>
                                <div onClick={() => handleChangeTalle('xl')} className={`border-[#79B4B7] w-9 h-7 flex items-center justify-center rounded-md cursor-pointer ${selectedTalle === 'xl' ? 'border-2' : 'border'}`}>
                                    <p className='font-light'>XL</p>
                                </div>
                            </div>
                        </div>

                        <div className='mb-10'>
                            <p className='mb-2 font-light'>COLOR</p>
                            <div className='flex items-center gap-2'>
                                <div onClick={() => handleChangeColor('black')} className={`bg-black w-9 h-7 flex items-center justify-center rounded-md cursor-pointer ${selectedColor === 'black' ? 'border-2 border-[#79B4B7]' : ''}`}>

                                </div>
                                <div onClick={() => handleChangeColor('white')} className={`bg-white w-9 h-7 flex items-center justify-center rounded-md cursor-pointer ${selectedColor === 'white' ? 'border-2 border-[#79B4B7]' : 'border border-black'}`}>

                                </div>
                                <div onClick={() => handleChangeColor('rose')} className={`bg-[#C11A56] w-9 h-7 flex items-center justify-center rounded-md cursor-pointer ${selectedColor === 'rose' ? 'border-2 border-[#79B4B7]' : ''}`}>

                                </div>
                            </div>
                        </div>

                        <div className='flex items-center justify-center w-[120px] py-1 gap-3 border border-[#79B4B7] rounded-md mb-10'>
                            <button onClick={decrementQuantity} className='text-2xl px-3'>-</button>
                            <p className='text-xl'>{quantity}</p>
                            <button onClick={incrementQuantity} className='text-2xl px-3'>+</button>
                        </div>

                        <div className='flex flex-col items-start gap-2 '>
                            <button onClick={() => handleBuyNow(buzosId)} className='py-2 px-6 rounded-md text-white bg-[#C171D6] duration-200 font-light w-[190px]'>Comprar ahora</button>
                            <button onClick={() => handleAddToCart(buzosId)} className='py-2 px-6 rounded-md text-white bg-[#79B4B7] duration-200 font-light w-[190px]'>Agregar al carrito</button>
                        </div>
                    </div>
                </div>

                <div className='mb-16'>
                    <div className='max-w-3xl'>
                        <div onClick={() => toggleMenu('description')} className='flex items-center gap-3 cursor-pointer'>
                            <p className={`text-xl font-light ${openMenu === 'description' ? 'text-[#C171D6]' : ''}`}>DESCRIPCIÓN</p>
                            {openMenu === 'description' ?
                                <MdKeyboardArrowUp size={22} color='#858484' />
                                :
                                <MdKeyboardArrowDown size={22} color='#858484' />
                            }
                        </div>
                        <div className={`transition-all duration-300 w-full ${openMenu === 'description' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            {openMenu === 'description' &&
                                <p className='py-6'>{buzosId.description}</p>
                            }
                        </div>
                    </div>

                    <hr className='my-3' />

                    <div className='max-w-3xl'>
                        <div onClick={() => toggleMenu('reseña')} className='flex items-center gap-3 cursor-pointer'>
                            <p className={`text-xl font-light ${openMenu === 'reseña' ? 'text-[#C171D6]' : ''}`}>RESEÑA</p>
                            {openMenu === 'reseña' ?
                                <MdKeyboardArrowUp size={22} color='#858484' />
                                :
                                <MdKeyboardArrowDown size={22} color='#858484' />
                            }
                        </div>
                        <div className={`transition-all duration-300 w-full ${openMenu === 'reseña' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            {openMenu === 'reseña' &&
                                <div className='py-6'>
                                    <div className='flex items-center gap-1 mb-2'>
                                        <IconStar className='text-[#79B4B7] w-6 h-6' />
                                        <IconStar className='text-[#79B4B7] w-6 h-6' />
                                        <IconStar className='text-[#79B4B7] w-6 h-6' />
                                        <IconStar className='text-[#79B4B7] w-6 h-6' />
                                        <IconStar className='text-[#79B4B7] w-6 h-6' />
                                    </div>
                                    <p>
                                        concentrado y alcanzar el máximo rendimiento. El estilo clásico del cuello redondo se ve
                                        muy bien dentro y fuera del gimnasio, mientras que los detalles reflectantes y el contraste
                                        de colores le dan un estilo deportivo.</p>
                                </div>
                            }
                        </div>
                    </div>

                    <hr className='my-3' />

                    <div >
                        <div onClick={() => toggleMenu('talles')} className='flex items-center gap-3 cursor-pointer'>
                            <p className={`text-xl font-light ${openMenu === 'talles' ? 'text-[#C171D6]' : ''}`}>TABLA DE TALLES</p>
                            {openMenu === 'talles' ?
                                <MdKeyboardArrowUp size={22} color='#858484' />
                                :
                                <MdKeyboardArrowDown size={22} color='#858484' />
                            }
                        </div>
                        <div className={`transition-all duration-300 w-full ${openMenu === 'talles' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                            {openMenu === 'talles' &&
                                <div className='py-6'>
                                    <TablaTalles />
                                </div>
                            }
                        </div>
                    </div>

                    <hr className='my-3' />
                </div>

                <div>
                    <CarrouselBuzos />
                </div>

            </div>
            <ModalImages
                isOpen={isModalOpen}
                onClose={closeModal}
                imageSrc={selectedImage}
                altText="Imagen ampliada"
            />
        </div>
    )
}

export default BuzosId