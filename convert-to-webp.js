const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.join(__dirname, 'public', 'assets');
const dirsToUpdate = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'styles'),
  path.join(__dirname, 'app')
];

const imageExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      const ext = path.extname(file);
      if (imageExtensions.includes(ext)) {
        // skip heromain in hero folder
        if (filePath.includes(path.join('hero', 'heromain')) || filePath.match(/hero[\\\/]heromain/i)) {
           console.log(`Skipping ${filePath}`);
           continue;
        }

        const webpPath = filePath.substring(0, filePath.length - ext.length) + '.webp';
        console.log(`Converting ${filePath} to ${webpPath}`);
        try {
          let quality = 80;
          let buffer = await sharp(filePath).webp({ quality }).toBuffer();
          
          while (buffer.length > 300 * 1024 && quality > 10) {
             quality -= 10;
             buffer = await sharp(filePath).webp({ quality }).toBuffer();
          }
          
          if (buffer.length > 300 * 1024) {
             const metadata = await sharp(filePath).metadata();
             let width = metadata.width;
             while (buffer.length > 300 * 1024 && width > 500) {
                 width = Math.floor(width * 0.8);
                 buffer = await sharp(filePath).resize(width).webp({ quality }).toBuffer();
             }
          }

          fs.writeFileSync(webpPath, buffer);
          fs.unlinkSync(filePath); // remove original
          console.log(`Successfully converted. Size: ${(buffer.length / 1024).toFixed(2)} KB`);
        } catch (err) {
          console.error(`Failed to convert ${filePath}: ${err}`);
        }
      }
    }
  }
}

function updateReferences(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        updateReferences(filePath);
      } else {
        const ext = path.extname(file);
        if (['.jsx', '.js', '.scss', '.tsx', '.ts', '.css'].includes(ext)) {
          let content = fs.readFileSync(filePath, 'utf8');
          let modified = false;
          
          for (const imgExt of imageExtensions) {
             const regex = new RegExp('\\' + imgExt, 'gi');
             const originalContent = content;
             content = content.replace(regex, (match, offset, string) => {
                 const lookbehind = string.substring(Math.max(0, offset - 15), offset);
                 if (lookbehind.toLowerCase().includes('heromain')) {
                     return match; // keep original extension
                 }
                 return '.webp';
             });
             if (originalContent !== content) {
                 modified = true;
             }
          }

          if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated references in ${filePath}`);
          }
        }
      }
    }
}

(async () => {
  console.log('Converting images...');
  await processDirectory(assetsDir);
  console.log('Updating references...');
  for (const dir of dirsToUpdate) {
    updateReferences(dir);
  }
  console.log('Done!');
})();
