
import Dashboard from '@/components/Landing/Dashboard'
import DashboardHeader from '@/components/Landing/HeaderDashboard'
import BottomNavbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="bg-[#3629B7]">
    <DashboardHeader/>
      <Dashboard/>
      <BottomNavbar/>
    </main>
  )
}
