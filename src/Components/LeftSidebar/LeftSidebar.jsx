import React from 'react'
import Sidebar from './Sidebar'

const LeftSidebar = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='text-3xl h-20 bg-white rounded-lg flex items-center px-5 font-serif'>LOGO</div>
      <Sidebar />
    </div>
  )
}

export default LeftSidebar