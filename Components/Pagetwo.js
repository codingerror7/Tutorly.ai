import React from 'react'

const Pagetwo = () => {
  return (
    <>
    <div className='w-[50vw] h-[10vh] m-auto flex items-center justify-between p-[1%] font-[gilroy] text-white'>
        <div className='h-[70%] w-[31%] rounded-[30px] text-[14px] text-center text-[#38BDF8] bg-[#1E293B] p-[0.5%]'>Advanced Language Models</div>
        <div className='h-[70%] w-[31%] rounded-[30px] text-[14px] text-center text-[#38BDF8] bg-[#1E293B] p-[0.5%]'>Students's AI solutions</div>
        <div className='h-[70%] w-[31%] rounded-[30px] text-[14px] text-center text-[#38BDF8] bg-[#1E293B] p-[0.5%]'>Real-time Processing</div>
    </div>
    <div id='div2' className='w-[94vw] h-[40vh] m-auto flex items-center justify-between p-[1%] font-[gilroy] text-white'>
        <div className='h-[95%] w-[32%] p-[1%] rounded-[5%] bg-[#ffffff09]'>
            <img className='h-[40%] w-[30%] m-auto my-[-3%] rounded-[50%]' src='/icon1_white.png'></img>
            <h2 className='text-[28px] my-[2%] mx-[3%] font-semibold'>TUTORLY.AI Learning</h2>
            <p className='text-left text-[16px] my-[2%] w-[95%] mx-[3%]'>Our advanced neural networks personalize your study making complex topics easier to understand. Built for deeper learning and faster results</p>
        </div>
        <div className='h-[95%] w-[32%] p-[1%] rounded-[5%] bg-[#ffffff09]'> 
            <img className='h-[40%] w-[30%] m-auto my-[-3%] rounded-[50%]' src='/icon2_white.png'></img>
            <h2 className='text-[28px] my-[2%] mx-[3%] font-semibold'>Language Intelligence</h2>
            <p className='text-left text-[16px] my-[2%] w-[95%] mx-[3%]'>Tutorly.AI's powerful models deliver unmatched query-solving abilities — ensuring top-notch support for your studies, assignments, and exams.</p>
        </div>
        <div className='h-[95%] w-[32%] p-[1%] rounded-[5%] bg-[#ffffff09]'>
            <img className='h-[40%] w-[30%] m-auto my-[-3%] rounded-[50%]' src='/icon3_white.png'></img>
            <h2 className='text-[28px] my-[2%] mx-[3%] font-semibold'>Students AI StudyBuddy</h2>
            <p className='text-left text-[16px] my-[2%] w-[95%] mx-[3%]'>Transform your studies with real-world examples, Instantly solve doubts, access real-world examples, and get personalized study help.</p>
        </div>
    </div>
    <div className='w-[55%] h-[20%] m-auto text-white font-[gilroy] bg-[#ffffff09] p-[1%] rounded-[20px] my-[5%]'>
        <h1 className='text-[30px] my-[2%] mx-[3%] font-semibold uppercase'>What is tutorly.ai?</h1>
        <p className='text-left text-[17px] my-[2%] w-[95%] mx-[3%]'>Tutorly.ai is an AI-powered educational platform designed to assist students by answering their academic queries, providing personalized study material, and offering learning support across various subjects. It acts as an intelligent study companion, helping learners improve their understanding to enhance their academic performance.</p>
    </div>
    <div className='h-[86vh] w-[70vw] m-auto my-[10%] text-white font-[gilroy] p-[4.5%] bg-[#ffffff09] rounded-[30px]'>
        <h1 className='text-center font-semibold text-[45px] underline'>Frequently Asked Questions</h1>
        <h2 className='text-[25px] my-[2%] font-semibold'>How does Tutorly.AI compare to GPT-4?</h2>
        <p className='text-[18px] text-left'>Tutorly.AI uses GPT-4’s core strengths but is fine-tuned for academic queries, study support, and optimized learning experiences.</p>
        <h2 className='text-[25px] my-[2%] font-semibold'>Is Tutorly.AI open-source?</h2>
        <p className='text-[18px] text-left'>Yes, Tutorly.AI is open-source, allowing developers, educators, and students to customize, improve, and integrate its educational AI models into their own learning solutions.</p>
        <h2 className='text-[25px] my-[2%] font-semibold'>What makes Tutorly.AI different?</h2>
        <p className='text-[18px] text-left'>Tutorly.AI is uniquely designed for students, offering AI-driven study material, real-time query solving, adaptive learning models, and personalized academic support, all optimized specifically for educational success.</p>
    </div>
    <div className='mx-[3%] my-[5%] w-[70%]'>
    <h1 id='lastdiv' className='font-[gilroy] text-white text-[80px]'>Ready To Experience <span className='text-blue-400 font-extrabold text-[90px]'>TUTORLY.AI</span>?</h1>
    <button className='my-[3%] outline-solid outline-white w-[25%] p-[3px] rounded-[10px] bg-white text-black font-semibold hover:cursor-pointer hover:bg-transparent hover:text-white'>TRY NOW!</button>
    </div>
    </>
  )
}

export default Pagetwo