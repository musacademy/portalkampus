const fs = require('fs');

const file = 'beranda.html';
let html = fs.readFileSync(file, 'utf8');

// Backup
fs.writeFileSync('scratch/backup_img/beranda.html.bak', html, 'utf8');

// 1. Head: Preload LCP and fonts, non-blocking CSS
const oldHeadCss = `  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">

  <!-- Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">`;

const newHeadCss = `  <!-- Preload Critical LCP Image -->
  <link rel="preload" as="image" href="assets/img/education/showcase-1.webp" type="image/webp" fetchpriority="high">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Poppins:wght@400;500;600;700;800&family=Raleway:wght@500;600;700;800&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
  <noscript>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Poppins:wght@400;500;600;700;800&family=Raleway:wght@500;600;700;800&display=swap" rel="stylesheet">
  </noscript>

  <!-- Core Layout CSS -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/css/main.min.css" rel="stylesheet">

  <!-- Asynchronous Non-Critical CSS -->
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" media="print" onload="this.media='all'">
  <noscript><link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"></noscript>
  <link href="assets/vendor/aos/aos.css" rel="stylesheet" media="print" onload="this.media='all'">
  <noscript><link href="assets/vendor/aos/aos.css" rel="stylesheet"></noscript>
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" media="print" onload="this.media='all'">
  <noscript><link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"></noscript>
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" media="print" onload="this.media='all'">
  <noscript><link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"></noscript>`;

html = html.replace(oldHeadCss, newHeadCss);

// 2. Header nav links - aria-label for CTA
html = html.replace(
  '<a href="pendaftaran.html" class="btn-cta text-white justify-content-center text-center w-100">Daftar Sekarang</a>',
  '<a href="pendaftaran.html" class="btn-cta text-white justify-content-center text-center w-100" aria-label="Daftar Sekarang Penerimaan Mahasiswa Baru">Daftar Sekarang</a>'
);
html = html.replace(
  '<a href="pendaftaran.html" class="btn-cta">Daftar Sekarang</a>',
  '<a href="pendaftaran.html" class="btn-cta" aria-label="Daftar Sekarang Penerimaan Mahasiswa Baru">Daftar Sekarang</a>'
);

// 3. Hero LCP image and features headings
html = html.replace(
  '<img src="assets/img/education/showcase-1.webp" alt="Suasana Portal Kampus" class="img-fluid campus-photo">',
  '<img src="assets/img/education/showcase-1.webp" alt="Suasana Portal Kampus" class="img-fluid campus-photo" width="800" height="450" fetchpriority="high">'
);
html = html.replace(
  '<h3>Kurikulum Terapan</h3>',
  '<h2>Kurikulum Terapan</h2>'
);
html = html.replace(
  '<h3>Fasilitas Modern</h3>',
  '<h2>Fasilitas Modern</h2>'
);
html = html.replace(
  '<h3>Dosen &amp; Praktisi Andal</h3>',
  '<h2>Dosen &amp; Praktisi Andal</h2>'
);

