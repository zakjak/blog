import React from 'react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "./ui/card"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import top from '../assets/images/images.jpeg'


const TrendingSection = () => {
  return (
    <div className="">
        <div className="w-full flex flex-col items-center text-center">
            <p className="font-bold my-3">Latest Stories</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700">
                Latest Blogs
            </h1>
            <div className="border border-black mt-2 w-[11rem] md:w-[13rem] lg:w-[18rem]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
                <CardHeader>
                <img className="w-full  h-auto object-contain rounded-xl" src={top} alt="" width={200} height={200} />
                    <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-blue-400 text-sm mb-1">Tech</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero!</p>
                </CardContent>
                <CardFooter>
                    <img className="w-10 h-10 rounded-full object-cover" src={top} alt="" width={200} height={200} />
                    <div className="flex flex-col ml-1">
                        <span className="text-sm font-semibold">John peter</span>
                        <span className="text-xs text-gray-500">18 September 2023</span>
                    </div>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <img className="w-full h-auto object-contain rounded-xl" src={top} alt="" width={200} height={200} />
                    <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-blue-400 text-sm mb-1">Tech</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero!</p>
                </CardContent>
                <CardFooter>
                    <img className="w-10 h-10 rounded-full object-cover" src={top} alt="" width={200} height={200} />
                    <div className="flex flex-col ml-1">
                        <span className="text-sm font-semibold">John peter</span>
                        <span className="text-xs text-gray-500">18 September 2023</span>
                    </div>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <img className="w-full h-auto object-contain rounded-xl" src={top} alt="" width={200} height={200} />
                    <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-blue-400 text-sm mb-1">Tech</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero!</p>
                </CardContent>
                <CardFooter>
                    <img className="w-10 h-10 rounded-full object-cover" src={top} alt="" width={200} height={200} />
                    <div className="flex flex-col ml-1">
                        <span className="text-sm font-semibold">John peter</span>
                        <span className="text-xs text-gray-500">18 September 2023</span>
                    </div>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <img className="w-full h-auto object-contain rounded-xl" src={top} alt="" width={200} height={200} />
                    <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-blue-400 text-sm mb-1">Tech</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero!</p>
                </CardContent>
                <CardFooter>
                    <img className="w-10 h-10 rounded-full object-cover" src={top} alt="" width={200} height={200} />
                    <div className="flex flex-col ml-1">
                        <span className="text-sm font-semibold">John peter</span>
                        <span className="text-xs text-gray-500">18 September 2023</span>
                    </div>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <img className="w-full h-auto object-contain rounded-xl" src={top} alt="" width={200} height={200} />
                    <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-blue-400 text-sm mb-1">Tech</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero!</p>
                </CardContent>
                <CardFooter>
                    <img className="w-10 h-10 rounded-full object-cover" src={top} alt="" width={200} height={200} />
                    <div className="flex flex-col ml-1">
                        <span className="text-sm font-semibold">John peter</span>
                        <span className="text-xs text-gray-500">18 September 2023</span>
                    </div>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <img className="w-full h-auto object-contain rounded-xl" src={top} alt="" width={200} height={200} />
                    <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-blue-400 text-sm mb-1">Tech</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, libero!</p>
                </CardContent>
                <CardFooter>
                    <img className="w-10 h-10 rounded-full object-cover" src={top} alt="" width={200} height={200} />
                    <div className="flex flex-col ml-1">
                        <span className="text-sm font-semibold">John peter</span>
                        <span className="text-xs text-gray-500">18 September 2023</span>
                    </div>
                </CardFooter>
            </Card>
        </div>
        <div className="w-full py-8 flex justify-center">
            <div className="flex items-center gap-2 cursor-pointer">
                <FontAwesomeIcon className="w-[11px] text-gray-700 " icon={faArrowDown} />
                <p className="font-semibold">Read more</p>
            </div>
        </div>
    </div>
  )
}

export default TrendingSection