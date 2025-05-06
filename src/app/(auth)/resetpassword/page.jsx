import ResetPassword from '@/components/Auth/Reset'
import Header from '@/components/Landing/Header'
import React from 'react'

const page = () => {
    return (
        <div className='bg-[#3629B7]'>
            <Header title='Reset Password' />
            <ResetPassword />
        </div>
    )
}

export default page