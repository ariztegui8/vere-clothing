import { StaticImageData } from "next/image";

export type IconProps = {
    className?: string;
}

export type CardCarrousel = {
    id: number;
    image: StaticImageData;
    title: string;
    price: string;
}

export type CardCarrouselFav = {
    id: number;
    image: StaticImageData;
    title: string;
    button: string;
}