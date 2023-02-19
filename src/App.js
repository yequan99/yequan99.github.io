import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      {/* <div className="h-16 w-full bg-green-600">
        <h1>sdfs</h1>
      </div>
      <div className="grid grid-cols-8 h-screen">
        <div className="col-span-1 h-full bg-blue-400">
          <h1>hello</h1>
        </div>
        <div className="col-span-7 h-full bg-red-400">
          <h1>world</h1>
        </div>
      </div> */}
      <div className="flex h-screen flex-col">
        <div className="h-16 bg-cyan-400 position-fixed">
          <Navbar />
        </div>
        <div className="flex-1 bg-yellow-400 text-center text-4xl">
          <div className="grid grid-cols-8 h-full">
            <div className="col-span-1 h-full position-fixed bg-blue-400">
              <h1>hello</h1>
            </div>
            <div className="col-span-7 h-full bg-red-400">
              <h1>world</h1>
            </div>
          </div>
        </div>
      </div>
    </> 
  )
}
