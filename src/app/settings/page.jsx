import Header from '@/components/Landing/Header'
import BottomNavbar from '@/components/Navbar'
import SettingPage from '@/components/Settings'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#3629B7]'>
        <Header title='Settings' />
        <SettingPage />
        <BottomNavbar/>
    </div>
  )
}

export default page