import CarritoContext from "@/context/CarritoProvider"
import { CarritoContextType } from "@/types";
import { useContext } from "react";


const useCarrito = (): CarritoContextType => {
    const context = useContext(CarritoContext);
    if (context === undefined) {
      throw new Error('Error context');
    }
    return context;
  };

export default useCarrito