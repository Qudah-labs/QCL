# مختبرات القضـــاة التخصصية (Qudah Consulting Laboratories) - Web App

A modern, RTL-friendly React web application for Qudah Consulting Laboratories, built with Vite for fast development and optimized production builds.

## Features

- **Arabic-first, RTL UI** for medical laboratory services
- **Hero section** with logo and animated image slider
- **Sticky navigation** for quick access to all sections
- **About, Vision, Mission**: Learn about the lab's values and goals
- **Services**: Overview of medical and educational services offered
- **Insurance Partners**: List of supported insurance companies
- **Branch Locations**: Contact info and working hours for all branches
- **Quick Links**: Access to lab results, home sampling, and portals
- **Contact & Social**: Facebook, Instagram, YouTube, WhatsApp, and email
- **QR Code Results Scanner**: Integrated modal for scanning QR codes and redirecting to lab results
- **PWA-ready**: Includes manifest for installable experience

## Project Structure

```
QCL/
  ├─ public/              # Static assets (icons, images, manifest)
  ├─ src/                 # React source code
  │   ├─ assets/          # Source images and SVGs
  │   ├─ App.jsx          # Main App component (RTL, Arabic, all features)
  │   ├─ main.jsx         # Entry point
  │   └─ ...
  ├─ index.html           # Main HTML file
  ├─ qr-scan-full-url.html# QR code results scanner
  ├─ package.json         # Project metadata and scripts
  ├─ vite.config.js       # Vite configuration
  └─ README.md            # Project documentation
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### 3. Build for production

```bash
npm run build
```
The production-ready files will be in the `dist/` directory.

## Special Pages

- **Lab Results QR Scanner:**  
  Click "📋 نتائج الفحوصات المخبرية" in the Important Links section to open the integrated QR scanner modal.

## License

This project is for Qudah Consulting Laboratories. All rights reserved.