// 4. About Section
html = html.replace(
  '<img src="assets/img/education/campus-8.webp" alt="Gedung Portal Kampus" class="img-fluid">',
  '<img src="assets/img/education/campus-8.webp" alt="Gedung Portal Kampus" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace('<h4>Misi Kami</h4>', '<h3>Misi Kami</h3>');
html = html.replace('<h4>Visi Kami</h4>', '<h3>Visi Kami</h3>');
html = html.replace('<h5>Awal Pendirian</h5>', '<h4>Awal Pendirian</h4>');
html = html.replace('<h5>Akreditasi Nasional</h5>', '<h4>Akreditasi Nasional</h4>');
html = html.replace('<h5>Kemitraan Global</h5>', '<h4>Kemitraan Global</h4>');
html = html.replace('<h5>Pusat Inovasi Terpadu</h5>', '<h4>Pusat Inovasi Terpadu</h4>');

// 5. Featured Programs Section
html = html.replace(
  '<img src="assets/img/education/campus-7.webp" alt="Teknik Informatika Portal Kampus" class="img-fluid">',
  '<img src="assets/img/education/campus-7.webp" alt="Teknik Informatika Portal Kampus" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/education/education-3.webp" alt="Manajemen Bisnis" class="img-fluid">',
  '<img src="assets/img/education/education-3.webp" alt="Manajemen Bisnis" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/education/education-7.webp" alt="Ilmu Komunikasi" class="img-fluid">',
  '<img src="assets/img/education/education-7.webp" alt="Ilmu Komunikasi" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/education/education-9.webp" alt="Riset Biomedis" class="img-fluid">',
  '<img src="assets/img/education/education-9.webp" alt="Riset Biomedis" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/education/education-2.webp" alt="Desain Komunikasi Visual" class="img-fluid">',
  '<img src="assets/img/education/education-2.webp" alt="Desain Komunikasi Visual" class="img-fluid" width="720" height="480" loading="lazy">'
);

// 6. Students Life Section
html = html.replace(
  '<img src="assets/img/education/students-3.webp" alt="Kegiatan Mahasiswa Portal Kampus" class="img-fluid primary-visual">',
  '<img src="assets/img/education/students-3.webp" alt="Kegiatan Mahasiswa Portal Kampus" class="img-fluid primary-visual" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/education/activities-8.webp" alt="Klub Coding dan Riset" class="img-fluid" loading="lazy">',
  '<img src="assets/img/education/activities-8.webp" alt="Klub Coding dan Riset" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace('<h5>Klub Sains &amp; Coding</h5>', '<h3>Klub Sains &amp; Coding</h3>');

html = html.replace(
  '<img src="assets/img/education/activities-3.webp" alt="Inisiatif Riset" class="img-fluid" loading="lazy">',
  '<img src="assets/img/education/activities-3.webp" alt="Inisiatif Riset" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace('<h5>Laboratorium Riset</h5>', '<h3>Laboratorium Riset</h3>');

html = html.replace(
  '<img src="assets/img/education/activities-5.webp" alt="Aksi Relawan" class="img-fluid" loading="lazy">',
  '<img src="assets/img/education/activities-5.webp" alt="Aksi Relawan" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace('<h5>Komunitas Relawan</h5>', '<h3>Komunitas Relawan</h3>');

html = html.replace(
  '<img src="assets/img/education/activities-9.webp" alt="Studio Kreatif" class="img-fluid" loading="lazy">',
  '<img src="assets/img/education/activities-9.webp" alt="Studio Kreatif" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace('<h5>Studio Seni &amp; Musik</h5>', '<h3>Studio Seni &amp; Musik</h3>');

// 7. Testimonials Section
html = html.replace(
  '<img src="assets/img/person/person-f-3.webp" alt="Caroline Fletcher" class="img-fluid" loading="lazy">',
  '<img src="assets/img/person/person-f-3.webp" alt="Caroline Fletcher" class="img-fluid" width="160" height="160" loading="lazy">'
);
html = html.replace('<h5>Prof. Caroline Fletcher</h5>', '<h3>Prof. Caroline Fletcher</h3>');

html = html.replace(
  '<img src="assets/img/person/person-m-5.webp" alt="Marcus Bradley" class="img-fluid" loading="lazy">',
  '<img src="assets/img/person/person-m-5.webp" alt="Marcus Bradley" class="img-fluid" width="160" height="160" loading="lazy">'
);
html = html.replace('<h5>Marcus Bradley</h5>', '<h3>Marcus Bradley</h3>');

html = html.replace(
  '<img src="assets/img/person/person-f-9.webp" alt="Helena Vasquez" class="img-fluid" loading="lazy">',
  '<img src="assets/img/person/person-f-9.webp" alt="Helena Vasquez" class="img-fluid" width="160" height="160" loading="lazy">'
);
html = html.replace('<h5>Dr. Helena Vasquez</h5>', '<h3>Dr. Helena Vasquez</h3>');

html = html.replace(
  '<img src="assets/img/person/person-m-14.webp" alt="Thomas Kingsley" class="img-fluid" loading="lazy">',
  '<img src="assets/img/person/person-m-14.webp" alt="Thomas Kingsley" class="img-fluid" width="160" height="160" loading="lazy">'
);
html = html.replace('<h5>Thomas Kingsley</h5>', '<h3>Thomas Kingsley</h3>');

html = html.replace(
  '<img src="assets/img/person/person-f-7.webp" alt="Priya Nakamura" class="img-fluid" loading="lazy">',
  '<img src="assets/img/person/person-f-7.webp" alt="Priya Nakamura" class="img-fluid" width="160" height="160" loading="lazy">'
);
html = html.replace('<h5>Priya Nakamura</h5>', '<h3>Priya Nakamura</h3>');

// 8. Stats Section
html = html.replace('<h5>Lulus Tepat Waktu</h5>', '<h3>Lulus Tepat Waktu</h3>');
html = html.replace('<h5>Pusat Riset Unggulan</h5>', '<h3>Pusat Riset Unggulan</h3>');
html = html.replace('<h5>Prestasi &amp; Penghargaan</h5>', '<h3>Prestasi &amp; Penghargaan</h3>');
html = html.replace('<h5>Kerja Sama Internasional</h5>', '<h3>Kerja Sama Internasional</h3>');

html = html.replace(
  '<img src="assets/img/education/campus-8.webp" alt="Gedung Kampus" class="img-fluid" loading="lazy">',
  '<img src="assets/img/education/campus-8.webp" alt="Gedung Kampus" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/education/students-3.webp" alt="Mahasiswa Berdiskusi" class="img-fluid" loading="lazy">',
  '<img src="assets/img/education/students-3.webp" alt="Mahasiswa Berdiskusi" class="img-fluid" width="720" height="480" loading="lazy">'
);

html = html.replace('<h5>Metode Belajar Interaktif</h5>', '<h4>Metode Belajar Interaktif</h4>');
html = html.replace('<h5>Dosen Pembimbing yang Terbuka</h5>', '<h4>Dosen Pembimbing yang Terbuka</h4>');
html = html.replace('<h5>Pengembangan Diri Menyeluruh</h5>', '<h4>Pengembangan Diri Menyeluruh</h4>');

// 9. Blog Section
html = html.replace(
  '<img src="assets/img/blog/blog-post-7.webp" alt="Riset Mahasiswa" class="img-fluid" loading="lazy">',
  '<img src="assets/img/blog/blog-post-7.webp" alt="Riset Mahasiswa" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/person/person-m-7.webp" alt="Marcus Webb">',
  '<img src="assets/img/person/person-m-7.webp" alt="Marcus Webb" width="48" height="48" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/blog/blog-post-5.webp" alt="Riset Kesehatan" class="img-fluid" loading="lazy">',
  '<img src="assets/img/blog/blog-post-5.webp" alt="Riset Kesehatan" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/person/person-f-8.webp" alt="Clara Martinez">',
  '<img src="assets/img/person/person-f-8.webp" alt="Clara Martinez" width="48" height="48" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/blog/blog-post-9.webp" alt="Gaya Hidup Kampus" class="img-fluid" loading="lazy">',
  '<img src="assets/img/blog/blog-post-9.webp" alt="Gaya Hidup Kampus" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/person/person-m-3.webp" alt="Daniel Foster">',
  '<img src="assets/img/person/person-m-3.webp" alt="Daniel Foster" width="48" height="48" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/blog/blog-post-6.webp" alt="Akademik" class="img-fluid" loading="lazy">',
  '<img src="assets/img/blog/blog-post-6.webp" alt="Akademik" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/person/person-f-5.webp" alt="Priya Sharma">',
  '<img src="assets/img/person/person-f-5.webp" alt="Priya Sharma" width="48" height="48" loading="lazy">'
);

// 10. Events Section
html = html.replace(
  '<img src="assets/img/education/events-4.webp" alt="Simposium Inovasi" class="img-fluid">',
  '<img src="assets/img/education/events-4.webp" alt="Simposium Inovasi" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<a href="detail-kegiatan.html" class="enroll-btn">Daftar Sekarang <i class="bi bi-arrow-right"></i></a>',
  '<a href="detail-kegiatan.html" class="enroll-btn" aria-label="Daftar Sekarang Kegiatan Simposium Inovasi">Daftar Sekarang <i class="bi bi-arrow-right"></i></a>'
);
html = html.replace(
  '<img src="assets/img/education/events-1.webp" alt="Turnamen Futsal" class="img-fluid">',
  '<img src="assets/img/education/events-1.webp" alt="Turnamen Futsal" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/education/events-9.webp" alt="Pentas Budaya" class="img-fluid">',
  '<img src="assets/img/education/events-9.webp" alt="Pentas Budaya" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/education/events-10.webp" alt="Seminar Karir" class="img-fluid">',
  '<img src="assets/img/education/events-10.webp" alt="Seminar Karir" class="img-fluid" width="720" height="480" loading="lazy">'
);
html = html.replace(
  '<img src="assets/img/education/events-6.webp" alt="Bakti Sosial" class="img-fluid">',
  '<img src="assets/img/education/events-6.webp" alt="Bakti Sosial" class="img-fluid" width="720" height="480" loading="lazy">'
);

// 11. Footer social links
const oldSocial = `          <div class="social-links d-flex mt-4">
            <a href="#"><i class="bi bi-twitter-x"></i></a>
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
            <a href="#"><i class="bi bi-youtube"></i></a>
          </div>`;

const newSocial = `          <div class="social-links d-flex mt-4">
            <a href="https://twitter.com/portalkampus" target="_blank" rel="noopener noreferrer" aria-label="Twitter X Portal Kampus"><i class="bi bi-twitter-x"></i></a>
            <a href="https://facebook.com/portalkampus" target="_blank" rel="noopener noreferrer" aria-label="Facebook Portal Kampus"><i class="bi bi-facebook"></i></a>
            <a href="https://instagram.com/portalkampus" target="_blank" rel="noopener noreferrer" aria-label="Instagram Portal Kampus"><i class="bi bi-instagram"></i></a>
            <a href="https://linkedin.com/school/portalkampus" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Portal Kampus"><i class="bi bi-linkedin"></i></a>
            <a href="https://youtube.com/@portalkampus" target="_blank" rel="noopener noreferrer" aria-label="YouTube Portal Kampus"><i class="bi bi-youtube"></i></a>
          </div>`;

html = html.replace(oldSocial, newSocial);

// 12. Defer all scripts at bottom
const oldScripts = `  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>

  <!-- Main JS File -->
  <script src="assets/js/main.js"></script>`;

const newScripts = `  <!-- Vendor JS Files (Deferred for instant parsing) -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" defer></script>
  <script src="assets/vendor/php-email-form/validate.js" defer></script>
  <script src="assets/vendor/aos/aos.js" defer></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js" defer></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js" defer></script>
  <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" defer></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" defer></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js" defer></script>

  <!-- Main JS File -->
  <script src="assets/js/main.js" defer></script>`;

html = html.replace(oldScripts, newScripts);

fs.writeFileSync(file, html, 'utf8');
console.log('Successfully updated beranda.html with all optimizations!');
