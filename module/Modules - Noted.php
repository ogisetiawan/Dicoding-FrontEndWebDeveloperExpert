<?php
/*
 * @Author: ogisetiawan21@gmail.com 
 * @Date: 2023-01-25 17:12:02 
 * @Last Modified by: ogisetiawan21@gmail.com
 * @Last Modified time: 2023-02-08 17:14:17
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