const fs = require('fs');
const html = fs.readFileSync('beranda.html', 'utf8');

const regex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi;
let m;
let lastLevel = 0;
let errors = [];
while ((m = regex.exec(html)) !== null) {
  const level = parseInt(m[1], 10);
  const text = m[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (lastLevel > 0 && level > lastLevel + 1) {
    errors.push('Heading skip: H' + lastLevel + ' -> H' + level + ' ("' + text + '")');
  }
  console.log('H' + level + ': ' + text);
  lastLevel = level;
}

console.log('\n--- Heading Hierarchy Audit ---');
if (errors.length === 0) {
  console.log('PERFECT! ALL HEADINGS ARE IN SEQUENTIALLY-DESCENDING ORDER!');
} else {
  console.log('Issues found:');
  errors.forEach(e => console.log(' - ' + e));
}
