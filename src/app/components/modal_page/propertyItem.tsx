import React from 'react'
import ruppeeIcon from '../../../../public/images/rupee 1.png'
import propertyIcon from '../../../../public/images/plot size.png'
import areaIcon from '../../../../public/images/total units.png'
import sizeIcon from '../../../../public/images/Size 1.png'
import Image from 'next/image'

const PropertyItem = () => {
    const propertyDetails = [
        {
            icon: ruppeeIcon,
            value: '14 Cr',
            subValue: ' onwards (₹ 6990/sq.ft.)'
        },
        {
            icon: propertyIcon,
            value: 'Plot size',
            subValue: '1800 sq.ft. to 7200 sq. ft.'
        },
        {
            icon: sizeIcon,
            value: 'Area',
            subValue: '115 Acres & 16 Guntas'
        },
        {
            icon: areaIcon,
            value: 'Total',
            subValue: 'Units 968'
        },
    ]

    return (

        <div className="overflow-x-auto lg:overflow-x-auto whitespace-nowrap mb-4 scrollbar-hidden">
            <div className="flex flex-wrap lg:flex-nowrap gap-2">
                {propertyDetails.map((property, index) => (
                    <div key={index} className="flex items-center w-48 lg:w-auto flex-shrink-0">

                        <Image src={property.icon} alt='propertyIcon' className='p-2' width={50} height={50} />
                        <div className="ml-1">
                            <p className="text-xs lg:text-sm text-gray-500">{property.value}</p>
                            <p className="text-xs text-gray-500">{property.subValue}</p>
                        </div>

                    </div>
                ))}
            </div>


        </div>

    )
}

export default PropertyItem
