import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import top from '../../src/assets/images/images.jpeg'
import { Link } from 'react-router-dom'

const Profile = () => {
    const { user } = useContext(UserContext)

  return (
    <div className='w-full'>
        <div className='w-full h-[15rem] bg-gray-500 relative'>
        <div className='w-[15rem] h-[15rem] rounded-xl overflow-hidden absolute bottom-[-50%] left-[10%]'>
            <img className='w-full h-full object-cover' src={top} alt="" />
        </div>
        </div>
        <div className='w-[80%] m-auto relative mt-[10%]'>
            <div className=''>
                <div className='flex w-full justify-between items-center'>
                    <div className='mt-[2rem]'>
                        <h2 className='text-2xl'>{user?.name}</h2>
                        <p>325 post</p>
                        <h2>Bio</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, tenetur?</p>
                    </div>
                    <Link to={`/add/${user?.id}`} className='bg-black text-white px-6 py-2 font-semibold'>Add</Link>
                </div>
                <div>
                    <h2>Articles</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile