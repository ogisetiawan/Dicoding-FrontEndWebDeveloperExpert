<?php
/*
 * @Author: ogisetiawan21@gmail.com 
 * @Date: 2023-01-25 17:12:02 
 * @Last Modified by: ogisetiawan21@gmail.com
 * @Last Modified time: 2023-02-27 22:50:05
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
//? libarary untuk untuk implmentasi service worker
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