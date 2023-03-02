const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'), // ? Ketika webpack berjalan dalam mode development, konten statis yang digunakan berdasarkan konten yang ada di dalam folder ‘dist’.
    open: true, // ? Memberitahukan dev server untuk membuka browser setelah local server telah dimulai
    port: 1000, // ? set port
    client: {
      overlay: { // ? show overlay error in browser
        errors: true,
        warnings: true
      }
    },
    compress: true // ? activated gzip compress, agar lebih efesien
  },
  // ? plugin untuk membersihkan folder dist
  plugins: [
    new CleanWebpackPlugin()
  ]
})
