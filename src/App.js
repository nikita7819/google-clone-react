import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Routes from './components/Routes'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='dark:bg-gray-800 bg-gray-50 dark:text-gray-200 black min-h-screen sm:w-full'>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Routes />
      <Footer/>
      </div>
    </div>
  )
}

export default App