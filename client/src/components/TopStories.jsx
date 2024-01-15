import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
Card,
CardContent,
CardFooter,
CardHeader,
CardTitle} from './ui/card'
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
            <Card>
                <CardHeader>
                <img className="w-full  h-auto object-contain rounded-xl" src={top} alt="" />
                    <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero!</p>
                </CardContent>
                <CardFooter>
                    <p className="text-sm font-semibold tracking-wider">
                        READ MORE
                    </p>
                    <FontAwesomeIcon className="w-4 h-4 ml-2 text-gray-500" icon={faArrowRight} />
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <img className="w-full h-auto object-contain rounded-xl" src={top} alt=""  />
                    <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero!</p>
                </CardContent>
                <CardFooter>
                    <p className="text-sm font-semibold tracking-wider">
                        READ MORE
                    </p>
                    <FontAwesomeIcon className="w-4 h-4 ml-2 text-gray-500" icon={faArrowRight} />
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <img className="w-full h-auto object-contain rounded-xl" src={top} alt="" width={200} height={200} />
                    <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero!</p>
                </CardContent>
                <CardFooter>
                    <p className="text-sm font-semibold tracking-wider">
                        READ MORE
                    </p>
                    <FontAwesomeIcon className="w-4 h-4 ml-2 text-gray-500" icon={faArrowRight} />
                </CardFooter>
            </Card>
        </div>
        <div className="w-full border my-4 border-gray-200" />
    </div>
  )
}

export default TopStories