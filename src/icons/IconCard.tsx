import { IconProps } from '@/types'
import React from 'react'

const IconCard = ({ className } : IconProps) => {
    return (
        <svg className={className} width="64" height="41" viewBox="0 0 64 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1.00003" width="62" height="38.96" rx="4" stroke="#C171D6" strokeWidth="2" />
            <rect x="1" y="9.00003" width="62" height="7" stroke="#C171D6" strokeWidth="2" />
            <path d="M10 26H54C54 26.5523 53.5523 27 53 27H11C10.4477 27 10 26.5523 10 26Z" fill="#C171D6" />
            <path d="M16.64 30.72H47.36C47.36 31.427 46.7869 32 46.08 32H17.92C17.2131 32 16.64 31.427 16.64 30.72Z" fill="#C171D6" />
        </svg>
    )
}

export default IconCard