import React from 'react'
import ArtistsSection from './ArtistsSection'

const RightSidebar = () => {
  return (
    <div className='flex flex-col gap-8 overflow-auto'>
      <div>
        <div className='bg-[#88c2bb] text-white flex justify-center items-center h-20 py-4 rounded-lg'>Bocome a seller</div>
      </div>
      <ArtistsSection />
    </div>
  )
}

export default RightSidebar