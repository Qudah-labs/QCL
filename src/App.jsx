import './App.css';
import { useState, useEffect, useRef } from 'react';
import React from 'react';

const sliderImages = [
  `${import.meta.env.BASE_URL}slider1.png`,
  `${import.meta.env.BASE_URL}slider2.png`,
  `${import.meta.env.BASE_URL}slider3.png`,
  `${import.meta.env.BASE_URL}slider4.png`,
  `${import.meta.env.BASE_URL}slider5.png`,
  `${import.meta.env.BASE_URL}slider6.png`,
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef(null);
  const totalSlides = sliderImages.length;
  const newsStyle = 'split';
  const [isSliderHovered, setIsSliderHovered] = useState(false);

  // Smooth scrolling for navigation links
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  // Handle navigation visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Auto-slide functionality with pause on hover
  useEffect(() => {
    if (isSliderHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides, isSliderHovered]);

  // Loading state
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Mobile video optimization
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set mobile-friendly video attributes
      video.setAttribute('playsinline', 'true');
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('x5-playsinline', 'true');
      
      // Handle video loading errors
      const handleError = (e) => {
        console.log('Video loading error:', e);
        // Fallback to poster image if video fails
        video.style.display = 'none';
      };
      
      const handleLoadStart = () => {
        console.log('Video loading started');
      };
      
      const handleCanPlay = () => {
        console.log('Video can play');
      };
      
      video.addEventListener('error', handleError);
      video.addEventListener('loadstart', handleLoadStart);
      video.addEventListener('canplay', handleCanPlay);
      
      return () => {
        video.removeEventListener('error', handleError);
        video.removeEventListener('loadstart', handleLoadStart);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const toggleVideoAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsVideoMuted(videoRef.current.muted);
    }
  };



  function NewsAndInfoGrid() {
    return (
      <section className="news-info-grid-section" id="contact">
        <div className="news-info-grid">
          <div className="news-info-cards" style={{ width: '100%' }}>
            {/* Locations */}
            <div className="info-card enhanced-card">
              <div className="info-card-header">
                <span role="img" aria-label="فروعنا" className="card-icon">📍</span>
                <h3>فروعنا</h3>
              </div>
              <div className="info-card-content locations-list">
                <div className="location-item">
                  <strong>الفرع الأول:</strong> 
                  <span>اربد - وسط البلد- شارع الملك طلال الموجود بين شارع السينما وشارع الهاشمي - سوق ابو الشعر التجاري مقابل صيدلية الحسن</span>
                  <div className="contact-info">📞 027245099 | 🕗 8 صباحًا - 5 عصرًا</div>
                  <div className="contact-info">
                    <a href="https://maps.app.goo.gl/m4cY1gCoSTGMRf6U7" target="_blank" rel="noopener noreferrer">
                      📍 عرض على الخريطة
                    </a>
                  </div>
                </div>
                <div className="location-item">
                  <strong>الفرع الثاني:</strong> 
                  <span>اربد - ضاحية الحسين- مقابل بوابة مستشفى الأميرة رحمة التعليمي</span>
                  <div className="contact-info">📞 026545099 | 🕗 8 صباحًا - 5 عصرًا</div>
                  <div className="contact-info">
                    <a href="https://maps.app.goo.gl/aSrZSZa9dsXobPQc6" target="_blank" rel="noopener noreferrer">
                      📍 عرض على الخريطة
                    </a>
                  </div>
                </div>
                <div className="location-item">
                  <strong>الفرع الثالث (المركزي):</strong> 
                  <span>اربد - شارع الملك عبدالله الثاني- جنوب نفق مدينة الحسن- مجمع الرشدان- قبل مفروشات شهوان</span>
                  <div className="contact-info">📞 027405099 | 🕗 8 صباحًا - 8 مساءً</div>
                  <div className="contact-info">
                    <a href="https://maps.app.goo.gl/TBXtbqJoFZEPuQvn9" target="_blank" rel="noopener noreferrer">
                      📍 عرض على الخريطة
                    </a>
                  </div>
                </div>
                <div className="location-item">
                  <strong>الفرع الرابع:</strong> 
                  <span>عجلون - الساحة العامة- قرب الإشارة الضوئية- مقابل بنك الأردن</span>
                  <div className="contact-info">📞 026445099 | 🕗 8 صباحًا - 5 عصرًا</div>
                  <div className="contact-info">
                    <a href="https://maps.app.goo.gl/zkzRoEg3ob6ugwBj6" target="_blank" rel="noopener noreferrer">
                      📍 عرض على الخريطة
                    </a>
                  </div>
                </div>
                <div className="location-item">
                  <strong>الفرع الخامس:</strong> 
                  <span>المزار الشمالي (تم الإفتتاح) - مدخل البلد - مقابل محكمة صلح المزار الشمالي</span>
                  <div className="contact-info">📞 02/6505099 | 🕗 8 صباحًا - 5 عصرًا</div>
                  <div className="contact-info">
                    <a href="https://maps.app.goo.gl/t9ipUWanZVjauVVUA" target="_blank" rel="noopener noreferrer">
                      📍 عرض على الخريطة
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Us */}
            <div className="info-card enhanced-card">
              <div className="info-card-header">
                <span role="img" aria-label="تواصل معنا" className="card-icon">📞</span>
                <h3>تواصل معنا</h3>
              </div>
              <div className="info-card-content">
                <div className="social-link">
                  <a href="https://www.facebook.com/Cons.Labs" target="_blank" rel="noopener noreferrer">
                    <span role="img" aria-label="Facebook">📘</span> صفحة الفيسبوك
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://www.instagram.com/qudah.labs?utm_source=ig_web_button_share_sheet&igsh=azBoZWZldXIzZGMw" target="_blank" rel="noopener noreferrer">
                    <span role="img" aria-label="Instagram">📸</span> حساب الإنستاغرام
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://www.youtube.com/@QCL2025" target="_blank" rel="noopener noreferrer">
                    <span role="img" aria-label="YouTube">▶️</span> قناتنا على اليوتيوب
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://wa.me/962799970090" target="_blank" rel="noopener noreferrer">
                    <span role="img" aria-label="Whatsapp">💬</span> Whatsapp
                  </a>
                </div>
                <div className="social-link">
                  <a href="mailto:ceo@labs.qudah.com">
                    <span role="img" aria-label="Email">📧</span> ceo@labs.qudah.com
                  </a>
                </div>
              </div>
            </div>
            {/* Important Links */}
            <div className="info-card enhanced-card">
              <div className="info-card-header">
                <span role="img" aria-label="روابط مهمة" className="card-icon">🔗</span>
                <h3>روابط مهمة</h3>
              </div>
              <div className="info-card-content">
                <div className="important-link">
                  <a href="https://wa.me/962799970090" target="_blank" rel="noopener noreferrer">
                    <span role="img" aria-label="Home Service">🏠</span> خدمة السحب المنزلي
                  </a>
                </div>
                <div className="important-link">
                  <a href="/QCL/qr-scan-full-url.html">
                    <span role="img" aria-label="Lab Results">📋</span> نتائج الفحوصات المخبرية
                  </a>
                </div>
                <div className="important-link">
                  <a href="https://qudah.yaseer-lis.net/lab-portal/#/login" target="_blank" rel="noopener noreferrer">
                    <span role="img" aria-label="Lab Portal">🔬</span> بوابة المختبرات
                  </a>
                </div>
                <div className="important-link">
                  <a href="https://qudah.yaseer-lis.net/doctors#/" target="_blank" rel="noopener noreferrer">
                    <span role="img" aria-label="Doctors Portal">👨‍⚕️</span> بوابة الأطباء
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>جاري التحميل...</p>
      </div>
    );
  }

  return (
    <div dir="rtl" lang="ar" className="app-container">
      {/* Modern Header Navigation */}
      <header className={`modern-header ${isNavVisible ? 'visible' : 'hidden'}`}>
        <div className="header-container">
          {/* Logo removed from header as requested */}
          <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="nav-link">الرئيسية</button></li>
              <li><button onClick={() => scrollToSection('about')} className="nav-link">من نحن</button></li>
              <li><button onClick={() => scrollToSection('vision')} className="nav-link">الرؤية</button></li>
              <li><button onClick={() => scrollToSection('mission')} className="nav-link">الرسالة</button></li>
              <li><button onClick={() => scrollToSection('services')} className="nav-link">خدماتنا</button></li>
              <li><button onClick={() => scrollToSection('insurances')} className="nav-link">شركات التأمين</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="nav-link">تواصل معنا</button></li>
              <li><a href="/QCL/qr-scan-full-url.html" className="nav-link" style={{textDecoration: 'none'}}>📋 النتائج</a></li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="https://wa.me/962799970090" className="header-cta" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="WhatsApp">💬</span>
              <span className="cta-text">احجز الآن</span>
            </a>
            
            <button 
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="القائمة"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" />
        <video 
          className="hero-video-bg"
          autoPlay 
          muted 
          loop 
          playsInline
          poster={`${import.meta.env.BASE_URL}slider1.png`}
          ref={videoRef}
        >
          <source src={`${import.meta.env.BASE_URL}hero-video.mp4`} type="video/mp4" />
          <source src={`${import.meta.env.BASE_URL}hero-video.webm`} type="video/webm" />
          {/* Fallback to image if video doesn't load */}
          <img src={`${import.meta.env.BASE_URL}slider1.png`} alt="مختبرات القضـــاة التخصصية" />
        </video>
        <div className="hero-content">
          <img 
            src={`${import.meta.env.BASE_URL}new-logo.png`} 
            alt="مختبرات القضـــاة التخصصية" 
            className="logo hero-logo" 
          />
        </div>
        
        {/* Audio Control Button */}
        <button 
          className="audio-control-btn"
          onClick={toggleVideoAudio}
          aria-label={isVideoMuted ? "تشغيل الصوت" : "كتم الصوت"}
          title={isVideoMuted ? "تشغيل الصوت" : "كتم الصوت"}
        >
          {isVideoMuted ? (
            <span role="img" aria-label="كتم الصوت">🔇</span>
          ) : (
            <span role="img" aria-label="تشغيل الصوت">🔊</span>
          )}
        </button>
      </section>

      <main>
        {/* About, Vision, Mission - Enhanced Section */}
        <section className="about-vm-section" id="about">
          <div className="about-vm-card">
            <div className="about-vm-item" id="about">
              <div className="about-vm-icon" role="img" aria-label="من نحن">👨‍🔬</div>
              <h2>من نحن</h2>
              <p>مختبر متخصص في تقديم خدمات التحاليل الطبية بدقة واحترافية، مع الالتزام بأعلى معايير الجودة وسرعة الإنجاز.</p>
            </div>
            <div className="about-vm-divider" />
            <div className="about-vm-item" id="vision">
              <div className="about-vm-icon" role="img" aria-label="الرؤية">🌟</div>
              <h2>الرؤية</h2>
              <p>أن تكون مجموعة مختبرات القضـــاة التخصصية صرحاً رائداً ومتميزاً يفضله المراجعون في طلب الرعاية الصحية.</p>
            </div>
            <div className="about-vm-divider" />
            <div className="about-vm-item" id="mission">
              <div className="about-vm-icon" role="img" aria-label="الرسالة">🎯</div>
              <h2>الرسالة</h2>
              <p>تقديم الرعايه الصحيه ذات الجوده العاليه للمراجعين ، ونشر الوعي الصحي بينهم . والمساهمه في اعداد الكوادر المتخصصة في ذلك .</p>
            </div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section id="services" className="services-fancy-section">
          <h2 className="services-title">خدماتنا</h2>
          <div className="services-grid">
            <div className="service-item enhanced-service">
              <span className="service-icon" role="img" aria-label="فحوصات الدم الشاملة">🩸</span>
              <h3>فحوصات الدم الشاملة</h3>
              <p>تحاليل شاملة لجميع مكونات الدم</p>
            </div>
            <div className="service-item enhanced-service">
              <span className="service-icon" role="img" aria-label="فحوصات الحساسية">🌾</span>
              <h3>فحوصات الحساسية</h3>
              <p>تشخيص دقيق لأنواع الحساسية المختلفة</p>
            </div>
            <div className="service-item enhanced-service">
              <span className="service-icon" role="img" aria-label="فحوصات ما قبل الزواج">💍</span>
              <h3>فحوصات ما قبل الزواج</h3>
              <p>فحوصات شاملة لضمان صحة الزوجين</p>
            </div>
            <div className="service-item enhanced-service">
              <span className="service-icon" role="img" aria-label="فحوصات الأنسجة والأورام">🧬</span>
              <h3>فحوصات الأنسجة والأورام</h3>
              <p>تحاليل متخصصة للأنسجة والأورام</p>
            </div>
            <div className="service-item enhanced-service">
              <span className="service-icon" role="img" aria-label="فحوصات الجينات">🧪</span>
              <h3>فحوصات الجينات</h3>
              <p>تحاليل جينية متقدمة</p>
            </div>
            <div className="service-item enhanced-service">
              <span className="service-icon" role="img" aria-label="دورات التعليم المستمر">🎓</span>
              <h3>دورات التعليم المستمر</h3>
              <p>برامج تعليمية متخصصة للكوادر الطبية</p>
            </div>
          </div>
        </section>

        {/* Enhanced Insurances Section */}
        <section id="insurances" className="insurances-fancy-section">
          <h2 className="insurances-title">شركات التأمين</h2>
          <div className="insurances-grid">
            <div className="insurance-item enhanced-insurance">
              <span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span>
              <h3>جامعة اليرموك</h3>
            </div>
            <div className="insurance-item enhanced-insurance">
              <span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span>
              <h3>جامعة البلقاء</h3>
            </div>
            <div className="insurance-item enhanced-insurance">
              <span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span>
              <h3>جامعة عجلون الوطنية</h3>
            </div>
            <div className="insurance-item enhanced-insurance">
              <span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span>
              <h3>نقابة المهندسين</h3>
            </div>
            <div className="insurance-item enhanced-insurance">
              <span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span>
              <h3>نقابة المحامين</h3>
            </div>
            <div className="insurance-item enhanced-insurance">
              <span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span>
              <h3>نقابة أطباء الأسنان</h3>
            </div>
            <div className="insurance-item enhanced-insurance">
              <span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span>
              <h3>نات هيلث</h3>
            </div>
            <div className="insurance-item enhanced-insurance">
              <span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span>
              <h3>ميد سيرفس</h3>
            </div>
            <div className="insurance-item enhanced-insurance">
              <span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span>
              <h3>الشرق العربي للتأمين</h3>
            </div>
            <div className="insurance-item enhanced-insurance">
              <span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span>
              <h3>العربية الأوروبية</h3>
            </div>
            <div className="insurance-item enhanced-insurance">
              <span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span>
              <h3>ميديكسا</h3>
            </div>
            <div className="insurance-item enhanced-insurance">
              <span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span>
              <h3>أومني كير</h3>
            </div>
            <div className="insurance-item enhanced-insurance">
              <span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span>
              <h3>غلوب ميد</h3>
            </div>
          </div>
        </section>



        {/* News and Info Grid Section */}
        <NewsAndInfoGrid />
      </main>

      {/* Enhanced Footer */}
      <footer className="modern-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>مختبرات القضـــاة التخصصية</h3>
            <p>نحن نقدم أفضل خدمات التحاليل الطبية بأعلى معايير الجودة</p>
          </div>
          <div className="footer-socials">
            <a href="https://www.facebook.com/Cons.Labs" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span role="img" aria-label="Facebook">📘</span>
            </a>
            <a href="https://www.instagram.com/qudah.labs?utm_source=ig_web_button_share_sheet&igsh=azBoZWZldXIzZGMw" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span role="img" aria-label="Instagram">📸</span>
            </a>
            <a href="https://www.youtube.com/@QCL2025" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <span role="img" aria-label="YouTube">▶️</span>
            </a>
            <a href="https://wa.me/962799970090" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp">
              <span role="img" aria-label="Whatsapp">💬</span>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 مختبرات القضـــاة التخصصية - جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
