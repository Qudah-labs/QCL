import React, { useEffect, useRef, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import './QRScanner.css'

const QRScanner = ({ onClose }) => {
  const scannerRef = useRef(null)
  const [isScanning, setIsScanning] = useState(false)
  const [error, setError] = useState('')
  const [scannedData, setScannedData] = useState('')

  useEffect(() => {
    // Start scanner immediately when component mounts
    startScanner()

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear()
      }
    }
  }, [])

  const startScanner = () => {
    try {
      // Clear any existing scanner first
      if (scannerRef.current) {
        scannerRef.current.clear()
        scannerRef.current = null
      }

      // Clear any existing content in the qr-reader div
      const qrReaderElement = document.getElementById('qr-reader')
      if (qrReaderElement) {
        qrReaderElement.innerHTML = ''
      }

      const scanner = new Html5QrcodeScanner(
        "qr-reader",
        {
          qrbox: { width: 250, height: 250 },
          fps: 5,
          aspectRatio: 1.0,
        },
        false
      )

      scanner.render(
        (decodedText, decodedResult) => {
          console.log('QR Code detected:', decodedText)
          setScannedData(decodedText)
          handleQRCodeDetected(decodedText)
        },
        (error) => {
          // Handle scan errors silently
          if (error && !error.includes('No QR code found')) {
            console.log('QR Code scan error:', error)
          }
        }
      )

      scannerRef.current = scanner
      setIsScanning(true)
    } catch (err) {
      console.error('Error starting QR scanner:', err)
      setError('حدث خطأ في تشغيل الماسح الضوئي')
    }
  }

  const handleQRCodeDetected = (data) => {
    // Validate if it's a URL
    try {
      const url = new URL(data)
      if (url.protocol === 'http:' || url.protocol === 'https:') {
        // Stop scanning
        if (scannerRef.current) {
          scannerRef.current.clear()
        }
        
        // Redirect to the URL
        window.open(data, '_blank', 'noopener,noreferrer')
        onClose()
      } else {
        setError('الرابط غير صحيح')
      }
    } catch (e) {
      setError('الرابط غير صحيح')
    }
  }

  const handleRetry = () => {
    setError('')
    setScannedData('')
    setIsScanning(false)
    
    // Clear existing scanner
    if (scannerRef.current) {
      scannerRef.current.clear()
      scannerRef.current = null
    }
    
    // Clear the qr-reader div content
    const qrReaderElement = document.getElementById('qr-reader')
    if (qrReaderElement) {
      qrReaderElement.innerHTML = ''
    }
    
    // Start scanner after a short delay to ensure cleanup is complete
    setTimeout(() => {
      startScanner()
    }, 100)
  }

  const handleClose = () => {
    if (scannerRef.current) {
      scannerRef.current.clear()
    }
    onClose()
  }

  return (
    <div className="qr-scanner-modal">
      <div className="qr-scanner-overlay" onClick={handleClose}></div>
      <div className="qr-scanner-content">
        <div className="qr-scanner-header">
          <h3>نتائج الفحوصات المخبرية</h3>
          <button 
            className="close-btn"
            onClick={handleClose}
            aria-label="إغلاق"
          >
            ×
          </button>
        </div>
        
        <div className="qr-scanner-body">
          <div className="instructions">
            <p>قم بتوجيه الكاميرا نحو رمز QR الموجود على بطاقة المراجع لقراءة النتائج</p>
          </div>
          
          <div className="scanner-container">
            <div id="qr-reader" className="qr-reader"></div>
          </div>
          
          {error && (
            <div className="error-message">
              <p>{error}</p>
              <button className="btn btn-secondary" onClick={handleRetry}>
                إعادة المحاولة
              </button>
            </div>
          )}
          
          {scannedData && (
            <div className="success-message">
              <p>تم قراءة الرمز بنجاح!</p>
              <p className="scanned-url">{scannedData}</p>
            </div>
          )}
        </div>
        
        <div className="qr-scanner-footer">
          <button className="btn btn-secondary" onClick={handleClose}>
            إلغاء
          </button>
          <button className="btn" onClick={handleRetry}>
            إعادة المحاولة
          </button>
        </div>
      </div>
    </div>
  )
}

export default QRScanner
