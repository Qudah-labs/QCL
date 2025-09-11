import React from 'react'
import './Insurance.css'

const Insurance = () => {
  const insuranceCompanies = [
    { id: 1, name: 'جامعة اليرموك', icon: `${import.meta.env.BASE_URL}icons/Insurance/Insurance-68.png` },
    { id: 2, name: 'جامعة البلقاء', icon: `${import.meta.env.BASE_URL}icons/Insurance/Insurance-69.png` },
    { id: 3, name: 'جامعة عجلون الوطنية', icon: `${import.meta.env.BASE_URL}icons/Insurance/Insurance-70.png` },
    { id: 4, name: 'نقابة المهندسين', icon: `${import.meta.env.BASE_URL}icons/Insurance/Insurance-71.png` },
    { id: 5, name: 'نقابة المحامين', icon: `${import.meta.env.BASE_URL}icons/Insurance/Insurance-72.png` },
    { id: 6, name: 'نقابة أطباء الأسنان', icon: `${import.meta.env.BASE_URL}icons/Insurance/Insurance-73.png` },
    { id: 7, name: 'نات هيلث', icon: `${import.meta.env.BASE_URL}icons/Insurance/Insurance-74.png` },
    { id: 8, name: 'ميد سيرفس', icon: `${import.meta.env.BASE_URL}icons/Insurance/Insurance-75.png` },
    { id: 9, name: 'الشرق العربي للتأمين', icon: `${import.meta.env.BASE_URL}icons/Insurance/Insurance-76.png` },
    { id: 10, name: 'العربية الأوروبية', icon: `${import.meta.env.BASE_URL}icons/Insurance/Insurance-77.png` },
    { id: 11, name: 'ميديكسا', icon: `${import.meta.env.BASE_URL}icons/Insurance/Insurance-78.png` },
    { id: 12, name: 'أومني كير', icon: `${import.meta.env.BASE_URL}icons/Insurance/Insurance-79.png` },
    { id: 13, name: 'غلوب ميد', icon: `${import.meta.env.BASE_URL}icons/Insurance/Insurance-80.png` }
  ]

  return (
    <section id="insurance" className="insurance">
      <div className="container">
        <div className="section-header">
          <h2>شركات التأمين</h2>
          <p>نحن شركاء مع أكبر شركات التأمين في الأردن</p>
        </div>

        <div className="insurance-grid">
          {insuranceCompanies.map((company) => (
            <div key={company.id} className="insurance-card">
              <div className="company-icon">
                <img 
                  src={company.icon} 
                  alt={company.name}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="fallback-icon" style={{ display: 'none' }}>
                  🏥
                </div>
              </div>
              <h4>{company.name}</h4>
            </div>
          ))}
        </div>

        <div className="insurance-info">
          <div className="info-card">
            <h3>معلومات التأمين</h3>
            <p>
              نقدم خدماتنا لجميع شركات التأمين المعتمدة في الأردن. 
              يمكنك الاستفادة من خدماتنا من خلال بطاقة التأمين الخاصة بك.
            </p>
            <ul>
              <li>تغطية شاملة للتحاليل الطبية</li>
              <li>أسعار مخفضة للمؤمن عليهم</li>
              <li>خدمة سريعة ومتخصصة</li>
              <li>تقارير مفصلة ودقيقة</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Insurance
