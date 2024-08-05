import React from 'react'
import PreSale1 from './PreSale1'
import PreSale2 from './PreSale2'

const SectionPreSale = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <PreSale1 />
            </div>
            <div className='hidden md:flex'>
                <PreSale2 />
            </div>
        </div>
    )
}

export default SectionPreSale