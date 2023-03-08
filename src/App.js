import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Landing from './components/Landing'
import About from './components/About'
import Experiences from './components/Experience'
import Projects from './components/Project'

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
        <div className="absolute bottom-0 right-0 h-[90%] md:float-right md:w-11/12">
          <section id="landing" className="h-full w-full bg-[#19192C]"><Landing /></section>
          <section id="about" className="w-full pt-12 bg-[#19192C]"><About /></section>
          <section id="experiences" className="w-full pt-12 bg-[#19192C]"><Experiences /></section>
          <section id="projects" className="w-full pt-12 bg-[#19192C]"><Projects /></section>
        </div>
      </div>
    </> 
  )
}
