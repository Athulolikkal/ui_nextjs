import React, { useState } from 'react'
import mainImage from '../../../../public/images/2259E.png'
import oneImage from '../../../../public/images/Group 1000002089.png'
import secondImage from '../../../../public/images/Mask group (1).png'
import thirdImage from '../../../../public/images/Mask group.png'
import Image from 'next/image'

const MainImage = () => {
    const [isMainImage, setIsMainImage] = useState(0)
    const ItemImages = [mainImage, oneImage, secondImage, thirdImage]
    return (
        <div>
            <div className="relative">
                <Image
                    src={ItemImages[isMainImage]}
                    alt="Item Image"
                    width={800}
                    height={400}
                    className="w-full  object-cover"
                />
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 lg:hidden">
                    {ItemImages.map((_, i) => (
                        <div key={i} onClick={() => setIsMainImage(i)} className={`w-2 h-2 rounded-full ${isMainImage === i ? 'bg-white' : 'bg-gray-400'}`}></div>
                    ))}
                </div>
            </div>
            <div className='flex mt-3 hidden lg:flex'>
                {ItemImages.map((_, i) => {
                    if (i !== isMainImage) {
                        return (
                            <div className='p-1' onClick={() => setIsMainImage(i)}>
                                <Image
                                    src={ItemImages[i]}
                                    alt="Item Image"
                                    width={300}
                                    height={200}
                                    className="object-contain"
                                />
                            </div>

                        )
                    }
                })}
            </div>

        </div>

    )
}

export default MainImage
