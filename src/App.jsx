import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Display from './components/Display'

const App = () => {
  return (

    <div
      className='bg-bg-main h-screen text-white'>

      <Display />
      
      <Sidebar />

    </div>
  )
}

export default App
