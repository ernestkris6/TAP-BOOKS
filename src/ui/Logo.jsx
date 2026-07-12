import React from 'react'
import logo from '../assets/logo.jpg'

export default function Logo() {
  return (
    <div className='p-2'>
        <img className='w-16 bg-red-500' src={logo} alt="" />
    </div>
  )
}
