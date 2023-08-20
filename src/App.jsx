import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Opening from './components/Opening/Opening'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
        <main className='font-sans'>
          <div className='w-300 md:w-600 xl:w-900 text-item'>
            <Hero />
            <Opening />
            <Contacts />
          </div>
        </main>
      <Footer />
    </>
  )
}

export default App
