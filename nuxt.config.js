module.exports = {
  mode: 'universal',

  /*
   ** 多页面的head
   */
  head: {
    title: '咕泡学院',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: '咕泡学院是一家专注IT互联网在线教育培训机构,提供java架构师培训,人工智能培训,大数据培训,软件测试培训,Web前端培训,区块链培训等课程，课程均由一线互联网公司技术大牛精心研发，汇集多年工作积累，让您站在巨人的肩膀上快速成长。学院宗旨：做技术人的指路明灯，职场生涯的精神导师！"'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      /**
       * 阿里iconfont
       * 开发时，可使用阿里提供的地址
       * 上线时，替换为下载好的本地字体
       */
      {
        rel: 'stylesheet',
        href: 'http://at.alicdn.com/t/font_1078836_k9ya6yrxnwd.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** 全局css
   */
  css: [
    '@/assets/css/reset.css',
    'swiper/dist/css/swiper.css'
  ],

  /*
   ** 第三方插件
   */
  plugins: [{
    src: '~/plugins/swiper.js',
    ssr: false
  }, {
    src: '~/plugins/filters.js',
    ssr: false
  }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /**
   * 配置开发环境代理
   */
  proxy: [
    [
      '/wwwapi',
      {
        target: 'http://192.168.8.122', // 测试服务器
        changeOrigin: true, // 是否跨域
        pathRewrite: { // 重写path
          '^/wwwapi': '/manageapi/wwwapi' //将 /wwwapi 代替为 /manageapi/wwwapi
        }
      }
    ]
  ],

  /** 
   * 打包配置
   */
  build: {

    // extend(config, ctx) {
    //   // 编译时进行eslint检查
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },

    // cdn 文件设置
    // publicPath: 'https://cdn.gupaoedu.com/official-web-mobile',

    postcss: {
      plugins: {
        'postcss-px2rem': {
          remUnit: 32
        }
      }
    }
  },

  generate: {
    subFolders: false
  }
}
