'use client'
import Image from "next/image";
import IconClose from "@/icons/IconClose";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import useCarrito from "@/hooks/useCarrito";
import { formatPrice } from "@/helpers";
import { useState } from "react";
import { useRouter } from "next/navigation";
import logo from '../../assets/logo.svg'


const Checkout = () => {

  const { cartItems, deleteItem, addQuantity, deleteQuantity, vaciarCarrito, subtotal, total } = useCarrito();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handlePagoSuccess = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/pago');
      vaciarCarrito()
    }, 3000);
  };

  const clickHome = () => {
    router.push('/')
  }

  return (

    <div>
      <div className="py-4 border border-b-[#A3A3A3] border-t-0 border-l-0 border-r-0 px-4 md:px-8 mb-12">
        <Image onClick={clickHome} width={80} src={logo} alt='logo' className="cursor-pointer" />
      </div>
      <div className='px-4 md:px-8 '>

        <div className="mb-6">
          <p className='text-xl font-medium'>CARRITO DE COMPRAS</p>
        </div>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='w-full md:w-auto lg:w-3/5 2xl:w-3/4 mx-auto'>
            <div className="overscroll-x-auto sm:overscroll-none customScrollbar mb-6">
              <table className="min-w-full border border-[#B4B4B4]">
                <thead>
                  <tr className="text-left">
                    <th className="text-[#24272B] font-medium p-4 w-full">Producto</th>
                    <th className="text-[#24272B] font-medium p-4">Cantidad</th>
                    <th className="text-[#24272B] font-medium p-4">Precio</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="border-t border-[#C4C4C4]">
                  {cartItems.map(item => (
                    <tr key={item.id}>
                      <td className="p-4">
                        <div className='flex flex-col sm:flex-row gap-2'>
                          <Image width={80} height={100} src={item.image} alt='img-remeras' style={{ objectFit: 'cover' }} className='cursor-pointer' />
                          <p className='text-xs text-[#303030]'>{item.title}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className='flex items-center justify-center gap-1 border border-[#79B4B7] rounded-md w-[65px] mb-3'>
                          <button onClick={() => deleteQuantity(item.id)} className='px-2'>-</button>
                          <p>{item.quantity}</p>
                          <button onClick={() => addQuantity(item.id)} className='px-2'>+</button>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className='text-sm font-semibold'>{formatPrice(item.price * item.quantity)}</p>
                          <p className='text-sm text-[#909294] line-through'>$6.390</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <IconClose onClick={() => deleteItem(item.id)} className='w-3 h-3 text-[#909294] cursor-pointer' />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-xs mb-3">Precio incluye IVA. El costo del despacho se incluye al finalizar la compra.</p>
              <Link href='/'>
                <button className="border border-[#79B4B7] rounded-md text-[#79B4B7] text-sm p-1 flex items-center gap-1">
                  <MdKeyboardArrowLeft size={18} color='#79B4B7' />
                  SEGUIR COMPRANDO
                </button>
              </Link>
            </div>
          </div>

          <div className='w-full md:w-auto lg:w-2/5 2xl:w-1/4 mx-auto'>
            <div className="p-5 border border-[#C4C4C4]">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Código de descuento"
                  className="px-2 h-10 outline-none w-full border border-[#EEEEEE] rounded-md uppercase"
                />
                <button className="border border-[#79B4B7] rounded-md text-[#79B4B7] p-2 h-10">APLICAR</button>
              </div>

              <hr className='my-3' />

              <div className="flex items-center justify-between">
                <p>Subtotal</p>
                <p>{formatPrice(subtotal)}</p>
              </div>

              <hr className='my-3' />

              <div className="flex items-center justify-between mb-4">
                <p>Descuentos</p>
                <p>-</p>
              </div>

              <div className="flex items-center justify-between mb-6">
                <p className="font-medium">Total</p>
                <p className="text-lg font-semibold">{formatPrice(total)}</p>
              </div>

              <div>
                <button onClick={handlePagoSuccess} className={`py-2 px-6 rounded-md text-white bg-[#79B4B7] duration-200 font-light w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''} `}>
                  {loading ? 'Procesando...' : 'Comprar ahora'}
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


  );
};

export default Checkout;