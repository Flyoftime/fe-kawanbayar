
import SignUp from '@/components/Auth/Signup'
import Header from '@/components/Landing/Header'
import React from 'react'

const page = () => {
    return (
        <div className='bg-[#3629B7]'>
            <Header title='Sign Up' />
            <SignUp />
        </div>
    )
}

export default page