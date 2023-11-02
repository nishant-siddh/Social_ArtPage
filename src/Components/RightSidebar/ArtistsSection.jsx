import React from 'react'
import sidePainting1 from '../../images/sidePainting-1.png'
import profile1 from '../../images/profile1.png'
import sidePainting2 from '../../images/sidePainting-2.png'
import profile2 from '../../images/profile2.png'
import sidePainting3 from '../../images/sidePainting-3.png'
import profile3 from '../../images/profile3.png'
import sidePainting4 from '../../images/sidePainting-4.png'
import profile4 from '../../images/profile4.png'
import sidePainting5 from '../../images/sidePainting-5.png'

const ArtistsSection = () => {
  const artists = [
    {
      id: 1,
      name: 'Thomas Edward',
      profile: profile1,
      painting: sidePainting1
    },
    {
      id: 2,
      name: 'Chris Doe',
      profile: profile2,
      painting: sidePainting2
    },
    {
      id: 3,
      name: 'Emilie Jones',
      profile: profile3,
      painting: sidePainting3
    },
    {
      id: 4,
      name: 'Jessica Williams',
      profile: profile4,
      painting: sidePainting4
    },
    {
      id: 5,
      name: 'Thomas Edward',
      profile: profile1,
      painting: sidePainting5
    },
  ]

  return (
    <div className='flex flex-col gap-5 overflow-auto'>
      <div className='flex gap-5 font-semibold'>
        <h4>Artists</h4>
        <h4 className='text-zinc-400'>Photographers</h4>
      </div>

      <div className='flex flex-col gap-5 overflow-x-hidden'>
        {
          artists.map((artist) => (
            <div key={artist.id} className='relative'>
              <img src={artist.painting} alt="image1" className='rounded-lg w-full' />
              <div className='flex gap-4 px-4 items-center absolute bottom-0 w-full h-[76px] bg-gradient-to-t from-neutral-500 transition ease-in-out duration-300 rounded-lg'>
                <div className='relative'>
                  <img src={artist.profile} alt="profile1" />
                  <span className='absolute -top-1 -right-1 w-[12px] h-[12px] rounded-full border-2 border-white bg-green-500'></span>
                </div>
                <div className='flex flex-col text-white'>
                  <h4>{artist.name}</h4>
                  <h4 className='text-sm'>@thewildwithyou</h4>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ArtistsSection