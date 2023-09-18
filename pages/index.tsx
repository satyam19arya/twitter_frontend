import { Inter } from 'next/font/google'
import {SlSocialTwitter} from 'react-icons/sl'
import {AiOutlineHome} from 'react-icons/ai'
import {BiHash} from 'react-icons/bi'
import {BsBell} from 'react-icons/bs'
import {TbMessage2Plus} from 'react-icons/tb'
import {BsBookmarkDash} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {CgMoreR} from 'react-icons/cg'
import {RiVerifiedBadgeLine} from 'react-icons/ri'

const inter = Inter({ subsets: ['latin'] })

interface TwitterSideBarButton {
  icon: React.ReactNode;
  text: string;
  active: boolean;
}

const sidebarMenuItems: TwitterSideBarButton[] = [
  {
    icon: <AiOutlineHome/>,
    text: 'Home',
    active: true

  },
  {
    icon: <BiHash/>,
    text: 'Explore',
    active: false
  },
  {
    icon: <BsBell/>,
    text: 'Notifications',
    active: false
  },
  {
    icon: <TbMessage2Plus/>,
    text: 'Messages',
    active: false
  },
  {
    icon: <BsBookmarkDash/>,
    text: 'Bookmarks',
    active: false
  },
  {
    icon: <RiVerifiedBadgeLine/>,
    text: 'Verified',
    active: false
  },
  {
    icon: <CgProfile/>,
    text: 'Profile',
    active: false
  },
  {
    icon: <CgMoreR/>,
    text: 'More',
    active: false
  },
]

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-12 h-screen w-screen px-52'>
        <div className='col-span-3 pt-6'>
          <div className='text-4xl h-fit w-fit hover:bg-gray-100 rounded-full p-1 cursor-pointer transition-all'>
            <SlSocialTwitter/>
          </div>
          <div>
            <ul>
              {sidebarMenuItems.map((item, index) => (
                <li key={index} className='flex items-center justify-start space-x-4 py-3 px-2 hover:bg-gray-100 rounded-full cursor-pointer transition-all'>
                  <div className='text-2xl'>
                    {item.icon}
                  </div>
                  <div className='text-lg font-semibold'>
                    {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='col-span-6 border-r-[0.5px] border-l-[0.5px] border-gray-400'></div>
        <div className='col-span-3'></div>
      </div>
    </>
  )
}