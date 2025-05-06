import ActivityPage from '@/components/Activity'
import Header from '@/components/Landing/Header'
import BottomNavbar from '@/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div className='bg-[#3629B7]'>
            <Header title='Activity' />
            <ActivityPage />
            <BottomNavbar />
        </div>
    )
}

export default page