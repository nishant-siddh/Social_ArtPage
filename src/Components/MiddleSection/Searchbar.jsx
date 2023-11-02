import React from 'react'
import search from '../../assets/search.svg'
import filter from '../../assets/filter.svg'

const Searchbar = () => {
  return (
    <div className='h-20 bg-white rounded-lg relative flex items-center px-8'>
      <div className='text-sm w-full flex gap-2 items-center'>
        <img src={search} alt='Search icon' />
        <input type="text" placeholder='Search here...' className='outline-none w-full' />
        <div className='flex gap-2 items-center'>
          <img src={filter} alt="" />
          <span>Filters</span>
        </div>
      </div>
    </div>
  )
}

export default Searchbar