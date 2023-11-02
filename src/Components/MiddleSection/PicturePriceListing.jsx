import React from 'react'
import ListedImage1 from '../../images/ListedImage1.png'
import ListedImage2 from '../../images/ListedImage2.png'
import ListedImage3 from '../../images/ListedImage3.png'
import sidePainting3 from '../../images/sidePainting-3.png'
import star from '../../assets/star.svg'

const PicturePriceListing = () => {
    const pictureForListing = [
        {
            id: 1,
            title: 'Modern Wall Decor Framed Painting',
            image: ListedImage1
        },
        {
            id: 2,
            title: 'Modern Wall Decor Framed Painting',
            image: ListedImage2
        },
        {
            id: 3,
            title: 'Modern Wall Decor Framed Painting',
            image: ListedImage3
        },
        {
            id: 4,
            title: 'Modern Wall Decor Framed Painting',
            image: sidePainting3
        },
    ]
    return (
        <div className='flex gap-5 w-[1000px]'>
            {
                pictureForListing.map((picture) => (
                    <div className='w-full h-full'>
                        <img src={picture.image} alt="" className='rounded-lg w-[252px] h-[180px]' />
                        <p>{picture.title}</p>
                        <div className='flex justify-between items-center'>
                            <span>$199.99</span>
                            <div className='flex gap-2'>
                                <img src={star} alt="star icon" />
                                <img src={star} alt="star icon" />
                                <img src={star} alt="star icon" />
                                <img src={star} alt="star icon" />
                                <img src={star} alt="star icon" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PicturePriceListing