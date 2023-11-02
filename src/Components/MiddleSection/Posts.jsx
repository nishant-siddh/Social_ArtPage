import React from 'react'
import postProfile1 from '../../images/postProfile1.png'
import postImage1 from '../../images/postImage1.png'
import postProfile2 from '../../images/postProfile2.png'
import postImage2 from '../../images/postImage2.png'
import whiteHeart from '../../assets/whiteHeart.svg'
import blackHeart from '../../assets/blackHeart.svg'
import comment from '../../assets/comment.svg'
import share from '../../assets/share.svg'

const Posts = () => {

    const posts = [
        {
            id: 1,
            name: 'Lara Leones',
            username: '@thewallart',
            profile: postProfile1,
            mainImage: postImage1,
        },
        {
            id: 2,
            name: 'Thomas J.',
            username: '@thecustomcreater',
            profile: postProfile2,
            mainImage: postImage2,
        },
    ]

    return (
        <div className='flex flex-col gap-8'>
            {posts.map((post) => (
                <div className='bg-white rounded-lg'>
                    <div className='p-7'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-3 items-center'>
                                <img src={post.profile} alt="profile1" />
                                <div className='flex flex-col'>
                                    <h3 className='font-bold text-lg'>{post.name}</h3>
                                    <span className='text-sm text-zinc-400'>{post.username}</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='w-[4px] h-[4px] bg-black rounded-full'></span>
                                <span className='w-[4px] h-[4px] bg-black rounded-full'></span>
                                <span className='w-[4px] h-[4px] bg-black rounded-full'></span>
                            </div>
                        </div>

                        <p className='text-[1rem] my-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className='text-red-400 cursor-pointer'>Read More</span></p>

                        <div className='relative'>
                            <img src={post.mainImage} alt="postImage" className='w-full' />
                            <img src={whiteHeart} alt="white heart icon" className='absolute top-6 right-6' />
                        </div>
                    </div>
                    <div className='flex gap-5 p-8 border-t-2 border-zinc-100'>
                        <div className='flex gap-2'>
                            <img src={blackHeart} alt="black heart icon" />
                            <span className='font-semibold'>9.8k</span>
                        </div>
                        <div className='flex gap-2'>
                            <img src={comment} alt="comments icon" />
                            <span className='font-semibold'>8.6k</span>
                        </div>
                        <div className='flex gap-2'>
                            <img src={share} alt="share icon" />
                            <span className='font-semibold'>7.2k</span>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default Posts