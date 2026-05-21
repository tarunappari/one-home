const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');
const MAX_SIZE = 500 * 1024; // 500 KB

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.webp', '.jpg', '.jpeg', '.png'].includes(ext)) {
        if (stat.size > MAX_SIZE) {
          console.log(`Compressing ${filePath} (${(stat.size / 1024).toFixed(2)} KB)`);
          
          const tempPath = filePath + '.tmp';
          
          try {
            // Read image into buffer to prevent file locking
            const inputBuffer = fs.readFileSync(filePath);
            const metadata = await sharp(inputBuffer).metadata();
            let transformer = sharp(inputBuffer);
            
            // Resize if it's exceptionally large (e.g., > 1920px width)
            if (metadata.width > 1920) {
              transformer = transformer.resize({ width: 1920, withoutEnlargement: true });
            }
            
            // Re-compress as webp with lower quality
            await transformer
              .webp({ quality: 60, effort: 6 }) // lower quality, higher compression effort
              .toFile(tempPath);
              
            const newStat = fs.statSync(tempPath);
            console.log(`  -> Reduced to ${(newStat.size / 1024).toFixed(2)} KB`);
            
            // Overwrite original with compressed version
            fs.renameSync(tempPath, filePath);
          } catch (err) {
            console.error(`Failed to compress ${filePath}: ${err}`);
            if (fs.existsSync(tempPath)) {
               fs.unlinkSync(tempPath);
            }
          }
        }
      }
    }
  }
}

(async () => {
  console.log('Finding and compressing images > 500KB...');
  await processDirectory(publicDir);
  console.log('Done!');
})();
