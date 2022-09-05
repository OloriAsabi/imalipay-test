import React from 'react'


const Search = ({placeholder, }) => {
  return (
    <div className='flex justify-between'>
       <form className='w-full'>
        <input className='w-9/12 rounded-xl border p-4 cursor-pointer' type="search"  placeholder={placeholder}/>
        </form>
        <button 
        className='bg-white rounded-xl p-4 border-1 cursor-pointer'>
            Export
        </button>
    </div>
  )
}

export default Search