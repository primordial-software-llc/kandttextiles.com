// This script can be used to generate favicon files from the SVG
// You'll need to install the following packages:
// npm install sharp svg2png

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const svg2png = require('svg2png');

const publicDir = path.join(__dirname, '../public');
const svgPath = path.join(publicDir, 'favicon.svg');

async function generateFavicons() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Generate PNG files of different sizes
    const sizes = [16, 32, 48, 64, 128, 192, 512];
    
    for (const size of sizes) {
      const pngBuffer = await svg2png(svgBuffer, { width: size, height: size });
      
      // Save the PNG file
      const outputPath = path.join(publicDir, `favicon-${size}x${size}.png`);
      fs.writeFileSync(outputPath, pngBuffer);
      
      // Special names for specific sizes
      if (size === 192) {
        fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), pngBuffer);
      } else if (size === 512) {
        fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), pngBuffer);
      } else if (size === 180) {
        fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), pngBuffer);
      }
    }
    
    // Generate apple-touch-icon.png (180x180)
    const appleTouchIconBuffer = await svg2png(svgBuffer, { width: 180, height: 180 });
    fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleTouchIconBuffer);
    
    // For favicon.ico, we'll use the 32x32 PNG as a simple solution
    // In a production environment, you might want to use a proper ICO generator
    // that combines multiple sizes into one ICO file
    const favicon32Buffer = await svg2png(svgBuffer, { width: 32, height: 32 });
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), favicon32Buffer);
    
    console.log('Favicon files generated successfully!');
  } catch (error) {
    console.error('Error generating favicon files:', error);
  }
}

generateFavicons(); 