import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Insurance from './components/Insurance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import QRScanner from './components/QRScanner'
import FacebookFeed from './components/FacebookFeed'
// import PWAInstall from './components/PWAInstall' // Disabled
import './App.css'

function App() {
  const [isQRScannerOpen, setIsQRScannerOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Listen for QR scanner open event
    const handleOpenQRScanner = () => {
      setIsQRScannerOpen(true)
    }

    window.addEventListener('openQRScanner', handleOpenQRScanner)
    
    return () => {
      window.removeEventListener('openQRScanner', handleOpenQRScanner)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>جاري التحميل...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Insurance />
        <Contact />
        <FacebookFeed />
      </main>
      <Footer />
      
      {/* QR Scanner Modal */}
      {isQRScannerOpen && (
        <QRScanner onClose={() => setIsQRScannerOpen(false)} />
      )}
      
      {/* PWA Install Prompt - Disabled */}
      {/* <PWAInstall /> */}
    </div>
  )
}

export default App
