'use client'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'
import { BackgroundGradient } from './ui/background-gradient'

const Projects = () => {
  return (
    <div id='projects' className='bg-black-100 py-20 px-10 bg-grid-white/[0.02]'>
      <h1 className="heading text-white text-center text-4xl font-bold">
        A Small Selection of {' '}
        <span className='text-purple-900'>Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-10 gap-10 mt-10">
      {/* <PinContainer
        title="View the Project"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            PASSWORD MANAGER
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              With One Password You Can Create a World Of Security
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
            <Image src='/pw.png' height={300} width={200} alt='bloweb image' className='w-full rounded-lg'/>
          </div>
          
        </div>
      </PinContainer>

      <PinContainer
        title="View the Project"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            BLOWEB
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              The Complete Blogging App
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
            <Image src='/bloweb.png' height={200} width={300} alt='bloweb image' className='w-full rounded-lg'/>
          </div>
        </div>
      </PinContainer>

      <PinContainer
        title="View the Project"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            WEATHER APP(UI)
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              classy mobile ui for android/ios
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
            <Image src='/ui.png' height={200} width={300} alt='bloweb image' className='w-full rounded-lg'/>
          </div>
        </div>
      </PinContainer>

      <PinContainer
        title="View the Project"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            E-learning(UI)
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              classy mobile ui for android/ios powered with react native
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
            <Image src='/edu.png' height={200} width={300} alt='bloweb image' className='w-full rounded-lg'/>
          </div>
        </div>
      </PinContainer> */}
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black-100  dark:bg-zinc-900">
        <Image
          src='/bloweb.png'
          alt="jordans"
          height="500"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          BLOWEB
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          bloweb is the full stack Complete stable blogging platform with various features with django as backend postgres db and powred with react.js
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>tech </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            Full Stack
          </span>
        </button>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black-100  dark:bg-zinc-900">
        <Image
          src='/edu.png'
          alt="jordans"
          height="500"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          eLEARNING(ui)
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          stunning and classy ui for mobile view of eLearning app powered with React Native(cross platform)
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>tech </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            UI
          </span>
        </button>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black-100  dark:bg-zinc-900">
        <Image
          src='/pw.png'
          alt="jordans"
          height="500"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          PASSWORD MANAGER
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          bloweb is the full stack Complete stable blogging platform with which you can ensure security for all your account passwords , powred with react.js
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>tech </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            full stack
          </span>
        </button>
      </BackgroundGradient>

      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black-100  dark:bg-zinc-900">
        <Image
          src='/ui.png'
          alt="jordans"
          height="500"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
          WEATHER APP
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        stunning and classy ui for mobile view of weather app powered with React Native(cross platform)
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>tech </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
           ui
          </span>
        </button>
      </BackgroundGradient>

     
      
      </div>
    </div>
  )
}

export default Projects
