import React from 'react';
import Image from 'next/image';
import { StringNull } from '@/types';
import IconClose from '@/icons/IconClose';

type ModalImagesProps = {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: StringNull;
    altText: string;
};

const ModalImages = ({ isOpen, onClose, imageSrc, altText }: ModalImagesProps) => {
    if (!isOpen || !imageSrc) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="relative ">
               <div>
                <IconClose 
                    onClick={onClose}
                    className='text-[#79B4B7] md:text-white absolute top 0 right-0 m-3 cursor-pointer w-6 h-6'
                />
               </div>
                <Image
                    src={imageSrc}
                    alt={altText}
                    width={1200}
                    height={1600}
                    style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }}
                />
            </div>
        </div>
    );
};

export default ModalImages;
