import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Landing from './components/Landing'
import About from './components/About'
import Experiences from './components/Experience'
import Projects from './components/Project'

export default function App() {
  return (
    <>
      <div className="w-full h-screen font-pathway bg-navy">
        <div className="fixed w-full top-0 z-50 h-[10%] bg-navy">
          <Navbar />
        </div>
        <div className="fixed top-[10%] h-[90%] w-1/12 bg-navy hidden lg:block">
          <Sidebar />
        </div>
        <div className="absolute bottom-0 right-0 h-[90%] lg:float-right lg:w-11/12">
          <section id="landing" className="h-full w-full bg-navy"><Landing /></section>
          <section id="about" className="w-full pt-24 bg-navy"><About /></section>
          <section id="experiences" className="w-full pt-24 bg-navy"><Experiences /></section>
          <section id="projects" className="w-full pt-24 bg-navy"><Projects /></section>
          <div className="bg-navy lg:hidden">
            <Sidebar />
          </div>
        </div>
      </div>
    </> 
  )
}
