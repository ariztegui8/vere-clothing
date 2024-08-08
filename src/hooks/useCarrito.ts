import CarritoContext from "@/context/CarritoProvider"
import { CarritoContextType } from "@/types";
import { useContext } from "react";


const useCarrito = (): CarritoContextType => {
    const context = useContext(CarritoContext);
    if (context === undefined) {
      throw new Error('useCarrito se usa en CarritoProvider');
    }
    return context;
  };

export default useCarrito