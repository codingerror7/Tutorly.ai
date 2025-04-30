import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='bg-blue-950 h-[100vh] w-[100vw] overflow-hidden'>
    <div className='w-[100%] h-[110px] flex items-center justify-between p-[35px] bg-black'>
        <div>
            <img className='h-[250px] w-[270px]' src='/tutorai.png'/>
        </div>
        <div className='flex items-center justify-between p-[10px] gap-10 text-xl font-[gilroy] text-white hover:cursor-pointer'>
            <h1 className='hover:cursor-pointer hover:underline'>HOME</h1>
            <h1 className='hover:cursor-pointer hover:underline'>DOCS</h1>
            <h1 className='hover:cursor-pointer hover:underline'>AI NEWSLETTER</h1>
            <h1 className='hover:cursor-pointer hover:underline'>RESOURCES</h1>
            
        </div>
    </div>
        <div id='signupdiv2' className='h-[70%] w-[35%] text-white font-[gilroy] p-[10px] m-auto my-[3%]'>
            <h1 className='signuph1'>REGISTER AS A STUDENT</h1>
            <form className='form'>
            Name: <input type='text' className='input' placeholder='ENTER YOUR NAME:'></input><br></br>
               Age: <input type='number' className='input' placeholder='ENTER YOUR AGE:'></input><br></br>
               E-mail: <input type='email' className='input' placeholder='ENTER YOUR EMAIL:'></input><br></br>
               Gender: <select className='input'>
               <option className='text-black font-mono text-[15px]'>Male</option>
                <option className='text-black font-mono text-[15px]'>Female</option>
                <option className='text-black font-mono text-[15px]'>Others</option>
               </select><br></br>
               <button className='supbtn'>SIGN-UP</button>
               <p className='text-center text-white my-[5%]'>Already a user? please <span className='hover:cursor-pointer hover:underline'>Log-in</span></p>
               </form>
        </div>
    </div>
    </>
  )
}

export default Navbar