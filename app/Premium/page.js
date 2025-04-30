import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <div className='bg-purple-950 h-[100vh] w-[100vw] overflow-hidden text-white text-[gilroy]'>
      <h1 className='text-center font-extrabold underline text-[60px] my-[0.4%]'>Subscribe and Level Up Your Education</h1>
      <p className='text-center text-[30px] my-[-1%]'>Join 5 Million+ Users transforming their careers with us!</p>
      <div className='mainDiv'>
      <div className='subDiv'>
        <h1 className='text-[40px] text-center font-extrabold'>₹1500</h1>
        <p className='text-center text-[20px]'>Get a Monthly-Pro!</p>
        <button className='btn'>Subscribe now!</button>
        <hr className='my-[5%]'></hr>
        <p className='p'>-Unlimited access to study materials.</p>
        <p className='p'>-24/7 AI StudyBuddy support</p>
        <p className='p'>-Personalized learning recommendations</p>
        <p className='p'>-Access to monthly workshops & webinars</p>
        <p className='p'>-Cancel anytime — no long-term commitment</p>
      </div>
      <div className='subDiv'>
      <h1 className='text-[40px] text-center font-extrabold'>₹3500</h1>
        <p className='text-center text-[20px]'>Choose Yearly Plan!</p>
        <button className='btn bg-white text-black font-semibold'>GET IT!</button>
        <hr className='my-[5%]'></hr>
        <p className='p'>-All Monthly Pro benefits plus more extra features.</p>
        <p className='p'>-Unlimited AI queries and explanations</p>
        <p className='p'>-Priority customer support anytime</p>
        <p className='p'>-Special certificates for workshop participation</p>
        <p className='p'>-Early access to new features and updates</p>
      </div>
      <div className='subDiv'>
      <h1 className='text-[35px] text-center font-extrabold'>Enterprise Plan</h1>
        <p className='text-center text-[20px] my-[1.3%]'>For Colleges and Universities</p>
        <button className='btn text-white'>Contact us</button>
        <hr className='my-[5%]'></hr>
        <p className='p'>-Unlimited student accounts under one license</p>
        <p className='p'>-Custom curriculum integration with AI</p>
        <p className='p'>-Real-time performance analytics dashboard</p>
        <p className='p'>-Dedicated support and account manager</p>
        <p className='p'>-Personalized AI training sessions for faculty</p>
      </div>
      </div>
    </div>
    </>
  )
}

export default page