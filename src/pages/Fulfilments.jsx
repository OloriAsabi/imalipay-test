import React from 'react'
import { OverviewTable, Title } from '../components'


const Fulfilments = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 sm:pt-20 md:p-10 ">
    <div className='flex justify-between mb-10'>
    <Title title="Fulfilment" />
    <button
    className='bg-green-900 items-end rounded-xl text-white w-24 cursor-pointer'>
        Register
    </button>
    </div>  


  <div className="mt-4">
      <OverviewTable  placeholder="        Search for customer's name"/>
  </div>
</div>
  )
}

export default Fulfilments