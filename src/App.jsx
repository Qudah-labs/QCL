import './App.css';
import { useState, useEffect, useRef } from 'react';
import React from 'react';

const sliderImages = [
  '/slider1.png',
  '/slider2.png',
  '/slider3.png',
  '/slider4.png',
  '/slider5.png',
  '/slider6.png',
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = sliderImages.length;
  const newsStyle = 'split';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  function NewsAndInfoGrid() {
    return (
      <section className="news-info-grid-section">
        <div className="news-info-grid">
          {/* Info Cards (full width) */}
          <div className="news-info-cards" style={{ width: '100%' }}>
            {/* Locations */}
            <div className="info-card">
              <div className="info-card-header"><span role="img" aria-label="فروعنا">📍</span> <h3>فروعنا</h3></div>
              <div className="info-card-content locations-list">
                <div><strong>الفرع الأول – إربد:</strong> شارع الأمير حسن – مقابل مستشفى الإسراء<br/>📞 027240099 | 🕗 8 صباحًا - 8 مساءً</div>
                <div><strong>الفرع الثاني – الحصن:</strong> شارع الملك عبدالله الثاني – بجانب صيدلية الحصن<br/>📞 027400099 | 🕗 8 صباحًا - 6 مساءً</div>
                <div><strong>الفرع الثالث – الصريح:</strong> شارع المدارس – بجانب صيدلية الصريح<br/>📞 027500099 | 🕗 8 صباحًا - 5 عصرًا</div>
                <div><strong>الفرع الرابع – عجلون:</strong> الساحة العامة – قرب الإشارة الضوئية – مقابل بنك الأردن<br/>📞 026445099 | 🕗 8 صباحًا - 5 عصرًا</div>
                <div><strong>الفرع الخامس – المزار الشمالي:</strong> مدخل البلد – مقابل محكمة صلح المزار الشمالي<br/>📞 02/6505099 | 🕗 8 صباحًا - 6 عصرًا</div>
              </div>
            </div>
            {/* Contact Us */}
            <div className="info-card">
              <div className="info-card-header"><span role="img" aria-label="تواصل معنا">📞</span> <h3>تواصل معنا</h3></div>
              <div className="info-card-content">
                <div><a href="https://www.facebook.com/Cons.Labs" target="_blank" rel="noopener noreferrer">صفحة الفيسبوك</a></div>
                <div><a href="https://www.instagram.com/qudah.labs?utm_source=ig_web_button_share_sheet&igsh=azBoZWZldXIzZGMw" target="_blank" rel="noopener noreferrer">حساب الإنستاغرام</a></div>
                <div><a href="https://www.youtube.com/@QCL2025" target="_blank" rel="noopener noreferrer">قناتنا على اليوتيوب</a></div>
                <div><a href="https://wa.me/962799970090" target="_blank" rel="noopener noreferrer">Whatsapp</a></div>
                <div><a href="mailto:ceo@labs.qudah.com">ceo@labs.qudah.com</a></div>
              </div>
            </div>
            {/* Important Links */}
            <div className="info-card">
              <div className="info-card-header"><span role="img" aria-label="روابط مهمة">🔗</span> <h3>روابط مهمة</h3></div>
              <div className="info-card-content">
                <div><a href="https://wa.me/962799970090" target="_blank" rel="noopener noreferrer">خدمة السحب المنزلي</a></div>
                <div><a href="/qr-scan-full-url.html">نتائج الفحوصات المخبرية</a></div>
                <div><a href="https://qudah.yaseer-lis.net/lab-portal/#/login" target="_blank" rel="noopener noreferrer">نتائج الفحوصات المخبرية - بوابة المختبرات</a></div>
                <div><a href="https://qudah.yaseer-lis.net/doctors#/" target="_blank" rel="noopener noreferrer">نتائج الفحوصات المخبرية - بوابة الأطباء</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div dir="rtl" lang="ar" style={{ fontFamily: 'Segoe UI, Cairo, Arial, sans-serif', background: 'var(--white)', color: 'var(--gray-dark)' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" />
        <div className="hero-content">
          <img src="/icon.png" alt="logo" className="logo hero-logo" style={{background: '#fff', borderRadius: '50%', boxShadow: '0 4px 24px #0d305344', padding: '12px', marginBottom: '24px', height: '140px'}} />
          <h1 className="hero-title" style={{fontSize: '3.2em', fontWeight: '900', margin: '0 0 12px 0', color: '#fff', letterSpacing: '2px', textShadow: '0 2px 8px #0d305388'}}>مختبرات القضـــاة التخصصية</h1>
          <p className="hero-subtitle" style={{fontSize: '1.4em', color: '#e0e7ef', marginBottom: '32px', fontWeight: '500', letterSpacing: '1px'}}>Qudah Consulting Laboratories</p>
        </div>
        <div className="hero-slider">
          <div className="slider-container">
            {sliderImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={`Slider ${idx + 1}`}
                className={`slide${currentSlide === idx ? ' active' : ''}`}
              />
            ))}
            <div className="slider-dots">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <span
                  key={idx}
                  className={`slider-dot${currentSlide === idx ? ' active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky-nav">
        <a href="#about">من نحن</a>
        <a href="#vision">الرؤية</a>
        <a href="#mission">الرسالة</a>
        <a href="#services">الخدمات</a>
        <a href="#insurances">شركات التأمين</a>
        <a href="#branches">فروعنا</a>
        <a href="#contact">تواصل معنا</a>
        <a href="#links">روابط</a>
      </nav>

      <main>
        {/* About, Vision, Mission - Combined Fancy Section */}
        <section className="about-vm-section">
          <div className="about-vm-card">
            <div className="about-vm-item">
              <div className="about-vm-icon" role="img" aria-label="من نحن">👨‍🔬</div>
              <h2>من نحن</h2>
              <p>مختبر متخصص في تقديم خدمات التحاليل الطبية بدقة واحترافية، مع الالتزام بأعلى معايير الجودة وسرعة الإنجاز.</p>
            </div>
            <div className="about-vm-divider" />
            <div className="about-vm-item">
              <div className="about-vm-icon" role="img" aria-label="الرؤية">🌟</div>
              <h2>الرؤية</h2>
              <p>أن تكون مجموعة مختبرات القضـــاة التخصصية صرحاً رائداً ومتميزاً يفضله المراجعون في طلب الرعاية الصحية.</p>
            </div>
            <div className="about-vm-divider" />
            <div className="about-vm-item">
              <div className="about-vm-icon" role="img" aria-label="الرسالة">🎯</div>
              <h2>الرسالة</h2>
              <p>تقديم الرعايه الصحيه ذات الجوده العاليه للمراجعين ، ونشر الوعي الصحي بينهم . والمساهمه في اعداد الكوادر المتخصصة في ذلك .</p>
            </div>
          </div>
        </section>
        {/* Fancy Services Section */}
        <section id="services" className="services-fancy-section">
          <h2 className="services-title">خدماتنا</h2>
          <div className="services-grid">
            <div className="service-item">
              <span className="service-icon" role="img" aria-label="فحوصات الدم الشاملة">🩸</span>
              <p>فحوصات الدم الشاملة</p>
            </div>
            <div className="service-item">
              <span className="service-icon" role="img" aria-label="فحوصات الحساسية">🌾</span>
              <p>فحوصات الحساسية</p>
            </div>
            <div className="service-item">
              <span className="service-icon" role="img" aria-label="فحوصات ما قبل الزواج">💍</span>
              <p>فحوصات ما قبل الزواج</p>
            </div>
            <div className="service-item">
              <span className="service-icon" role="img" aria-label="فحوصات الأنسجة والأورام">🧬</span>
              <p>فحوصات الأنسجة والأورام</p>
            </div>
            <div className="service-item">
              <span className="service-icon" role="img" aria-label="فحوصات الجينات">🧪</span>
              <p>فحوصات الجينات</p>
            </div>
            <div className="service-item">
              <span className="service-icon" role="img" aria-label="دورات التعليم المستمر">🎓</span>
              <p>دورات التعليم المستمر</p>
            </div>
          </div>
        </section>

        {/* Fancy Insurances Section */}
        <section id="insurances" className="insurances-fancy-section">
          <h2 className="insurances-title">شركات التأمين</h2>
          <div className="insurances-grid">
            <div className="insurance-item"><span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span><p>جامعة اليرموك</p></div>
            <div className="insurance-item"><span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span><p>جامعة البلقاء</p></div>
            <div className="insurance-item"><span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span><p>جامعة عجلون الوطنية</p></div>
            <div className="insurance-item"><span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span><p>نقابة المهندسين</p></div>
            <div className="insurance-item"><span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span><p>نقابة المحامين</p></div>
            <div className="insurance-item"><span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span><p>نقابة أطباء الأسنان</p></div>
            <div className="insurance-item"><span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span><p>نات هيلث</p></div>
            <div className="insurance-item"><span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span><p>ميد سيرفس</p></div>
            <div className="insurance-item"><span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span><p>الشرق العربي للتأمين</p></div>
            <div className="insurance-item"><span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span><p>العربية الأوروبية</p></div>
            <div className="insurance-item"><span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span><p>ميديكسا</p></div>
            <div className="insurance-item"><span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span><p>أومني كير</p></div>
            <div className="insurance-item"><span className="insurance-icon" role="img" aria-label="تأمين">🛡️</span><p>غلوب ميد</p></div>
          </div>
        </section>

        {/* News and Info Grid Section */}
        <NewsAndInfoGrid />
      </main>

      {/* Modern Footer */}
      <footer className="modern-footer">
        <div className="footer-socials">
          <a href="https://www.facebook.com/Cons.Labs" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span role="img" aria-label="Facebook">📘</span></a>
          <a href="https://www.instagram.com/qudah.labs?utm_source=ig_web_button_share_sheet&igsh=azBoZWZldXIzZGMw" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><span role="img" aria-label="Instagram">📸</span></a>
          <a href="https://www.youtube.com/@QCL2025" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><span role="img" aria-label="YouTube">▶️</span></a>
          <a href="https://wa.me/962799970090" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><span role="img" aria-label="Whatsapp">💬</span></a>
        </div>
        <p>© 2025 مختبرات القضـــاة التخصصية</p>
      </footer>
    </div>
  );
}

export default App;
