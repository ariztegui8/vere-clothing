'use client'
import { CarritoContextType, ProductType } from "@/types"
import { createContext, useState } from "react"

type CarritoProviderProps = {
    children: React.ReactNode
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined)

const CarritoProvider = ({ children }: CarritoProviderProps) => {

    const [cartItems, setCartItems] = useState<ProductType[]>([]);

    const addToCart = (product: ProductType) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    return (
        <CarritoContext.Provider
            value={{
                cartItems,
                addToCart,
            }}
        >
            {children}
        </CarritoContext.Provider>
    )
}

export {
    CarritoProvider
}

export default CarritoContext
