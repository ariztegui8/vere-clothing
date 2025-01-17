import { IconPropsCombined } from '@/types'
import React from 'react'



const IconClose = ({ className, onClick }: IconPropsCombined) => {
    return (
        <svg className={className} onClick={onClick} width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L19.5 18.5M37 35L19.5 18.5M19.5 18.5L37 2L2 35" stroke="currentColor" strokeWidth="4" />
        </svg>


    )
}

export default IconClose