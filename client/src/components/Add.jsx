import React, { useContext } from 'react'
import top from '../assets/images/images.jpeg'
import { UserContext } from '../../context/UserContext'

const Add = () => {
    const { user } = useContext(UserContext)
  return (
    <div className='grid grid-cols-2 h-[calc(100vh-11.5rem)]'>
        <div className=' w-full h-full p-[10%] '>
            <img className='w-[25rem] rounded-xl' src={top} alt="" />
            <p>{user?.name}</p>
        </div>
        <div className=''>
            in
        </div>
    </div>
  )
}

export default Add