import React from 'react'
import PostsTab from './components/PostsTab'

const page = () => {
  return (
    <main className='text-white text-8xl font-extrabold w-full h-full flex flex-col items-center justify-center mt-20  ' >
      <div className=' w-full h-full flex flex-col mx-auto border-2 rounded-md bg-gray-700 '>
      <PostsTab/>
      </div>
    </main>
  )
}

export default page
