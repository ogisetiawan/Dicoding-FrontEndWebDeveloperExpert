<?php
/*
 * @Author: ogisetiawan21@gmail.com 
 * @Date: 2023-01-25 17:12:02 
 * @Last Modified by: ogisetiawan21@gmail.com
 * @Last Modified time: 2023-03-11 23:13:58
 */

// @ Mobile First Approach
//~ View port
//? meta tag untuk ukurang beberapa device

//@ Aksesbilitas
//? untuk askes pada penyadang disabilitas
//~ Aksesbilitas Keyboard
//? onfokus pada sebuah form/field (tab/down/up)
//~ Focusable element
//? jangan gunakan element <a> untuk button ata sebliknya button untuk navigasi
//~ Focus Order
//? menggunakan tab-index jika dimanipulasi oleh float
//~ ChromeVox
//? extension chorome untuk membaca setiap element pada setiap website
//~ Skiptocontent
//? merupakan link tersembunyi yang dapat membuat fokus mengarah langsung ke konten utama.
//~ Heading dan Landmarks
//? biasanya h1 untuk kontent untama dan selanjutnya bsa dibungkus dgn section h2 - h6
//~ Label
//? memberikan labling pd bbrp element ( form, checkbox dll) aria-label dpt digunakan untuk labeling

//@ Javascript clean code
//~ Style Guide
//? membantu dalam konsistensi penulisan, membantu proses code review
//~ Code convinent
//? style guide dari : google, airbnb atau standart javascript
//? untuk mengaudit code "lint": "eslint ./src" pada package.json
//~ Prinsip membuat variable 
//? Pemberian nama yang jelas akan memudahkan pemahaman dan maintenance alias perawatan di masa yang akan datang.
//? menggunakan bahasa inggris ingua franca dalam konteks internasional
//? membuat value harus diberikan variable dari arti value tersebut
//? buat secara explesit, dalam looping locations and location
//~ Membuat Function dengan baik
//? argunmen minal 1 - 2, 3 jika memungkinakan hindari
//? memecah satu fungsi untuk melakukan satu hal saja
//~ Object dan Struktur data
//? gunakan getter dan setter

