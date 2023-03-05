import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Landing from './components/Landing'

export default function App() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="sticky top-0 z-50 h-[10%] bg-[#19192C]">
          <Navbar />
        </div>
        <div className="fixed top-[10%] h-[90%] w-1/12 bg-[#19192C] hidden md:block">
          <Sidebar />
        </div>
        <div className="bg-[#19192C] pl-24 h-[90%] w-full md:float-right md:w-11/12">
          <Landing />
        </div>
      </div>
    </> 
  )
}
