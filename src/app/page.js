import ForgotPassword from '@/components/Auth/Forgot'
import ResetPassword from '@/components/Auth/Reset'
import SignIn from '@/components/Auth/Signin'
import SignUp from '@/components/Auth/Signup'
import BottomNavbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <ForgotPassword/> */}
      {/* <ResetPassword/> */}
      <BottomNavbar/>
    </main>
  )
}
