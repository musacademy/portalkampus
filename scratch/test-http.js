const http = require('http');
http.get('http://localhost:3000/beranda.html', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    console.log('Includes main.css:', data.includes('assets/css/main.css'));
    console.log('Includes bootstrap-icons.css:', data.includes('assets/vendor/bootstrap-icons/bootstrap-icons.css'));
    console.log('Has media="print":', data.includes('media="print"'));
  });
});
