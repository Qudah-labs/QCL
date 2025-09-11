import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    closeMenu()
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <img src={`${import.meta.env.BASE_URL}new-logo.png`} alt="مختبرات القضـــاة التخصصية" />
            <div className="logo-text">
              <h1>مختبرات القضـــاة التخصصية</h1>
              <p>Qudah Consulting laboratories</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              <li><a href="#home" onClick={() => scrollToSection('home')}>الرئيسية</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>من نحن</a></li>
              <li><a href="#services" onClick={() => scrollToSection('services')}>خدماتنا</a></li>
              <li><a href="#insurance" onClick={() => scrollToSection('insurance')}>شركات التأمين</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>تواصل معنا</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="فتح القائمة"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <button 
            className="close-btn"
            onClick={closeMenu}
            aria-label="إغلاق القائمة"
          >
            ×
          </button>
          <ul>
            <li><a href="#home" onClick={() => scrollToSection('home')}>الرئيسية</a></li>
            <li><a href="#about" onClick={() => scrollToSection('about')}>من نحن</a></li>
            <li><a href="#vision" onClick={() => scrollToSection('vision')}>الرؤية</a></li>
            <li><a href="#mission" onClick={() => scrollToSection('mission')}>الرسالة</a></li>
            <li><a href="#services" onClick={() => scrollToSection('services')}>خدماتنا</a></li>
            <li><a href="#insurance" onClick={() => scrollToSection('insurance')}>شركات التأمين</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')}>تواصل معنا</a></li>
            <li><a href="https://wa.me/962799970090" target="_blank" rel="noopener noreferrer">احجز الآن</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
