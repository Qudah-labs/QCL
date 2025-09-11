import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>من نحن</h2>
          <p>مختبر متخصص في تقديم خدمات التحاليل الطبية بدقة واحترافية</p>
        </div>

        <div className="about-content">
          <div className="about-grid">
            {/* Vision */}
            <div id="vision" className="about-card">
              <div className="card-icon">
                <img src={`${import.meta.env.BASE_URL}icons/Vision/Vision-07.png`} alt="الرؤية" />
              </div>
              <h3>الرؤية</h3>
              <p>
                أن تكون مجموعة مختبرات القضـــاة التخصصية صرحاً رائداً ومتميزاً يفضله المراجعون في طلب الرعاية الصحية.
              </p>
            </div>

            {/* Mission */}
            <div id="mission" className="about-card">
              <div className="card-icon">
                <img src={`${import.meta.env.BASE_URL}icons/Mission/Mission-09.png`} alt="الرسالة" />
              </div>
              <h3>الرسالة</h3>
              <p>
                تقديم الرعايه الصحيه ذات الجوده العاليه للمراجعين ، ونشر الوعي الصحي بينهم . والمساهمه في اعداد الكوادر المتخصصة في ذلك .
              </p>
            </div>

            {/* About Us */}
            <div className="about-card">
              <div className="card-icon">
                <img src={`${import.meta.env.BASE_URL}icons/About Us/About Us-04.png`} alt="من نحن" />
              </div>
              <h3>من نحن</h3>
              <p>
                مختبر متخصص في تقديم خدمات التحاليل الطبية بدقة واحترافية، مع الالتزام بأعلى معايير الجودة وسرعة الإنجاز.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="values-section">
            <h3>قيمنا</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <img src={`${import.meta.env.BASE_URL}icons/Medical Lab/Medical Lab-55.png`} alt="الجودة" />
                </div>
                <h4>الجودة</h4>
                <p>نلتزم بأعلى معايير الجودة في جميع خدماتنا</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <img src={`${import.meta.env.BASE_URL}icons/Medical Team/Medical Team-57.png`} alt="الاحترافية" />
                </div>
                <h4>الاحترافية</h4>
                <p>فريق طبي متخصص ومدرب على أعلى مستوى</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <img src={`${import.meta.env.BASE_URL}icons/Health Tips/Health Tips-59.png`} alt="الرعاية" />
                </div>
                <h4>الرعاية</h4>
                <p>نقدم رعاية صحية شاملة ومتابعة مستمرة</p>
              </div>
              
              <div className="value-item">
                <div className="value-icon">
                  <img src={`${import.meta.env.BASE_URL}icons/Continuing Education/Continuing Education-23.png`} alt="التطوير" />
                </div>
                <h4>التطوير المستمر</h4>
                <p>نستثمر في تطوير الكوادر والخدمات</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
