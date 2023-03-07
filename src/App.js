import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Landing from './components/Landing'
import About from './components/About'
import Experience from './components/Experience'

export default function App() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="fixed w-full top-0 z-50 h-[10%] bg-[#19192C]">
          <Navbar />
        </div>
        <div className="fixed top-[10%] h-[90%] w-1/12 bg-[#19192C] hidden md:block">
          <Sidebar />
        </div>
        <div className="h-full w-full bg-[#19192C] md:float-right md:w-11/12">
          <Landing />
          <About />
          <Experience />
        </div>
      </div>
    </> 
  )
}
