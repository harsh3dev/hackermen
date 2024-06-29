import React from 'react'
import PostsTab from './components/PostsTab'
import Filter from './components/Filter'

const page = () => {
  return (
    <main className='text-white font-extrabold w-full h-full flex flex-col items-center justify-center mt-20 p-5  ' >
      <Filter/>
      <div className=' w-full h-full flex flex-col mx-auto  rounded-md p-5 '>
      <PostsTab/>
      </div>
    </main>
  )
}

export default page
