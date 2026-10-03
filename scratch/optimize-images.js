const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const backupDir = 'scratch/backup_img';
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

const targets = [
  { file: 'assets/img/education/showcase-1.webp', width: 800, quality: 78 },
  { file: 'assets/img/education/campus-7.webp', width: 720, quality: 78 },
  { file: 'assets/img/education/campus-8.webp', width: 720, quality: 78 },
  { file: 'assets/img/education/events-4.webp', width: 720, quality: 78 },
  { file: 'assets/img/education/education-3.webp', width: 720, quality: 78 },
  { file: 'assets/img/education/events-9.webp', width: 720, quality: 78 },
  { file: 'assets/img/education/events-10.webp', width: 720, quality: 78 },
  { file: 'assets/img/education/events-6.webp', width: 720, quality: 78 },
  { file: 'assets/img/education/students-3.webp', width: 720, quality: 78 },
  { file: 'assets/img/blog/blog-post-5.webp', width: 720, quality: 78 },
  { file: 'assets/img/education/activities-3.webp', width: 720, quality: 78 },
  { file: 'assets/img/education/activities-5.webp', width: 720, quality: 78 },
  { file: 'assets/img/education/education-4.webp', width: 720, quality: 78 },
  { file: 'assets/img/education/campus-3.webp', width: 800, quality: 78 },
  { file: 'assets/img/person/person-m-7.webp', width: 160, quality: 80 },
  { file: 'assets/img/person/person-f-8.webp', width: 160, quality: 80 },
  { file: 'assets/img/person/person-m-3.webp', width: 160, quality: 80 },
  { file: 'assets/img/person/person-f-5.webp', width: 160, quality: 80 }
];

let totalSaved = 0;

targets.forEach(t => {
  if (fs.existsSync(t.file)) {
    const origSize = fs.statSync(t.file).size;
    const backupPath = path.join(backupDir, path.basename(t.file));
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(t.file, backupPath);
    }
    const tempOut = path.resolve('scratch/temp_opt_' + path.basename(t.file));
    const inputFile = path.resolve(t.file);
    const cmd = `npx sharp-cli -i "${inputFile}" -o "${tempOut}" --quality ${t.quality} resize ${t.width}`;
    try {
      execSync(cmd, { stdio: 'pipe' });
      if (fs.existsSync(tempOut)) {
        const newSize = fs.statSync(tempOut).size;
        if (newSize < origSize) {
          fs.copyFileSync(tempOut, inputFile);
          fs.unlinkSync(tempOut);
          const saved = origSize - newSize;
          totalSaved += saved;
          console.log(`Optimized ${t.file}: ${(origSize/1024).toFixed(1)} KB -> ${(newSize/1024).toFixed(1)} KB (-${(saved/1024).toFixed(1)} KB)`);
        } else {
          fs.unlinkSync(tempOut);
          console.log(`Skipped ${t.file}: new size ${(newSize/1024).toFixed(1)} KB >= ${(origSize/1024).toFixed(1)} KB`);
        }
      }
    } catch(err) {
      console.error('Error on', t.file, err.message);
    }
  }
});

console.log(`\nTotal Saved: ${(totalSaved/1024).toFixed(1)} KB!`);
