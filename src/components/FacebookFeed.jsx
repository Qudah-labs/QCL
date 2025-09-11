import React from 'react'
import './FacebookFeed.css'

const FacebookFeed = () => {
  // Facebook page URL from your website content
  const facebookPageUrl = 'https://www.facebook.com/Cons.Labs'

  return (
    <section id="social-media" className="facebook-feed">
      <div className="container">
        <div className="section-header">
          <h2>تابعنا على وسائل التواصل الاجتماعي</h2>
          <p>ابق على اطلاع بأحدث الأخبار والتحديثات من مختبرات القضـــاة التخصصية</p>
        </div>

        <div className="facebook-feed-content">
          <div className="facebook-page-info">
            <div className="page-details">
              <h3>صفحتنا على فيسبوك</h3>
              <p>انضم إلى مجتمعنا على فيسبوك واحصل على آخر الأخبار والنصائح الصحية</p>
              <a 
                href={facebookPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-facebook"
              >
                <i className="fab fa-facebook-f"></i>
                تابعنا على فيسبوك
              </a>
            </div>
          </div>

          <div className="facebook-embed-container">
            <div className="facebook-embed">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCons.Labs&tabs=timeline&width=400&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="400"
                height="600"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                title="Facebook Page Feed"
              ></iframe>
              <div className="facebook-fallback">
                <div className="fallback-content">
                  <i className="fab fa-facebook-f"></i>
                  <h4>تابعنا على فيسبوك</h4>
                  <p>احصل على آخر الأخبار والتحديثات</p>
                  <a 
                    href={facebookPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                    زيارة الصفحة
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacebookFeed
