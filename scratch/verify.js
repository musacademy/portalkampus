const fs = require('fs');
const html = fs.readFileSync('beranda.html', 'utf8');

console.log('1. Head preload:', html.includes('rel="preload" as="image" href="assets/img/education/showcase-1.webp"'));
console.log('2. Asynchronous vendor css:', html.includes('bootstrap-icons.css" rel="stylesheet" media="print"'));
console.log('3. Deferred scripts:', html.includes('main.js" defer'));

const imgRegex = /<img[^>]+>/g;
let match;
let missingDim = 0;
while ((match = imgRegex.exec(html)) !== null) {
  const tag = match[0];
  const hasW = tag.includes('width=');
  const hasH = tag.includes('height=');
  if (!hasW || !hasH) {
    console.log('MISSING DIM:', tag);
    missingDim++;
  }
}
console.log('Total images missing dimensions:', missingDim);

console.log('4. Social links aria-label:', html.includes('aria-label="Twitter X Portal Kampus"'));
console.log('5. CTA aria-label:', html.includes('aria-label="Daftar Sekarang Penerimaan Mahasiswa Baru"'));
console.log('6. Enroll aria-label:', html.includes('aria-label="Daftar Sekarang Kegiatan Simposium Inovasi"'));
