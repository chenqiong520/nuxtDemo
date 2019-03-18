module.exports = {

  head: {
    script: [{
      src: '//tajs.qq.com/stats?sId=65943401',
      charset: "UTF-8",
      body: true
    }, {
      innerHTML: `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?a013e84e554ddb096c01b643868a5516";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();`,
      type: 'text/javascript',
      charset: 'utf-8',
      body: true
    }],
    __dangerouslyDisableSanitizers: ['script'],
  },

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
