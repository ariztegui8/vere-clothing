import { IconPropsCombined } from '@/types'
import React from 'react'

const IconCorazon = ({ className, onClick }: IconPropsCombined) => {
    return (
        <svg className={className} onClick={onClick} width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.68566 1C12.2501 1 14.5 6.26314 14.5 6.26314C14.5 6.26314 16.7499 1 21.3143 1C25.0238 1 27.9613 4.62992 27.9993 8.96132C28.0766 17.9522 21.9014 20.3988 15.1328 25.7721C14.9462 25.9206 14.7257 26 14.5 26C14.2743 26 14.0538 25.9206 13.8672 25.7721C7.09929 20.3988 0.92407 17.9522 1.00071 8.96132C1.03867 4.62992 3.97617 1 7.68566 1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

export default IconCorazon