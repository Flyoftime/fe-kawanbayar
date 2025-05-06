
import ForgotPassword from '@/components/Auth/Forgot'
import Header from '@/components/Landing/Header'
import React from 'react'

const page = () => {
    return (
        <div className='bg-[#3629B7]'>
            <Header title='Forgot Password' />
            <ForgotPassword />
        </div>
    )
}

export default page