//@ Progressif Web App ( PWAs )
//? PWA dibentuk agar seperti aplikasi mobile native tanpa banyak perubahan dan keahliaan khusus
//~ Kelebihan PWA
//? beberapa Feature native yg bsa intergrasi: gesture, notif, lokasi dll
//? load time PWA lebih baik 
//~ Kekurangan
//? belum semua fitur native, karena masalah keamanan: kontak,sms,telepon dl
//~ Komponent Pembentuk PWAs
//# Application Shell: kerangka UI yg disimpan dahulu ke dalam cache, shgga ketika dibuka akan lbh cepat, umumnya ( header, footer yang static)
//# Web App Manifest: file json, yg berfungsi mengunduh resource dan content 
//# Service Worker: script latar belakang browser, yg dapat menampilkan content yg tersimpan dalam cache
//# Cache API: penyimpanan lokal (browser) untuk simpan resource agar tidak request lg ke server
//# Fetch API: interface standar yang digunakan browser dalam melakukan permintaan
//# IndexedDB: penyimpanan lokal berbasis NoSQL di browser ( object JS ) peran cache
//# Web Socket: komunikasi real time pada web ataupun aplikasi mobile.
//# Notification: 
//~ Web Arcitecture
//? CSR: client side rendering ( logic di frontend )
//? SSR: server side rendering ( logic di backend )
//? MPA: multi page-app, setiap pindah ke menu lain browser akan memuat kembali
//? SPA: single page-app, hanya bagian yang direquest saja yang akan di muat di browser ( meringankan di sisi server)
//~ Appliation Shell
//? component UI (HTML, CSS, Javascript ) akan disimpan di cache ( fokus ke data request )
//~ Web App Manifest
//? Web app pada mobile/desktop ( add to homescreen as shortcut )
//? di set untuk aplikasi menjadi native (theme browser, icon dll
//~ Service worker (API HTML5)
//? web yang mampu diakses dalam keadaan tidak ada internet (offline) dan dibantu dengan Cache API dan fitur lainnya
//? diprosess oleh browser pada background (seluruh request pada browser) hanya dapat dijalankan pada protokol HTTPS.
//? bertindak sebagai proxy antara web browser dan web server. 
//# prosses : BROWSER  <-> Service Worker <-> Server
//# browser request ke SW ( SW checking in Cache API ) jika tidak ada request ke server, server response ke SW ( dan simpan ke Cache API sblm ke browser, jika sudah ada tak perlu lanjut ke server untuk request)
//? SW berjalan sendiri ( without browser ) pd thread terpisah
//? 2 API dlm prosses Service Worker 
//# Fetch API : untuk mengambil konten dari internet
//# Cache API : untuk penyimpanan konten yang telah diakses oleh pengguna
//~ Registration 
//? prosess checking browser apakah mendukung atau tidak 
//? biasanya di letakan pada root project (karena tdk berjalan pada runtime javascript)
//~ Siklus Service Worker
//? proses untuk menjalankan SW ada : Installation, Activated, dan idle
//? installation : pada proses ini kita melakukan penyimpanan resource App Shell pada Caches API.
//? Activated: checking menggunakan cache lama atau baru, biasaanya harus menutup browser/tab jika ada pergantian cache (app shell) baru
//? Idle: mengontrol event fetch, message, atau push yang terjadi pada browser ( terminated / fetch/ message )
//~ Event pada Service Worker
//? Event Fetch: mengontrol/pantau request oleh client, biasanya cek cache API sudah ada apa belum
//? Event Message: Event in dapat kita manfaat untuk menerima informasi dari client ke Service Worker
//? Event Sync; web API yang dapat kita gunakan untuk menunda sebuah aksi sampai perangkat terhubung dengan stabil ke jaringan internet. dengan identitas yg telah ditentukan
//? Event Push; diinisiasi oleh backend server dan melewati push service yang ada di browser ( notifikasi browser, chat dll)
//~ Cache API
//? tempat penyimpanan lokal ( browser ) agar digunakan kembali sehingga pada next call tidak perlu send a request again
//~ Menambahkan Resource ke Cache
//# cache.add: membuat req ke server, dan save to cache, if request fail (200), then there si data to be save 
//# cache.addAll: memasukkan banyak Request atau URL String sekaligus
//# cache.keys(): untuk mencari nama cache
//# caches.delete(): delete nama keys 
//~ Caching Strategies
//? Cache Only : mengembalikan aset yang ada di dalam cache, tanpa mengirim request ke jaringan ( e.g asset yg static seperti app shell) 
//? Network only : mengirimkan permintaan ke internet tanpa menggunakan penyimpanan cache ( e.g fetch api data realltime)
//? Cache First (Cache Fallback to Network): request akan diambil dari cache dulu, namun bila request tidak ditemukan pada cache, ia akan mengambil resource dari internet.
//? Network first: selalu mengirim request ke internet response akan dimasukan ke dalam cache. Namun, bila request gagal karena jaringan terputus atau koneksi lambat, ia langsung dialihkan menggunakan cache
//? #Stale While Revalidate: kita mengembalikan dulu data dari cache bila ada, sambil mengirim juga permintaan ke jaringan untuk memperbaharui data di dalam cache ( strategi unggul dalam hal kecepatan dan juga kontennya diperbaharui di belakang layar )
//~ Workbox
//? serangkaian modul yang menyederhanakan routing dan caching di service worker
//? library untuk untuk implmentasi service worker
//# Cara Penggunaan Workbox dengan Webpack
//? generateSW dan injectManifest adalah build tool dari workboox
//? workbox-window: merupakan serangkaian module workbox yang dijalankan di window browser
//~ IndexedDB
//? built-in database dalam web browser ( NoSQL base )
//? object-store: merupakan tempat penyimpanan satu jenis kumpulan data (seperti table)
//? index: object store khusus yang dipakai untuk mengorganisir object store lain berdasarkan salah satu (atau beberapa) propertinya
//? operation: read atau write database
//? transaction: pembungkus sebuah operation atau sekelompok operation untuk menjaga integritas data
//? cursor: objek yang bisa dimanfaatkan untuk melakukan iterasi pada kumpulan data di dalam database (membaca data satu persatu).
//# npm install idb
//~ Web Socket
//? komunikasi client ke server berjalan dua arah secara aktif, artinya server tdk perlu tunggu request dri client ( kapn saja ) dan slalu aktif
//? WebSocket hanya mengirimkan data ke client (browser) ketika aplikasi atau website sedang dibuka (aktif)
//~ Notification
//? notification by browser, sblmnya perlu ijin dari client (browser) untuk activated
//? menampilkan notifikasi dapat dilakukan jika web kita sudah menerapkan Service Worker
//~ Web Push Notification
//? mengirimkan informasi kepada users meskipun mereka tidak sedang membuka website kita ( teknologi push message )
/// Alur Kerja
//? 1. meminta perizinan (subscribe) ke push message dan mengirimkan PushSubcription ke server ( data informasi dari client)
//? 2. send push message ke perangkat user (ditransitkan dulu ke push service, jadi server tidak kirim langsung ke client ) Firebase is push message
//? 3.  receive push message melalui push event di berkas service worker
//# VAPID keys adalah identitas unik untuk server
//? * Server memicu push message -> push service akan menerima API call dan mengantrekan push message -> Push message ini akan tersedia di antrean hingga perangkat user dalam keadaan online -> push service dapat menyerahkan push message ke client
// # npm install -D clean-webpack-plugin ( membersihkan seluruh berkas di direktori dist. )

