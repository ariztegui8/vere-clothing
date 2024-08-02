import { IconProps } from '@/types'
import React from 'react'

const IconSearch = ({ className } : IconProps) => {
    return (
        <svg className={className} width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.187 13.1749C23.187 19.5187 18.2032 24.61 12.1177 24.61C6.03218 24.61 1.04834 19.5187 1.04834 13.1749C1.04834 6.83112 6.03218 1.73981 12.1177 1.73981C18.2032 1.73981 23.187 6.83112 23.187 13.1749Z" stroke="#C171D6" stroke-width="2" />
            <path d="M20.5862 22.1141L26.4655 28.0205C27.0395 28.5971 27.1387 29.4673 26.7641 30.1454L19.6737 23.0224L20.5862 22.1141Z" fill="#C171D6" stroke="#C171D6" />
        </svg>
    )
}

export default IconSearch