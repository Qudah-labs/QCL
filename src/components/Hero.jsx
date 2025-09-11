import React, { useState, useRef, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRef = useRef(null)

  const slides = [
    { id: 1, image: `${import.meta.env.BASE_URL}images/slider1.png` },
    { id: 2, image: `${import.meta.env.BASE_URL}images/slider2.png` },
    { id: 3, image: `${import.meta.env.BASE_URL}images/slider3.png` },
    { id: 4, image: `${import.meta.env.BASE_URL}images/slider4.png` },
    { id: 5, image: `${import.meta.env.BASE_URL}images/slider5.png` },
    { id: 6, image: `${import.meta.env.BASE_URL}images/slider6.png` }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  // Initialize video mute state
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      console.log('Video initialized, muted:', isMuted)
    }
  }, [isMuted])

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted
      videoRef.current.muted = newMutedState
      setIsMuted(newMutedState)
      console.log('Video muted:', newMutedState) // Debug log
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/962799970090', '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="home" className="hero">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onLoadedData={() => console.log('Video loaded successfully')}
        onError={(e) => console.error('Video error:', e)}
      >
        <source src={`${import.meta.env.BASE_URL}videos/hero-video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback Images Slider */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Audio Control */}
      <button
        className="audio-control"
        onClick={toggleMute}
        aria-label={isMuted ? 'تشغيل الصوت' : 'كتم الصوت'}
        title={isMuted ? 'تشغيل الصوت' : 'كتم الصوت'}
        style={{
          position: 'fixed',
          top: '120px',
          right: '30px',
          zIndex: 9999,
          background: 'rgba(13, 48, 83, 1)',
          border: '3px solid rgba(192, 192, 192, 1)',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          color: 'white',
          fontSize: '1.4rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.6)',
          transition: 'all 0.3s ease'
        }}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-logo">
          <img src={`${import.meta.env.BASE_URL}new-logo.png`} alt="مختبرات القضـــاة التخصصية" />
        </div>
        
        <p>خدمات التحاليل الطبية بدقة واحترافية</p>
        
        <div className="hero-buttons">
          <button 
            className="btn"
            onClick={() => scrollToSection('services')}
          >
            خدماتنا
          </button>
          <button 
            className="btn btn-secondary"
            onClick={openWhatsApp}
          >
            احجز الآن
          </button>
        </div>

        {/* Features */}
        <div className="hero-features">
          <div className="feature">
            <img src={`${import.meta.env.BASE_URL}icons/Blood Tests/Blood Tests-11.png`} alt="فحوصات الدم" />
            <span>فحوصات الدم الشاملة</span>
          </div>
          <div className="feature">
            <img src={`${import.meta.env.BASE_URL}icons/Allergy Tests/Allergy Tests-14.png`} alt="فحوصات الحساسية" />
            <span>فحوصات الحساسية</span>
          </div>
          <div className="feature">
            <img src={`${import.meta.env.BASE_URL}icons/Home Service/Home Service-44.png`} alt="الخدمة المنزلية" />
            <span>الخدمة المنزلية</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
