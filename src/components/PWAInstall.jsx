import React, { useState, useEffect } from 'react'
import './PWAInstall.css'

const PWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    // Check if it's iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)

    // Listen for the beforeinstallprompt event (mainly for Android Chrome)
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    // Listen for the appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true)
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    // For iOS, show the install prompt after a delay
    if (iOS && !sessionStorage.getItem('pwa-install-dismissed')) {
      setTimeout(() => {
        setShowInstallPrompt(true)
      }, 3000) // Show after 3 seconds
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt')
      } else {
        console.log('User dismissed the install prompt')
      }
      
      setDeferredPrompt(null)
    }
    setShowInstallPrompt(false)
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    // Don't show again for this session
    sessionStorage.setItem('pwa-install-dismissed', 'true')
  }

  // Don't show if already installed or dismissed
  if (isInstalled || !showInstallPrompt || sessionStorage.getItem('pwa-install-dismissed')) {
    return null
  }

  return (
    <div className="pwa-install-banner">
      <div className="pwa-install-content">
        <div className="pwa-install-icon">
          📱
        </div>
        <div className="pwa-install-text">
          <h4>تثبيت التطبيق</h4>
          <p>
            {isIOS 
              ? 'اضغط على زر المشاركة (↑) ثم "إضافة إلى الشاشة الرئيسية"'
              : 'أضف مختبرات القضـــاة إلى الشاشة الرئيسية للحصول على تجربة أفضل'
            }
          </p>
        </div>
        <div className="pwa-install-buttons">
          <button 
            className="pwa-install-btn"
            onClick={handleInstallClick}
          >
            تثبيت
          </button>
          <button 
            className="pwa-dismiss-btn"
            onClick={handleDismiss}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

export default PWAInstall
