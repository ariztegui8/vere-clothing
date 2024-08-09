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

export type ProductType  = {
    id: number;
    image: StaticImageData;
    title: string;
    price: string;
    new22?: boolean;
}

export type CardCarrouselFav = {
    id: number;
    image: StaticImageData;
    title: string;
    button: string;
}

export type CarritoContextType = {
    addToCart: (product: ProductType) => void
    cartItems: ProductType[]
}