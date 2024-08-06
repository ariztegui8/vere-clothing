import { IconPropsCombined } from '@/types'
import React from 'react'

const IconCorazonLleno = ({ className, onClick }: IconPropsCombined) => {
    return (
        <svg className={className} onClick={onClick} width="29" height="27" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.41899 0C14.1668 0 17 6.52629 17 6.52629C17 6.52629 19.8332 0 25.581 0C30.2522 0 33.9513 4.5011 33.9991 9.87204C34.0965 21.0208 26.3203 24.0545 17.7968 30.7174C17.5618 30.9015 17.2842 31 17 31C16.7158 31 16.4381 30.9015 16.2032 30.7174C7.68059 24.0545 -0.0956154 21.0208 0.000892639 9.87204C0.0487022 4.5011 3.74777 0 8.41899 0Z" fill="currentColor" />
        </svg>
    )
}

export default IconCorazonLleno