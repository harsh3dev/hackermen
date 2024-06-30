import React from 'react'
import ResellForm from './components/ResellForm'
import PostsTab from '../buy/components/PostsTab'
import ResellPosts from './components/ResellPosts'

const page = () => {
  return (
    <div className='text-white font-extrabold w-full h-full flex flex-col items-center justify-center mt-20 gap-5 p-8  ' >
      <div className='w-full h-fit rounded-lg border-2 border-white border-dashed p-5 bg-gradient-to-r from-emerald-500/70 to-emerald-900/70 '>
        <div className='w-[60%] grid place-items-center mx-auto '>
          <ResellForm/>
        </div>
      </div>

      <div className='w-full min-h-[100vh] rounded-lg border-2 p-5 '>
        <ResellPosts/>
      </div>
    </div>
  )
}

export default page