// @ Automatis Testing
//? Proses automasi testing pada sebuah code secara langsung
//~ TDD ( Test Driven Development )
//# Alur TDD
//? Write the test : Tulis kode tes sebelum menulis kode lainnya. Pastikan kode tes ini gagal. Kalau tidak gagal, maka periksa kembali tes yang dibuat.
//? Make it run : Ketika memperoleh tes yang merah, maka kita perlu membuatnya hijau. Kita menghijaukan tes menggunakan kode yang secukupnya saja.
//? Make it right : Setelah kita tahu kode kita berjalan dengan benar, saatnya membuatnya baik. Salah satu trik yang kita pelajari adalah dengan mengurangi duplikasi kode. 
//? stylecode clean untuk cek condition by loop
// const detectTriangle = (sideA, sideB, sideC) => {
//     [sideA, sideB, sideC].forEach((side) => {
//       if (side < 1) {
//         throw new Error('Strange Triangle');
//       }
//     });
//   };
//? testing automation : unit testing, intergration testing dan end to end testing
//? Unit Testing adalah testing yang fokus menguji perilaku dari sebuah unit ( metode,module,object)
//? intergration : Tes yang dibuat tidak hanya fokus pada perilaku object, object lain jg
//? End-to-end Test adalah jenis tes di mana perilaku pengguna disimulasikan semuanya dari depan hingga belakang. 


//@ Web Performance
//? lighthouse dan pagespeed adalah tool yang dapat membantu untuk performa, SEO, PWA dll 
//~ Web Vital
//? Loading Performance - Seberapa cepat komponen UI tampil di layar?
//? Responsiveness - Seberapa cepat halaman bereaksi terhadap input pengguna?
//? Visual Stability - Apakah komponen UI bergeser ketika terdapat konten baru muncul?
//~ Largest Contentful Paint (LCP)
//? mengukur titik di mana elemen konten terbesar muncul di layar. ( konten terbesar )
//! Website yang baik harus menampilkan web maks 2,5 detik
//? faktor terbesar : server, proses render yg terblokir oleh css/js, ukuran, dan prosess rendering dari client
//~ First Input Delay (FID)
//? mengukur delay ketika pengguna pertama kali berinteraksi dengan komponen hingga browser memproses event handler
//~ Cumulative Layout Shift (CLS)
//? CLS : mengukur kestabilan layout yang ditampilkan, Google memperbolehkan pergeseran bila tidak lebih dari 10% dari ukuran layar
//~ Image Optimize
//? Optimisasi gambar dapat meliputi pemilihan format, resolusi, atau kompresi yang tepat
//! Imagemin :Imagemin dapat mengkompresi berbagai tipe gambar dan cukup mudah diintegrasikan dengan build scripts dan build tools seperti webpack 
//! npm install imagemin-webpack-plugin imagemin-mozjpeg@9.x.x --save-dev ( untuk jpeg)
//~ Ubah Gif ke Video
//! npm install fluent-ffmpeg --save-dev
// * https://www.dicoding.com/academies/219/tutorials/9766?from=9761
//~ Image Responsive
/* <picture>
  <source media="(max-width: 600px)" srcset="./path/to/images/image-small.jpg">
  <img src="./path/to/images/image-large.jpg" 
       alt="">
</picture>
*/
//! npm install sharp ( tool yang dapat menset bbrpa variasi ukuran image )
// * https://www.dicoding.com/academies/219/tutorials/9771?from=9770
//~ WebP Image
//? format baru yang tepat untuk menggantikan PNG & JPG pada website
//? tetapi tidak semua browser support webp
//! npm install imagemin-webp-webpack-plugin --save-dev
// * https://www.dicoding.com/academies/219/tutorials/9781?from=9776
//~ Lazy Loading
//? teknik untuk memuat suatu element ketika dibutuhkan saja
//? Lazysize : tool yang banyak digunakan untuk lazy loading
//~ Optimize Bundle
//? optimisi pada vendor ketika yg hanya digunakan saja, seperti moment.js kita dpt set waktu yg digunakan saja ( ID )
//~ Bundle Analyzer
//? membantu kita untuk menunjukan apa yang sebenarnya ada di dalam bundel sehingga kita bisa mencari tahu library atau module yang membuat bundle menjadi besar
// * https://www.dicoding.com/academies/219/tutorials/9806?from=9801
// ~ Code Splitting
//? tool yang dapat memecah modul menjadi beberapa berkas bundle. Walaupun kita banyak menggunakan vendor code
// ~ Split Chunks
//? cara paling mudah dalam memecah module, optimasi dilakukan pada webpack
//? sehingga function/module akan diload sesuai kebutuhan saja / per request


