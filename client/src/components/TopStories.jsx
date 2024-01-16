import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import top from '../assets/images/images.jpeg'

const TopStories = () => {
  return (
    <div className="w-full mt-4">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <img className="w-full rounded-xl h-auto object-contain"  src={top} />
            <div className="p-5 my-auto flex flex-col items-start">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                <p className="mt-2 text-gray-400 text-j">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis fugiat aut consequuntur molestias repellendus possimus optio quo ratione voluptate perspiciatis?</p>
                <p className="mt-2 bg-black text-white px-4 rounded-full">Tech</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className='shadow-md'>
                <div className='flex flex-col space-y-1.5 py-6'>
                <img className="w-full  h-auto object-contain rounded-xl" src={top} alt="" />
                <div className='text-2xl font-semibold leading-none tracking-tight'>Lorem ipsum dolor sit amet.</div>
                </div>
                <div className='py-6 pr-8 pt-0'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero!</p>
                </div>
                <div className='flex items-center  pt-0'>
                    <p className="text-sm font-semibold tracking-wider">
                        READ MORE
                    </p>
                    <FontAwesomeIcon className="w-4 h-4 ml-2 text-gray-500" icon={faArrowRight} />
                </div>
            </div>
            <div className='shadow-md'>
                <div className='flex flex-col space-y-1.5 py-6'>
                    <img className="w-full h-auto object-contain rounded-xl" src={top} alt=""  />
                    <div className='text-2xl font-semibold leading-none tracking-tight'>Lorem ipsum dolor sit amet.</div>
                </div>
                <div className='py-6 pr-8 pt-0'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero!</p>
                </div>
                <div className='flex items-center  pt-0'>
                    <p className="text-sm font-semibold tracking-wider">
                        READ MORE
                    </p>
                    <FontAwesomeIcon className="w-4 h-4 ml-2 text-gray-500" icon={faArrowRight} />
                </div>
            </div>
            <div className='shadow-md'>
                <div className='flex flex-col space-y-1.5 py-6'>
                    <img className="w-full h-auto object-contain rounded-xl" src={top} alt=""  />
                    <div className='text-2xl font-semibold leading-none tracking-tight'>Lorem ipsum dolor sit amet.</div>
                </div>
                <div className='py-6 pr-8 pt-0'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero!</p>
                </div>
                <div className='flex items-center  pt-0'>
                    <p className="text-sm font-semibold tracking-wider">
                        READ MORE
                    </p>
                    <FontAwesomeIcon className="w-4 h-4 ml-2 text-gray-500" icon={faArrowRight} />
                </div>
            </div>
        </div>
        <div className="w-full border my-4 border-gray-200" />
    </div>
  )
}

export default TopStories