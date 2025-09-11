import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create icons directory if it doesn't exist
const iconsDir = path.join(__dirname, '..', 'public', 'QCL', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Icon sizes required for PWA
const iconSizes = [
  { size: 16, name: 'icon-16x16.png' },
  { size: 32, name: 'icon-32x32.png' },
  { size: 72, name: 'icon-72x72.png' },
  { size: 96, name: 'icon-96x96.png' },
  { size: 128, name: 'icon-128x128.png' },
  { size: 144, name: 'icon-144x144.png' },
  { size: 152, name: 'icon-152x152.png' },
  { size: 180, name: 'icon-180x180.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 384, name: 'icon-384x384.png' },
  { size: 512, name: 'icon-512x512.png' }
];

// Create a simple SVG icon as a fallback
const createSVGIcon = (size) => {
  return `<svg width="${size}" height="${size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <rect width="512" height="512" rx="64" fill="#1e40af"/>
    <circle cx="256" cy="200" r="60" fill="white"/>
    <rect x="196" y="280" width="120" height="20" rx="10" fill="white"/>
    <rect x="196" y="320" width="80" height="20" rx="10" fill="white"/>
    <text x="256" y="400" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">QL</text>
  </svg>`;
};

// Create placeholder icons
iconSizes.forEach(({ size, name }) => {
  const svgContent = createSVGIcon(size);
  const svgPath = path.join(iconsDir, name.replace('.png', '.svg'));
  
  fs.writeFileSync(svgPath, svgContent);
  console.log(`Created ${name.replace('.png', '.svg')}`);
});

// Create a simple HTML file to convert SVG to PNG (manual step)
const conversionHTML = `<!DOCTYPE html>
<html>
<head>
  <title>Icon Converter</title>
</head>
<body>
  <h1>PWA Icon Converter</h1>
  <p>Open this file in a browser and use browser dev tools to save each SVG as PNG:</p>
  <div id="icons"></div>
  
  <script>
    const sizes = [16, 32, 72, 96, 128, 144, 152, 180, 192, 384, 512];
    const container = document.getElementById('icons');
    
    sizes.forEach(size => {
      const div = document.createElement('div');
      div.style.margin = '10px';
      div.innerHTML = \`
        <h3>\${size}x\${size}</h3>
        <svg width="\${size}" height="\${size}" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <rect width="512" height="512" rx="64" fill="#1e40af"/>
          <circle cx="256" cy="200" r="60" fill="white"/>
          <rect x="196" y="280" width="120" height="20" rx="10" fill="white"/>
          <rect x="196" y="320" width="80" height="20" rx="10" fill="white"/>
          <text x="256" y="400" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">QL</text>
        </svg>
        <br>
        <button onclick="downloadSVG(\${size})">Download as PNG</button>
      \`;
      container.appendChild(div);
    });
    
    function downloadSVG(size) {
      const svg = event.target.parentElement.querySelector('svg');
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      canvas.width = size;
      canvas.height = size;
      
      const svgData = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
      const url = URL.createObjectURL(svgBlob);
      
      img.onload = function() {
        ctx.drawImage(img, 0, 0, size, size);
        canvas.toBlob(function(blob) {
          const link = document.createElement('a');
          link.download = \`icon-\${size}x\${size}.png\`;
          link.href = URL.createObjectURL(blob);
          link.click();
        });
      };
      
      img.src = url;
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, '..', 'icon-converter.html'), conversionHTML);
console.log('Created icon-converter.html - open this in a browser to generate PNG icons');

console.log('\nPWA Icon generation complete!');
console.log('Next steps:');
console.log('1. Open icon-converter.html in a browser');
console.log('2. Download each icon as PNG');
console.log('3. Save them to public/QCL/icons/ with the correct names');
console.log('4. Or use an online SVG to PNG converter with the generated SVG files');
