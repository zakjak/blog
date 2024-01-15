import React from 'react'
import { Link } from 'react-router-dom'

const MenuList = () => {
  return (
    <div className="w-full gap-6 h-10 sticky top-20 bg-black text-white flex justify-center items-center font-semibold tracking-wide">
            <Link to='/politics'>
                Politics
            </Link>
            <Link to='/sports'>
                Sports
            </Link>
            <Link to='/fashion'>
                Fashion
            </Link>
            <Link to='/technology'>
                Technology
            </Link>
    </div>
  )
}

export default MenuList