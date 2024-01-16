import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import InputSection from './InputSection '
import { UserContext } from '../../context/UserContext'
import avatar from '../assets/images/images.jpeg'

const Navbar = () => {
    const { user } = useContext(UserContext)


  return (
    <div className="w-full sticky top-0 bg-white h-20 shadow-md flex items-center">
    <div className="w-[90%] m-auto flex justify-between items-center">
        <Link to='/' className="text-3xl font-semibold cursor-pointer">
            Logo
        </Link>
            <InputSection />
            {!!user ? <img className='w-12 h-12 cursor-pointer rounded-full object-cover' src={avatar} alt='profile avatar' />
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