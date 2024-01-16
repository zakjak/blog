import React from 'react'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className='h-[calc(100vh-11.5rem)] w-full flex items-center justify-center flex-col'
    >
      <div className='w-[30%] p-4 h-[15rem] rounded-md shadow-lg flex flex-col gap-2 justify-center'>
        <div className='flex flex-col'>
          <label htmlFor="email">Email:</label>
          <input className='outline-none' type="email" placeholder='Enter Email...' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password">Password:</label>
          <input className='outline-none' type="password" placeholder='Enter name...' />
        </div>
        <button className='bg-black text-white p-2' type='submit'>Sign up</button>
      </div>
    </form>
  )
}

export default Login