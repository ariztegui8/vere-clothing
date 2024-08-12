import { StaticImageData } from "next/image";

export type IconProps = {
    className?: string;
}

export type IconPropsClick = {
    onClick?: () => void;
}

export type IconPropsCombined = IconProps & IconPropsClick;

export type CardCarrousel = {
    id: number;
    image: StaticImageData;
    title: string;
    price: string;
}

export type ProductType = {
    id: number;
    image: StaticImageData;
    title: string;
    price: number;
    new22?: boolean;
}

export type CardCarrouselFav = {
    id: number;
    image: StaticImageData;
    title: string;
    button: string;
}

export type CarritoContextType = {
    cartItems: CartItem[];
    handleAddCart: (item: CartItem) => void;
    deleteItem: (id: ProductType["id"]) => void
    addQuantity: (id: ProductType["id"]) => void
    deleteQuantity: (id: ProductType["id"]) => void
    vaciarCarrito: () => void
    isCheckout: boolean
    subtotal: number;
    total: number;
    totalItems: number;
}

export type CartItem = ProductType & {
    quantity: number;
}