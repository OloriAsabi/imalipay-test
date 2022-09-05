import React from 'react'
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi';
import { OverviewTable, Title } from '../components'


const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 sm:pt-20 md:p-10 ">
    <Title title="Customers" />

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6'>
      <div className='rounded w-full h-auto p-10 bg-white'>
      <p className='text-xl font-meduim text-black'>Total customers</p>
          <div className='pt-5'>
              <p className='font-bold text-3xl pt-3 text-black'>2,240</p>
           </div>
              <div className='  inline-flex text-green-800 rounded-xl pt-3 space-x-3'>
                <BiUpArrowAlt fontSize={20}/> 40% 
               <span className='text-gray-500'> vs last month</span>
               </div>
      </div>
      <div className='rounded w-full h-auto p-10 bg-white'>
      <p className='text-xl font-meduim text-black'>Total repayment pending</p>
          <div className='pt-5'>
              <p className='font-bold text-3xl pt-3 text-black'>1,210</p>
          </div>
           <div className='  inline-flex text-red-800 rounded-xl pt-3 space-x-3'>
                <BiDownArrowAlt fontSize={20}/>  10% 
                  <span className='text-gray-500'>vs last month</span>
               </div>
      </div>
      <div className='rounded w-full h-auto p-10 bg-white'>
      <p className='text-xl font-meduim text-black'>Total transaction counts</p>
          <div className='pt-5'>
              <p className='font-bold text-3xl pt-3 text-black'>3,062</p>
          </div>
          <div className='inline-flex  text-green-800 rounded-xl pt-3 space-x-3'>
                <BiUpArrowAlt fontSize={20} color="green"/>20%  
               <span className='text-gray-500'> vs last month</span>
               </div>
      </div>
    </div>

  <div className="mt-4">
      <OverviewTable placeholder="        Search for customer's name"/>
  </div>
</div>
  )
}

export default Customers