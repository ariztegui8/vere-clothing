
import Link from "next/link";
import { GoCheckCircle } from "react-icons/go";


const PaymentSuccess = () => {


    return (
        <div className='flex flex-col items-center justify-center w-full h-lvh px-4 md:px-8'>

            <div className='flex flex-col items-center justify-center gap-8 text-center px-4 w-auto md:w-80 mx-auto'>
                <div>
                    <GoCheckCircle size={30} />
                </div>
                <div>
                    <p className='text-2xl font-medium text-[#24272B] mb-1'>¡Pago Exitoso!</p>
                    <p className='text-[#818181] text-sm'>Tu pago ha sido completado.</p>
                </div>
                <div className='w-full'>
                    <Link href='/'>
                        <button className='py-2 px-6 rounded-md text-white bg-[#C171D6] duration-200 font-light w-full'>
                            Finalizar
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
