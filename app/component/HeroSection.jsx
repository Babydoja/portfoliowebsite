"use client"
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';


export default function HeroSection() {
  return (
    <section>
         <div className='grid grid-cols-1 sm:grid-cols-12 h-[100vh]'>
            <div className='col-span-7 place-self-center text-center sm:text-left '>
                <h1 className=" text-white mb-4 text-3xl lg:text-5xl sm:text-4xl font-extrabold">
                  <span className=' text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-pink-600'>Hello , I'm {""}</span>
                  <br/>
                   <TypeAnimation
                        sequence={[
                          'Wura',
                          1000,
                          'Web Developer',
                          1000,
                          'UI/UX Engineer',
                          1000,
                          'Mobile Development',
                          1000
                         ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#adb7be] sm:text-lg py-2 text-base lg:text-xl '>
                    I am a full stack web developer with a passion for creating interactive and responsive web applications.
                </p>

                <div>
                  <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white'>Hire Me</button>
                  <button className='px-1 py-1 w-full sm:w-fit  rounded-full bg-transparent text-white border border-white mt-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 '><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download  Cv</span> </button>
                </div>
            </div>

            <div className='col-span-5 place-self-center mt-4 lg:mt-0 mb-6 lg-text-xl'>
                <div className='rounded-full bg-[#261616] w-[250px] h-[250px] lg-w-[500px] lg-h-[500px] relative '>
                  <Image src="/images/hero-image.webp"
                   alt='hero image'
                    width={300}
                    height={300 }
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'/>
                </div>
            </div>
         </div>
    </section>
  )
}
