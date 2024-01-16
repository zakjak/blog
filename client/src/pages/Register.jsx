import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      const { data } = await axios.post('/register', {
        name, email, password
      })

      if(data.error){
        toast(data.error)
      }else{
        navigate('/signin')
      }

    }catch(err){
      console.log(err)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className='h-[calc(100vh-11.5rem)] w-full flex items-center justify-center flex-col'
    >
      <div className='w-[30%] p-4 h-[15rem] rounded-md shadow-lg flex flex-col gap-2 justify-center'>
        <div className='flex flex-col '>
          <label htmlFor="name">Name:</label>
          <input className='outline-none' 
            type="text" 
            placeholder='Enter name...'
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email">Email:</label>
          <input 
            className='outline-none' 
            type="email" 
            placeholder='Enter Email...' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password">Password:</label>
          <input 
            className='outline-none' 
            type="password" 
            placeholder='Enter name...' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='bg-black text-white p-2' type='submit'>Sign up</button>
        <Link to='/signin' className='text-gray-500 text-sm pb-2 text-center'>Already have an account? <span className='font-bold text-black text-md'>Sign in</span></Link>
      </div>
      <ToastContainer  />
    </form>
  )
}

export default Register