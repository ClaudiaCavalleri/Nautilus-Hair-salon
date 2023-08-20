import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import SocialButton from './components/SocialButton/SocialButton'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
        <main className='font-sans'>
          <div className='w-300 md:w-600 xl:w-900 text-item'>
            <Hero />
            
            <div className='orari-ricevimento'>
              <h3>Riceviamo su appuntamento:</h3>
              <ul>
                <li>martedì: 9 -18</li>
                <li>mercoledì: 9 -18</li>
                <li>giovedì: 14 -20</li>
                <li>venerdì: 9 -18</li>
                <li>sabato: 9 -18</li>
                <li>domenica: 8 -12</li>
              </ul>
            </div>
            <div className='contacts'>
              <h3>I nostri contatti:</h3>
              <p>+00 555 45 54 55</p>
              <div className='social-container'>
                <h4>Seguici sui social</h4>
                <div className='social'>
                  <SocialButton/>
                  <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'></a>
                  <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>Instagram</a>
                  <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>Pinterest</a>
                  <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>Tik Tok</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      <Footer />
    </>
  )
}

export default App
