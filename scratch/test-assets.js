const http = require('http');

async function testPage() {
  const pageRes = await new Promise(r => http.get('http://localhost:3000/beranda.html', r));
  console.log('Page status:', pageRes.statusCode);
  let html = '';
  pageRes.on('data', chunk => html += chunk);
  pageRes.on('end', async () => {
    const cssMatches = [];
    const scriptMatches = [];

    const linkRegex = /<link[^>]+href=["']([^"']+)["'][^>]*>/g;
    let m;
    while ((m = linkRegex.exec(html)) !== null) {
      if (m[0].includes('stylesheet')) cssMatches.push(m[1]);
    }

    const scriptRegex = /<script[^>]+src=["']([^"']+)["'][^>]*>/g;
    while ((m = scriptRegex.exec(html)) !== null) {
      scriptMatches.push(m[1]);
    }

    console.log('\n--- Checking Stylesheets ---');
    for (const css of cssMatches) {
      if (css.startsWith('http')) {
        console.log('🌐 External:', css);
        continue;
      }
      const res = await new Promise(r => http.get('http://localhost:3000/' + css, r));
      console.log(res.statusCode === 200 ? '✅ 200' : '❌ ' + res.statusCode, css);
    }

    console.log('\n--- Checking Scripts ---');
    for (const js of scriptMatches) {
      if (js.startsWith('http')) {
        console.log('🌐 External:', js);
        continue;
      }
      const res = await new Promise(r => http.get('http://localhost:3000/' + js, r));
      console.log(res.statusCode === 200 ? '✅ 200' : '❌ ' + res.statusCode, js);
    }
  });
}

testPage();
