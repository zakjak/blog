import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import InputSection from './InputSection '
import { UserContext } from '../../context/UserContext'
import avatar from '../assets/images/images.jpeg'
import axios from 'axios'

const Navbar = () => {
    const { user } = useContext(UserContext)
    const [openModal, setOpenModal] = useState(false)

  return (
    <div className="w-full sticky top-0 bg-white h-20 shadow-md flex items-center z-50">
    <div className="w-[90%] m-auto flex justify-between items-center">
        <Link to='/' className="text-3xl font-semibold cursor-pointer">
            Logo
        </Link>
            <InputSection />
            {!!user ? <div className='relative'>
                <img onClick={() => setOpenModal(!openModal)} className='w-12 h-12 cursor-pointer rounded-full object-cover' src={avatar} alt='profile avatar' />
                {openModal && <div className='w-[15rem] h-[10rem] absolute right-[-1.5rem] mt-2 rounded-md shadow-md bg-white'>
                    <p className='border-b p-2 font-bold text-xl tracking-wide'>{user.name}</p>
                    <div className='p-2 mt-2 font-semibold gap-4 flex flex-col'>
                        <Link to={`/profile/${user.id}`} className=''>
                            <button>Profile</button>
                        </Link>
                        <Link to='' className=''>
                            <button>Signout</button>
                        </Link>
                    </div>
                </div>}
                </div>
            : <div className=" font-semibold tracking-wide">
            <Link className="mr-3" to='/signin'>
                SIGN IN
            </Link>
            <Link className="bg-black text-white px-4 py-2 rounded-full  tracking-wide" to='/signup'>
                SIGN UP
            </Link>
        </div>}
        
    </div>
</div>
  )
}

export default Navbar