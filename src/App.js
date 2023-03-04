import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="h-16 bg-[#19192C] position-fixed">
          <Navbar />
        </div>
        <div className="flex-1 bg-[#19192C] text-center text-4xl">
          <div className="flex justify-between h-full">
            <div className="w-1/12 h-full position-fixed bg-[#19192C]">
              <Sidebar />
            </div>
            <div className="w-11/12 h-full bg-red-400">
              <h1>world</h1>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}
