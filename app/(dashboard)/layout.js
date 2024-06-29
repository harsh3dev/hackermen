import Footer from '@/app/components/Footer/Footer'
import Navbar from '@/app/components/Navbar/Navbar'
import React from 'react'

const layout = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative gap-10 ">
      <Navbar/>
      <div className='w-full h-full '>

        {children}
      </div>
      <Footer/>
    </main>
  )
}

export default layout
