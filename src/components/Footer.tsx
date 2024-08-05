import React from 'react'
import MagicButton from './ui/MagicButton'
import FooterButton from './ui/FooterButton'
import Image from 'next/image'
function Footer() {
  return (
    <>
    <footer className="py-20  px-5 w-full dark:bg-black bg-black-100  antialiased bg-grid-white/[0.02] relative flex flex-co items-center justify-center">
      <div>
        <h2 className='text-white text-4xl font-bold mt-6 text-center'>Ready to take <span className='text-purple-900'>your</span>  digital presence to the next level?</h2>
        <p className='text-white text-base sm:text-xl text-center mt-6'>Reach out to me today and let's discuss how i can help you achieve your goals</p>
        <div className='w-full flex justify-center my-6'>
        <FooterButton />

        </div>
      </div>
      
    </footer>
    <div className='bg-black-100  antialiased bg-grid-white/[0.02] relative flex  flex-wrap items-center justify-center  sm:justify-between px-10 py-2'>
        <p className='text-white text-xl m-1'>Copyright@2024 Ziyaudheen</p>
        <div className='flex gap-3'>
        <div className='p-2 bg-violet-900 rounded-lg'>
          <Image src='https://img.icons8.com/?size=100&id=8818&format=png&color=ffffff' height={30} width={30} alt='logo'/>
        </div>
        <div className='p-2 bg-violet-900 rounded-lg'>
          <Image src='https://img.icons8.com/?size=100&id=85140&format=png&color=ffffff' height={30} width={30} alt='logo'/>
        </div>
        <div className='p-2 bg-violet-900 rounded-lg'>
          <Image src='https://img.icons8.com/?size=100&id=84888&format=png&color=ffffff' height={30} width={30} alt='logo'/>
        </div>
        <div className='p-2 bg-violet-900 rounded-lg'>
          <Image src='https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=ffffff' height={30} width={30} alt='logo'/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer
