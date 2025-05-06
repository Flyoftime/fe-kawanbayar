import Header from '@/components/Landing/Header'
import MessagePage from '@/components/Message'
import BottomNavbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#3629B7]'>
        <Header title='Message' />
        <MessagePage />
        <BottomNavbar/>
    </div>
  )
}

export default page