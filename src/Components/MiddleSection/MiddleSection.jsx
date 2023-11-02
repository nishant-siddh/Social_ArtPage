import React from 'react'
import Searchbar from './Searchbar'
import Posts from './Posts'
import PicturePriceListing from './PicturePriceListing'

const MiddleSection = () => {
  return (
    <div className='flex flex-col gap-8 overflow-auto'>
      <div>
        <Searchbar />
      </div>
      <div className='overflow-x-hidden'>
        <Posts />
        <div className='overflow-x-scroll mt-8 scrollbar-hidden'>
          {/* <div className='overflow-x-scroll'> */}
            <PicturePriceListing />
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default MiddleSection