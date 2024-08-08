import Image from "next/image";
import remera1 from '../../assets/remeras/remera1.png'
import IconClose from "@/icons/IconClose";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import useCarrito from "@/hooks/useCarrito";

const Checkout = () => {

    const {name} = useCarrito()
    console.log(name);
    
  return (

    <div className='py-24 px-4 md:px-8 '>
      <div className="mb-6">
        <p className='text-xl font-medium'>CARRITO DE COMPRAS</p>
      </div>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='w-full md:w-auto lg:w-3/5 2xl:w-3/4 mx-auto'>
          <div className="overflow-x-auto customScrollbar mb-6">
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
                <tr>
                  <td className="p-4">
                    <div className='flex flex-col sm:flex-row gap-2'>
                      <Image width={80} height={100} src={remera1} alt='img-remeras' style={{ objectFit: 'cover' }} className='cursor-pointer' />
                      <p className='text-xs text-[#303030]'>Remera Road White</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className='flex items-center justify-center gap-1 border border-[#79B4B7] rounded-md w-[65px] mb-3'>
                      <button className='px-2'>-</button>
                      <p>1</p>
                      <button className='px-2'>+</button>
                    </div>
                  </td>
                  <td className="p-4">
                    <div>
                      <p className='text-sm font-semibold'>$6.390</p>
                      <p className='text-sm text-[#909294]'>$6.390</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <div>
                      <IconClose className='w-3 h-3 text-[#909294] cursor-pointer' />
                    </div>
                  </td>
                </tr>
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
                className="px-2 h-10 outline-none w-full border border-[#EEEEEE] rounded-md"
              />
              <button className="border border-[#79B4B7] rounded-md text-[#79B4B7] p-2 h-10">APLICAR</button>
            </div>

            <hr className='my-3' />

            <div className="flex items-center justify-between">
              <p>Subtotal</p>
              <p>$3.560</p>
            </div>

            <hr className='my-3' />

            <div className="flex items-center justify-between mb-4">
              <p>Descuentos</p>
              <p>-</p>
            </div>

            <div className="flex items-center justify-between mb-6">
              <p className="font-medium">Total</p>
              <p className="text-lg font-semibold">$3.560</p>
            </div>

            <div>
              <button className='py-2 px-6 rounded-md text-white bg-[#79B4B7] duration-200 font-light w-full'>Comprar ahora</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Checkout;