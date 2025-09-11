import React from 'react'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'فحوصات الدم الشاملة',
      description: 'تحاليل شاملة لجميع مكونات الدم',
      icon: `${import.meta.env.BASE_URL}icons/Blood Tests/Blood Tests-11.png`,
      features: ['تحليل صورة الدم الكاملة', 'فحص الكوليسترول', 'فحص السكر', 'فحص وظائف الكبد']
    },
    {
      id: 2,
      title: 'فحوصات الحساسية',
      description: 'تشخيص دقيق لأنواع الحساسية المختلفة',
      icon: `${import.meta.env.BASE_URL}icons/Allergy Tests/Allergy Tests-14.png`,
      features: ['فحص حساسية الطعام', 'فحص حساسية الأدوية', 'فحص حساسية البيئة', 'فحص حساسية الحيوانات']
    },
    {
      id: 3,
      title: 'فحوصات ما قبل الزواج',
      description: 'فحوصات شاملة لضمان صحة الزوجين',
      icon: `${import.meta.env.BASE_URL}icons/Pre-marriage Tests/Pre-marriage Tests-17.png`,
      features: ['فحص الدم', 'فحص الأمراض الوراثية', 'فحص الأمراض المعدية', 'فحص التوافق']
    },
    {
      id: 4,
      title: 'فحوصات الأنسجة والأورام',
      description: 'تحاليل متخصصة للأنسجة والأورام',
      icon: `${import.meta.env.BASE_URL}icons/Tissue & Tumor Tests/Tissue & Tumor Tests-19.png`,
      features: ['فحص الخزعات', 'فحص الأورام', 'فحص الأنسجة', 'فحص الخلايا']
    },
    {
      id: 5,
      title: 'فحوصات الجينات',
      description: 'تحاليل جينية متقدمة',
      icon: `${import.meta.env.BASE_URL}icons/Genetic Tests/Genetic Tests-21.png`,
      features: ['فحص الحمض النووي', 'فحص الأمراض الوراثية', 'فحص الجينات', 'فحص الكروموسومات']
    },
    {
      id: 6,
      title: 'دورات التعليم المستمر',
      description: 'برامج تعليمية متخصصة للكوادر الطبية',
      icon: `${import.meta.env.BASE_URL}icons/Continuing Education/Continuing Education-23.png`,
      features: ['دورات متخصصة', 'شهادات معتمدة', 'تدريب عملي', 'تطوير المهارات']
    }
  ]

  const importantLinks = [
    {
      id: 1,
      title: 'خدمة السحب المنزلي',
      description: 'نقدم خدمة سحب العينات من المنزل',
      icon: `${import.meta.env.BASE_URL}icons/Home Service/Home Service-44.png`,
      action: 'WhatsApp',
      link: 'https://wa.me/962799970090'
    },
    {
      id: 2,
      title: 'نتائج الفحوصات المخبرية',
      description: 'اطلع على نتائج فحوصاتك بسهولة',
      icon: `${import.meta.env.BASE_URL}icons/Lab Results/Lab Results-47.png`,
      action: 'QR Scanner',
      isModal: true
    },
    {
      id: 3,
      title: 'بوابة المختبرات',
      description: 'نظام إدارة المختبرات',
      icon: `${import.meta.env.BASE_URL}icons/Lab Portal/Lab Portal-50.png`,
      action: 'دخول',
      link: 'https://qudah.yaseer-lis.net/lab-portal/#/login'
    },
    {
      id: 4,
      title: 'بوابة الأطباء',
      description: 'منصة خاصة للأطباء',
      icon: `${import.meta.env.BASE_URL}icons/Doctors Portal/Doctors Portal-53.png`,
      action: 'دخول',
      link: 'https://qudah.yaseer-lis.net/doctors#/'
    }
  ]

  const handleQRScanner = () => {
    // This will be handled by the parent component
    window.dispatchEvent(new CustomEvent('openQRScanner'))
  }

  const handleLinkClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>خدماتنا</h2>
          <p>نقدم مجموعة شاملة من خدمات التحاليل الطبية المتخصصة</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Important Links */}
        <div className="important-links">
          <h3>روابط مهمة</h3>
          <div className="links-grid">
            {importantLinks.map((link) => (
              <div key={link.id} className="link-card">
                <div className="link-card-content">
                  <div className="link-icon">
                    <img src={link.icon} alt={link.title} />
                  </div>
                  <h4>{link.title}</h4>
                  <p>{link.description}</p>
                </div>
                <div className="link-card-button">
                  <button 
                    className="btn"
                    onClick={() => link.isModal ? handleQRScanner() : handleLinkClick(link.link)}
                  >
                    {link.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
