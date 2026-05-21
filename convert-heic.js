const fs = require('fs');
const path = require('path');
const heicConvert = require('heic-convert');

const dir = path.join(__dirname, 'public', 'assets', 'celebrity');

(async () => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.toLowerCase().endsWith('.heic')) {
      const filePath = path.join(dir, file);
      const outputFilePath = path.join(dir, file.replace(/\.heic$/i, '.jpg'));
      console.log(`Converting ${file} to ${path.basename(outputFilePath)}...`);
      try {
        const inputBuffer = fs.readFileSync(filePath);
        const outputBuffer = await heicConvert({
          buffer: inputBuffer,
          format: 'JPEG',
          quality: 0.9
        });
        fs.writeFileSync(outputFilePath, outputBuffer);
        fs.unlinkSync(filePath); // remove original heic
        console.log(`Done: ${file}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
})();
