import Image from 'next/image';
import React from 'react';
import { FaRegComment } from 'react-icons/fa';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosStats } from 'react-icons/io';
import { HiOutlineDownload } from 'react-icons/hi';

const FeedCard: React.FC = () => {
  return (
    <div className='border border-r-0 border-l-0 border-b-0 border-gray-600 p-2 hover:bg-slate-100 transition-all cursor-pointer'>
        <div className='grid grid-cols-12 gap-1'>
          <div className='col-span-1'>
            <Image src='https://avatars.githubusercontent.com/u/77580311?v=4' width={50} height={50} alt='user-image' />
          </div>
          <div className='col-span-11'>
            <h5>Satyam Arya</h5>
            <p className='text-sm'>
              Hello, I'm Satyam Arya
              Ask me about anything related to MERN, CLOUD & DEVOPS
            </p>
            <div className='flex justify-between mt-3'>
              <div>
                <FaRegComment/>
              </div>
              <div>
                <FaRetweet/>
              </div>
              <div>
                <AiOutlineHeart/>
              </div>
              <div>
                <IoIosStats/>
              </div>
              <div>
                <HiOutlineDownload/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FeedCard;