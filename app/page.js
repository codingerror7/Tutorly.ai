"use client"
import React from 'react'
import Navbar from '@/Components/Navbar'
import Pagetwo from '@/Components/Pagetwo'
import Footer from '@/Components/Footer'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const page = () => {
  useGSAP(()=>{
    gsap.from("#gsap1",{
      y:100,
      delay : 0.4,
      duration : 1,
      opacity : 0,
    })
    gsap.from("#img1",{
      y:100,
      delay : 0.5,
      duration : 1,
      opacity : 0,
    })
    gsap.from("#img2",{
      y:100,
      delay : 0.6,
      duration : 1,
      opacity : 0,
    })
    gsap.from("#img3",{
      y:100,
      delay : 0.7,
      duration : 1,
      opacity : 0,
    })
    gsap.from("#img4",{
      y:100,
      delay : 0.8,
      duration : 1,
      opacity : 0,
    })
    gsap.from("#div2",{
      y : 100,
      duration : 2,
      opacity : 0,
      scrollTrigger : {
        trigger : "#div2",
        /*markers : true,*/
        start : "top 80%",
        end : "top 60%",
        scrub : 2
      }
    })
    gsap.from("#lastdiv",{
      y : 100,
      duration : 2,
      opacity : 0,
      scrollTrigger : {
        trigger : "#lastdiv",
       /* markers : true,*/
        start : "top 80%",
        end : "top 60%",
        scrub : 3
      }
    })
  })
  return (
    <>
    <div id='pageOne' className='min-h-[127vh] w-[100vw] bg-[#0B0C10] text-white'>
      <Navbar/>
        <div className='w-[55%] mx-[1.5%] my-[1.9%] p-[20px] absolute'>
          <h1 id='gsap1' className='text-[84px] uppercase font-[gilroy] text-white font-extrabold leading-[95px]'>One Chat Away from Clear Concepts with <span className='text-blue-400'>tutorly.ai</span></h1>
          <div className='flex items-center justify-evenly text-white font-[gilroy] w-[50%] text-[15px] text-center my-[6%]'>
            <a href='https://tutorly-aichat-bot.vercel.app/' target='_blank'  id='gsap1' className='outline-solid outline-white w-[45%] p-[3px] rounded-[10px] hover:cursor-pointer'>TRY FOR FREE</a>
            <Link href = './Premium' target="_blank" rel="noopener noreferrer" id='gsap1'  className='outline-solid outline-white w-[45%] p-[3px] rounded-[10px] bg-white text-black font-semibold hover:cursor-pointer'>GO PREMIUM</Link>
          </div>
        </div>
        <img id='img1' className='absolute h-[32vh] w-[18vw] my-[7%] mx-[77%] bg-top object-cover rounded-[15%]  z-30' src='/robo1.jpg'></img>
    <img id='img2' className='absolute h-[30vh] w-[20vw] my-[22%] mx-[57%] bg-top object-cover rounded-[15%] z-20' src='/robo2.jpg'></img>
    <img id='img3' className='absolute h-[40vh] w-[25vw] my-[4%] mx-[54%] bg-center object-cover rounded-[10%] z-40' src='/robo4.jpg'></img>
    <img id='img4' className='absolute h-[37vh] w-[23vw] my-[21.5%] mx-[75%] bg-center object-cover rounded-[10%] z-30 ' src='/robo3.jpg'></img>

    </div>
    <div className='min-h-[280vh] w-[100vw] bg-[#0B0C10] text-white'>
    <Pagetwo/>
    </div>
    <div className='h-[25vh] w-[100vw] bg-[#0B0C10] text-white overflow-y-hidden'>
      <Footer/>
    </div>
    </>
  )
}

export default page