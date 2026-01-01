import { BriefcaseIcon } from '@heroicons/react/24/solid'
import React from 'react'

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-black flex-col gap-2'>
      <button className=' bg-white flex items-center gap-2 font-semibold text-black rounded-3xl py-2 px-3.5'> <BriefcaseIcon className='size-5.5'/> it works yeaaaah</button>
      <p className='text-neutral-300 text-center w-65'>For sure we win and also take care your team man</p>
    </div>
  )
}

export default App