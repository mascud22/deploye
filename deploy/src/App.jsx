import { BellAlertIcon, BriefcaseIcon, CheckIcon, FilmIcon, FireIcon, MapIcon, MegaphoneIcon, PlayCircleIcon, TvIcon } from '@heroicons/react/24/solid'
import React from 'react'

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-black flex-col gap-2 relative p-9 gap-4'>
      <div className='flex flex-col gap-2 relative  h-full w-full'>
        {/* <MegaphoneIcon className='size-19   flex items-start justify-start text-white'/> */}
        {/* <div className='size-6 bg-white rounded-2xl absolute left-11 shadow-md p-2'>
          <div className='size-full rounded-3xl animate-ping bg-black/20'></div>
        </div> */}
        <h1 className='flex items-center gap-2 font-semibold text-white text-xl ml-1'>Get Latest <PlayCircleIcon className='size-5'/> </h1>
        <p className='text-neutral-300 text-left w-65 ml-1'>Check your role to continue for the transactions</p>
        <div className='flex flex-col gap-3 my-1'>
          <h1 className='font-semibold text-white ml-1.5'>Roles</h1>
          <div className='w-full flex text-white items-center gap-2 bg-neutral-900/70 h-10 rounded-[17px] p-2.5'>
            <FireIcon className='size-6'/>
            <span className='font-semibold'>Fire Fighters</span>
            <div className='flex-1'></div>
            <button className='bg-white text-black py-1 rounded-[12px] px-1 font-semibold cursor-pointer transition-all ease-in-out hover:scale-103 active:scale-97'> <CheckIcon className='size-4.5'/> </button>
          </div>
          <div className='w-full flex text-white items-center gap-2 bg-neutral-900/70 h-10 rounded-[17px] p-2.5'>
            <MapIcon className='size-6'/>
            <span className='font-semibold'>Location Seeker</span>
            <div className='flex-1'></div>
            <button className='bg-neutral-800 text-white py-1 rounded-[12px] px-1 font-semibold cursor-pointer transition-all ease-in-out hover:scale-103 active:scale-97'> <CheckIcon className='size-4.5'/> </button>
          </div>
          <div className='w-full flex text-white items-center gap-2 bg-neutral-900/70 h-10 rounded-[17px] p-2.5'>
            <FilmIcon className='size-6'/>
            <span className='font-semibold'>Film Makers</span>
            <div className='flex-1'></div>
            <button className='bg-neutral-800 text-white py-1 rounded-[12px] px-1 font-semibold cursor-pointer transition-all ease-in-out hover:scale-103 active:scale-97'> <CheckIcon className='size-4.5'/> </button>
          </div>
          
        </div>
        <div className='h-fit rounded-3xl border-2 flex flex-col gap-2 border-neutral-900/70 w-full px-5 py-4'>
            <header className='text-white font-semibold text-lg'>Data Reach</header>
            <p className='text-neutral-300 text-left w-65 '>Our app can reach all over the world but we restrict the main content </p>
            <header className='text-white font-semibold text-lg'>Restricted Countries</header>
            <div className='flex items-center gap-2'>
              <span className='text-white/80 text-[16.6px] font-semibold'>Israel</span>
              <span className='text-white/80 text-[16.6px] font-semibold'>/</span>
              <span className='text-white/80 text-[16.6px] font-semibold'>Vietnam</span>
              <span className='text-white/80 text-[16.6px] font-semibold'>/</span>
              <span className='text-white/80 text-[16.6px] font-semibold'>Cambodia</span>
            </div>
            <p className='text-neutral-300 text-left w-65  flex items-start gap-2'> <BellAlertIcon className='size-6 mt-1 text-red-300'/> these countries are restricted due lack of violent </p>

        </div>
        <div className='flex items-center gap-2  pt-3 border-t-2 border-t-neutral-900/ w-full'>
          <button className='py-1.5 px-3 bg-white text-black font-semibold cursor-pointer transition-all ease-in-out hover:scale-102 active:scale-98 rounded-3xl flex-2'>Transaction</button>
          <button className='py-1.5 px-4 bg-neutral-900/70 text-white font-semibold cursor-pointer transition-all ease-in-out hover:scale-102 active:scale-98 rounded-3xl flex-1'>Dashboard</button>
        </div>
      </div>
    </div>
  )
}

export default App