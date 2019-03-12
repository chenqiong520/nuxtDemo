module.exports = {
  css: [
    '@/assets/css/font/iconfont.css', // 本地font字体
  ],

  plugins: [{
    src: "@/assets/css/font/iconfont.js",
    ssr: false
  }],

  build: {
    // cdn 文件设置
    publicPath: 'https://cdn.gupaoedu.com/official-web-mobile',
  }
}
