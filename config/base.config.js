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
    }],
  },

  /*
   ** 加载条颜色
   */
  loading: {
    color: 'rgba(253, 85, 58, 1)'
  },

  /*
   ** 全局css
   */
  css: [
    '@/assets/css/reset.css',
    'swiper/dist/css/swiper.css',
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
  }, {
    src: '~/plugins/cipboard.js',
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
    retry: {
      retries: 3
    },
    //开发模式下开启debug
    debug: process.env.NODE_ENV == "production" ? false : true,
    //设置不同环境的请求地址
    browserBaseURL: process.env.NODE_ENV === "production" ?
      "http://m.gupaoedu.cn" : (process.env.NODE_ENV === "pre-production" && "http://192.168.8.122/manageapi"),
    proxy: true
  },

  /**
   * 打包配置
   */
  build: {
    extend(config, ctx) {
      // 编译时进行eslint检查
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }

      // 图片压缩
      config.module.rules.push({
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            // the webp option will enable WEBP
            // webp: {
            //   quality: 75
            // }
          }
        }]
      })
    },

    postcss: {
      plugins: {
        'postcss-px-to-viewport': {
          viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
          viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
          unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
          selectorBlackList: ['.ignore'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
          minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
          mediaQuery: false // 允许在媒体查询中转换`px`
        }
      }
    },

    vendor: [
      'axios'
    ]
  },

  generate: {
    subFolders: true
  }
}
