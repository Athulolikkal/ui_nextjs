import React from 'react'
import Image from 'next/image';
import satrunIogo from '../../../public/images/logo 1.png'

const HeaderTop = () => {
  return (
    <div className="flex justify-between items-center border-b p-2">
       <Image 
          src={satrunIogo} 
          alt="Tangled Up In Green" 
          width={'100'}
        />
        <button className="bg-white border border-main-col px-4 py-2 rounded-lg text-sm">
          Enquire Now
        </button>
      </div>

  )
}
export default HeaderTop