'use client'
import { CarritoContextType } from "@/types"
import { createContext, useState } from "react"


type CarritoProviderProps = {
    children: React.ReactNode
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined)

const CarritoProvider = ({ children } : CarritoProviderProps) => {

    const [name, setName] = useState('Hola locaso');


    return (
        <CarritoContext.Provider
            value={{
                name
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