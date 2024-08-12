'use client'
import { CarritoContextType, ProductType, CartItem } from "@/types"
import { createContext, useMemo, useState } from "react"
import { usePathname } from "next/navigation";

type CarritoProviderProps = {
    children: React.ReactNode
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined)

const CarritoProvider = ({ children }: CarritoProviderProps) => {

    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const MAX_QUANTITY = 10;
    const MIN_QUANTITY = 1;

    const handleAddCart = (item: CartItem) => {
        const itemExists = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (itemExists >= 0) {
            const updatedCart = [...cartItems];
            updatedCart[itemExists].quantity += item.quantity;
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, item]);
        }
    };

    const deleteItem = (id: ProductType['id']) => {
        const newCart = cartItems.filter(item => item.id !== id);
        setCartItems(newCart);
    };

    const addQuantity = (id: ProductType['id']) => {
        const newCart = cartItems.map(item => {
            if (item.id === id && item.quantity < MAX_QUANTITY) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });
        setCartItems(newCart);
    };

    const deleteQuantity = (id: ProductType['id']) => {
        const newCart = cartItems.map(item => {
            if (item.id === id && item.quantity > MIN_QUANTITY) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                };
            }
            return item;
        });
        setCartItems(newCart);
    };

    const subtotal = useMemo(() => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [cartItems]);

    const total = useMemo(() => {
        return subtotal;
    }, [subtotal]);

    const totalItems = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    }, [cartItems]);

    const vaciarCarrito = () => {
        setCartItems([]);
    }

    const pathname = usePathname();
    const isCheckout = pathname === '/checkout';

    return (
        <CarritoContext.Provider
            value={{
                cartItems,
                handleAddCart,
                deleteItem,
                addQuantity,
                deleteQuantity,
                isCheckout,
                subtotal,
                total,
                totalItems,
                vaciarCarrito
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
