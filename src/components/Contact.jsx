import React from 'react'
import './Contact.css'

const Contact = () => {

  const branches = [
    {
      id: 1,
      name: 'الفرع الأول',
      location: 'اربد - وسط البلد- شارع الملك طلال الموجود بين شارع السينما وشارع الهاشمي - سوق ابو الشعر التجاري مقابل صيدلية الحسن',
      phone: '027245099',
      hours: '8 صباحًا - 5 عصرًا',
      map: 'https://maps.app.goo.gl/m4cY1gCoSTGMRf6U7'
    },
    {
      id: 2,
      name: 'الفرع الثاني',
      location: 'اربد - ضاحية الحسين- مقابل بوابة مستشفى الأميرة رحمة التعليمي',
      phone: '026545099',
      hours: '8 صباحًا - 5 عصرًا',
      map: 'https://maps.app.goo.gl/aSrZSZa9dsXobPQc6'
    },
    {
      id: 3,
      name: 'الفرع الثالث - المركزي',
      location: 'اربد - شارع الملك عبدالله الثاني- جنوب نفق مدينة الحسن- مجمع الرشدان- قبل مفروشات شهوان',
      phone: '027405099',
      hours: '8 صباحًا - 8 مساءً',
      map: 'https://maps.app.goo.gl/TBXtbqJoFZEPuQvn9'
    },
    {
      id: 4,
      name: 'الفرع الرابع',
      location: 'عجلون - الساحة العامة- قرب الإشارة الضوئية- مقابل بنك الأردن',
      phone: '026445099',
      hours: '8 صباحًا - 5 عصرًا',
      map: 'https://maps.app.goo.gl/zkzRoEg3ob6ugwBj6'
    },
    {
      id: 5,
      name: 'الفرع الخامس',
      location: 'المزار الشمالي (تم الإفتتاح) - مدخل البلد - مقابل محكمة صلح المزار الشمالي',
      phone: '02/6505099',
      hours: '8 صباحًا - 5 عصرًا',
      map: 'https://maps.app.goo.gl/t9ipUWanZVjauVVUA'
    }
  ]



  const openMap = (mapUrl) => {
    window.open(mapUrl, '_blank', 'noopener,noreferrer')
  }


  return (
    <section id="contact" className="contact">
      <div className="container">

        {/* Branches */}
        <div className="branches-section">
          <h3>فروعنا</h3>
          <div className="branches-grid">
            {branches.map((branch) => (
              <div key={branch.id} className="branch-card">
                <h4>{branch.name}</h4>
                <div className="branch-info">
                  <div className="branch-item">
                    <strong>الموقع:</strong>
                    <p>{branch.location}</p>
                  </div>
                  <div className="branch-item">
                    <strong>الهاتف:</strong>
                    <p>{branch.phone}</p>
                  </div>
                  <div className="branch-item">
                    <strong>ساعات العمل:</strong>
                    <p>{branch.hours}</p>
                  </div>
                </div>
                <button 
                  className="btn btn-secondary"
                  onClick={() => openMap(branch.map)}
                >
                  عرض على الخريطة
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
