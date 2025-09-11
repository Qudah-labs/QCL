import React from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'شركات التأمين', href: '#insurance' },
    { name: 'تواصل معنا', href: '#contact' }
  ]

  const services = [
    'فحوصات الدم الشاملة',
    'فحوصات الحساسية',
    'فحوصات ما قبل الزواج',
    'فحوصات الأنسجة والأورام',
    'فحوصات الجينات',
    'دورات التعليم المستمر'
  ]

  const socialMedia = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/Cons.Labs',
      icon: 'fab fa-facebook-f',
      color: '#1877f2'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/qudah.labs',
      icon: 'fab fa-instagram',
      color: '#e4405f'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@QCL2025',
      icon: 'fab fa-youtube',
      color: '#ff0000'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/962799970090',
      icon: 'fab fa-whatsapp',
      color: '#25d366'
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openSocial = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src={`${import.meta.env.BASE_URL}new-logo.png`} alt="مختبرات القضـــاة التخصصية" />
              <div className="logo-text">
                <h3>مختبرات القضـــاة التخصصية</h3>
                <p>Qudah Consulting laboratories</p>
              </div>
            </div>
            <p className="footer-description">
              مختبر متخصص في تقديم خدمات التحاليل الطبية بدقة واحترافية، 
              مع الالتزام بأعلى معايير الجودة وسرعة الإنجاز.
            </p>
            <div className="social-links">
              <h5>تابعنا على وسائل التواصل الاجتماعي</h5>
              <div className="social-buttons">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    style={{ '--social-color': social.color }}
                    title={social.name}
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>روابط سريعة</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href.substring(1))
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>خدماتنا</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>معلومات التواصل</h4>
            <div className="contact-info">
              <div className="contact-item">
                <img src={`${import.meta.env.BASE_URL}icons/Contact/Contact-29.png`} alt="البريد الإلكتروني" />
                <span>ceo@labs.qudah.com</span>
              </div>
              <div className="contact-item">
                <img src={`${import.meta.env.BASE_URL}icons/WhatsApp/WhatsApp-02.png`} alt="واتساب" />
                <span>+962799970090</span>
              </div>
            </div>
            <div className="footer-cta">
              <button 
                className="btn"
                onClick={() => openSocial('https://wa.me/962799970090')}
              >
                احجز الآن
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              © {currentYear} مختبرات القضـــاة التخصصية - جميع الحقوق محفوظة
            </p>
            <p className="footer-bottom-english">
              Qudah Labs - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
