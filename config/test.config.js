module.exports = {
  render: {
    resourceHints: false,
  },
  
  css: [
    '@/assets/css/font/iconfont.css', // 本地font字体
  ],

  plugins: [{
    src: "@/assets/css/font/iconfont.js",
    ssr: false
  }],
}
