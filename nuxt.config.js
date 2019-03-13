const merge = require('webpack-merge')
const baseConfig = require('./config/base.config')
const devConfig = require('./config/dev.config')
const prodConfig = require('./config/prod.config')
const testConfig = require('./config/test.config')

const env = process.env.NODE_ENV
console.log(env)

// 默认为开发环境
let mergedConfig = merge(baseConfig, devConfig)

<<<<<<< HEAD
// 测试环境(预生产环境)
if (env === 'pre-production') {
  mergedConfig = merge(baseConfig, testConfig)
}
=======
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
    ],
    [
      '/arrangement',
      {
        target: 'http://192.168.8.122', // 测试服务器
        changeOrigin: true, // 是否跨域
        pathRewrite: { // 重写path
          '^/arrangement': '/manageapi/arrangement'
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
        // 'postcss-px2rem': {
        //   remUnit: 75
        // }
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
    }
  },
>>>>>>> dev-partner

// 生产环境
if (env === 'production') {
  mergedConfig = merge(baseConfig, prodConfig)
}

module.exports = mergedConfig
