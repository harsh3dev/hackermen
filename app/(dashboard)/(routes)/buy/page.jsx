import React from 'react'
import PostsTab from './components/PostsTab'
import Filter from './components/Filter'
import CallModal from './components/CallModal'

const page = () => {
  return (
    <main className='text-white  font-extrabold w-full h-full flex flex-col items-center justify-center mt-20 p-5 relative  ' >
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      {/* <CallModal/> */}
      {/* <Filter/> */}
      <div className=' w-full h-full flex flex-col mx-auto  rounded-md p-5 '>
      <PostsTab/>
      </div>
    </main>
  )
}

export default page
