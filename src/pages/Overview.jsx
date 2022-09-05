import React from 'react'
import { RiExchangeDollarLine, RiFileList3Line, RiSecurePaymentLine } from 'react-icons/ri'
import { OverviewTable, Title } from '../components'


const Overview = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 sm:pt-20 md:p-10 ">
      <Title title="Overview" />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6'>
        <div className='rounded w-full h-auto p-10 bg-white'>
            <RiSecurePaymentLine fontSize={38} className="bg-green-500 rounded-full p-2"/>
            <div className='pt-5'>
                <p className='text-14 text-gray-400'>Total outstanding balance</p>
                <p className='font-normal text-3xl pt-3 text-black'>6,078,288</p>
            </div>
        </div>
        <div className='rounded w-full h-auto p-10 bg-white'>
            <RiExchangeDollarLine fontSize={38} className="bg-gray-200 rounded-full p-2"/>
            <div className='pt-5'>
                <p className='text-14 text-gray-400'>Total repayment pending</p>
                <p className='font-normal text-3xl pt-3 text-black'>72,864</p>
            </div>
        </div>
        <div className='rounded w-full h-auto p-10 bg-white'>
            <RiFileList3Line fontSize={38} className="bg-yellow-500 rounded-full p-2"/>
            <div className='pt-5'>
                <p className='text-14 text-gray-400'>Total transaction counts</p>
                <p className='font-normal text-3xl pt-3 text-black'>3,062</p>
            </div>
        </div>
      </div>

    <div className="mt-4">
        <OverviewTable placeholder="        Search for customer's name"/>
    </div>
  </div>
  )
}

export default Overview