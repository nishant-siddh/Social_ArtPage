import './App.css'
import LeftSidebar from './Components/LeftSidebar/LeftSidebar'
import MiddleSection from './Components/MiddleSection/MiddleSection'
import RightSidebar from './Components/RightSidebar/RightSidebar'

function App() {

  return (
    <>
      <div className='bg-zinc-100'>
        <div className='flex flex-col max-h-screen'>
          <div className='grid grid-cols-[0.7fr,2fr,0.7fr] gap-8 overflow-auto sm:w-[80%] mx-auto py-3 text-lg'>
            <LeftSidebar />
            <MiddleSection />
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
