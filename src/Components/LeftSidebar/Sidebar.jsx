import React from 'react'
import home from '../../assets/home.svg'
import notification from '../../assets/notification.svg'
import heart from '../../assets/heart.svg'
import message from '../../assets/message.svg'
import wallet from '../../assets/wallet.svg'
import favorite from '../../assets/favorite.svg'
import profile from '../../assets/profile.svg'
import setting from '../../assets/setting.svg'

const Sidebar = () => {
  const sidebar = [
    {
      id: 1,
      icon: home,
      text: 'Home',
      fontColor: 'text-black',
      border: 'border-l-2 border-l-[#88c2bb]',
    },
    {
      id: 2,
      icon: notification,
      text: 'Notification'
    },
    {
      id: 3,
      icon: heart,
      text: 'Shop'
    },
    {
      id: 4,
      icon: message,
      text: 'Conversation'
    },
    {
      id: 5,
      icon: wallet,
      text: 'Wallet'
    },
    {
      id: 6,
      icon: favorite,
      text: 'Subscription'
    },
    {
      id: 7,
      icon: profile,
      text: 'My Profile'
    },
    {
      id: 8,
      icon: setting,
      text: 'Settings'
    },
  ]

  return (
    <div className='bg-white rounded-lg py-8 text-zinc-400 flex flex-col gap-5'>
      {
        sidebar.map((item) => (
          <div key={item.id} className={`flex gap-5 items-center px-5 py-1 ${item.border && item.border}`}>
            <span><img src={item.icon} /></span>
            <h4 className={`${item.fontColor && item.fontColor} font-semibold`}>{item.text}</h4>
          </div>
        ))
      }
    </div>
  )
}

export default Sidebar