import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Input } from './ui/input'

const InputSection = () => {
  return (
    <div className='w-[30%] border h-10 flex items-center rounded-full px-2'>
        <Input type="email" placeholder="Search..." />
        <FontAwesomeIcon className='w-4 h-4 text-gray-400'   icon={faMagnifyingGlass} />
    </div>
  )
}

export default InputSection