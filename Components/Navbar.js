import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <div id='navbar' className='h-[100px] w-[100%] flex items-center justify-between p-[25px] font-[gilroy]'>
        <div>
          <img className='h-[250px] w-[270px] p-[10px]' src='/tutorai.png'></img>
        </div>
        <div className='flex items-center justify-between gap-8 w-[47%]'>
          <h1 className=' text-[18px] underline'>HOME</h1>
          <h1 className=' text-[18px] hover:cursor-pointer'>DOCS</h1>
          <h1 className=' text-[18px] hover:cursor-pointer'>AI NEWSLETTER</h1>
          <h1 className=' text-[18px] hover:cursor-pointer'>RESOURCES</h1>
          <Link href = './Signup' target="_blank" rel="noopener noreferrer" id='btn1' className='rounded-[20px] text-[12px] p-[4px] w-[15%] text-center hover:cursor-pointer hover:bg-white hover:font-semibold hover:underline'>SIGN-UP</Link>
        </div>
      </div></>
  )
}

export default Navbar