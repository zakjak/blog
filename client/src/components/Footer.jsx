import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <div className="flex gap-1 justify-center items-center w-full bg-black py-5 text-white">
       <FontAwesomeIcon className="w-6" icon={faCopyright} />
       <span>{year}</span>
       <span>GH MEDIA</span>
    </div>
  )
}

export default Footer