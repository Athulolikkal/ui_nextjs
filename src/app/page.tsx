// pages/index.js or any other page/component
'use client'

import { useState } from 'react';
import Modal from '../app/components/modal';
import Image from 'next/image';
import mapImage from '../../public/images/Mask group (2).png'
import liberary from '../../public/images/Liberary.png'
import MainImage from './components/modal_page/mainImage';
import PropertyItem from './components/modal_page/propertyItem';

const ExamplePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const aminityArray = ["Children's Library", 'Amphitheatre', 'Basket ball/volley ball', 'Heated pool', 'Tree Museum', 'Cycling track', 'Jogging track', 'Pet park']


  return (
    <div className="min-h-screen mx-w-full flex items-center justify-center bg-gray-100">

      {!isModalOpen && <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="mx-w-full mx-auto bg-white">

          <div className="flex flex-col lg:flex-row justify-evenly lg:p-5">
            {/* main image section */}
            <div className="lg:w-2/4 lg:pr-6 h-full">
              <MainImage />
            </div>

            <div className='lg:w-2/4'>

              <div className="p-4">
                <h2 className="text-xl mb-2 lg:text-md">Tangled Up In Green</h2>
                <p className="text-sm text-gray-600 mb-4 ">
                  Tangled Up In Green, a vision of Total Environment, is a luxury plotted development nestled amidst the lush landscapes of Devanahalli. This peaceful hideaway in North Bangalore sits on 115 acres and has exclusive residential plots with a modern design and green living blend. The plots range from 1800 sq. ft. to 7200 sq. ft. You could be fascinated by the botanical wonders found at the Tree Museum or...
                </p>
                <hr className="border-t-1 border-hor-col hidden lg:block" />

                <div className="flex flex-col lg:flex-row justify-evenly ">
                  <div className='lg:w-1/2'>
                    <PropertyItem />
                    <hr className="border-t-1 border-hor-col hidden lg:block" />
                    <div className='hidden lg:block mt-3'>
                      <h3 className="font-semibold mb-2">30+ Amenities</h3>
                      {/* amenities */}
                      <div className="grid grid-cols-2 gap-4">
                        {aminityArray.map((amenity, index) => (
                          <div key={index} className="flex items-center">
                            <Image
                              alt='amenityImg'
                              src={liberary}
                              className='bg-sub-col p-1 rounded-lg mr-2'
                              width={30}

                            />
                            <span className="text-sm">
                              {amenity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:block m-3 lg:w-1/2">
                    <Image
                      src={mapImage}
                      alt="Location Map"
                      width={600}
                      height={600}
                      className="w-full max-h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>



                {/* Buttons */}
                <div className="flex space-x-4 mb-4 lg:mt-4 w-full ">
                  <div className='hidden lg:block space-x-4 w-1/2'>
                    <div className='w-full flex justify-evenly space-x-4'>
                      <button className="flex-1 bg-white text-main-col border border-main-col py-2  rounded-lg text-sm hover:text-white hover:bg-yellow-600">
                        Chat Now
                      </button>
                      <button className="flex-1 bg-white text-main-col border border-main-col py-2 rounded-lg text-sm  hover:text-white hover:bg-yellow-600">
                        Call Now
                      </button>
                    </div>

                  </div>

                  <button className="flex-1 bg-white text-main-col border border-main-col py-2 rounded-lg text-sm lg:hidden  hover:text-white hover:bg-main-col">
                    Know More
                  </button>
                  <button className="flex-1 bg-main-col text-white py-2 rounded-lg text-sm w-1/2">
                    Schedule site visit
                  </button>
                </div>

                {/* Amenities */}
                <div className='lg:hidden'>
                  <h3 className="font-semibold mb-2">Amenities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {aminityArray.map((amenity, index) => (
                      <div key={index} className="flex items-center">
                        <Image alt='amenityImg' src={liberary} className='bg-sub-col p-1 rounded-xl mr-2' />{amenity}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* map image */}
              <div className="p-4 lg:hidden">
                <Image
                  src={mapImage}
                  alt="Location Map"
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>


          </div>



        </div>
      </Modal>
    </div>
  );
};

export default ExamplePage;


