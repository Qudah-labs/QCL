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

// Copy favicon to create basic PNG icons
const faviconPath = path.join(__dirname, '..', 'public', 'QCL', 'favicon.png');
const iconSizes = [16, 32, 72, 96, 128, 144, 152, 180, 192, 384, 512];

// Check if favicon exists
if (fs.existsSync(faviconPath)) {
  console.log('Found favicon.png, copying to create PWA icons...');
  
  iconSizes.forEach(size => {
    const iconPath = path.join(iconsDir, `icon-${size}x${size}.png`);
    fs.copyFileSync(faviconPath, iconPath);
    console.log(`Created icon-${size}x${size}.png`);
  });
  
  console.log('\nPWA icons created successfully!');
  console.log('Note: For better quality, consider using a dedicated icon generator tool');
  console.log('or manually create optimized icons for each size.');
} else {
  console.log('Favicon not found. Please ensure favicon.png exists in public/QCL/');
  console.log('You can use the generated SVG files and convert them to PNG using:');
  console.log('1. Online SVG to PNG converters');
  console.log('2. Image editing software');
  console.log('3. The icon-converter.html file in the project root');
}
