import React from 'react'
import PreSale1 from './PreSale1'
import PreSale2 from './PreSale2'

const SectionPreSale = () => {
    return (
        <div className='grid grid-cols-2'>
            <PreSale1 />
            <PreSale2 />
        </div>
    )
}

export default SectionPreSale