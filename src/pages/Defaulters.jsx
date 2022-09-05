import React from 'react';
import { BsFilter, BsFilePerson, BsThreeDotsVertical } from 'react-icons/bs';
import { BiUpArrowAlt, BiError } from 'react-icons/bi';
import { RiSecurePaymentLine } from 'react-icons/ri'
import { OverviewTable, Title } from '../components'

const Defaulters = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 sm:pt-20 md:p-10 ">
       <div className='flex justify-end pb-5  items-end'>
      <button
      className='bg-white text-end rounded-xl flex gap-3 w-48 p-4 border-1 cursor-pointer'>
       <BsFilter className='font-bold text-black' fontSize={28} color="black"/> Filter     
      </button>
    </div>
    <Title title="Defaulters" />

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6'>
      <div className='rounded w-full h-auto p-10 bg-white'>
        <div className='flex justify-between'>
          <RiSecurePaymentLine fontSize={38} className="bg-green-500 rounded-full p-2"/>
          <BsThreeDotsVertical fontSize={28} className="text-gray-500" />
          </div>
          <div className='pt-5'>
              <p className='text-14 text-gray-400'>Total default amount(NGN)</p>
              <p className='font-normal text-3xl pt-3 text-black'>3,160,010</p>
          </div>
      </div>
      <div className='rounded w-full h-auto p-10 bg-white'>
          <div className='flex justify-between'>
          <BiError fontSize={38} className="bg-gray-200 rounded-full p-2"/>
          <BsThreeDotsVertical fontSize={28} className="text-gray-500" />
          </div>
          <p className='text-14 pt-5 text-gray-400'>Total default</p>
          <div className='flex justify-between'>
          <p className='font-normal text-3xl pt-3 text-black'>890,100</p>
          <div className=' flex bg-red-100 items-end text-end text-red-800 rounded-xl h-10 p-2 w-16'><BiUpArrowAlt fontSize={20}/>10%</div>
          </div>
      </div>
      <div className='rounded w-full h-auto p-10 bg-white'>
          <div className='flex justify-between'>
          <BsFilePerson fontSize={38} className="bg-yellow-500 rounded-full p-2"/>
          <BsThreeDotsVertical fontSize={28} className="text-gray-500" />
          </div>
        <p className='text-14 pt-5 text-gray-400'>Total numbers of default</p>
          <div className='flex justify-between'>
          <p className='font-normal text-3xl pt-3 text-black'>316</p>
          <div className=' flex bg-green-100 items-end text-end text-green-800 rounded-xl  p-2 h-10 w-16'><BiUpArrowAlt fontSize={20}/>100%</div>
          </div>
      </div>
    </div>

  <div className="mt-4">
      <OverviewTable  placeholder="        Search for driver's name" />
  </div>
</div>
  )
}

export default Defaulters