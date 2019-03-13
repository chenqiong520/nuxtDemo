const merge = require('webpack-merge')
const baseConfig = require('./config/base.config')
const devConfig = require('./config/dev.config')
const prodConfig = require('./config/prod.config')
const testConfig = require('./config/test.config')

const env = process.env.NODE_ENV
console.log(env)

// 默认为开发环境
let mergedConfig = merge(baseConfig, devConfig)

// 测试环境(预生产环境)
if (env === 'pre-production') {
  mergedConfig = merge(baseConfig, testConfig)
}

// 生产环境
if (env === 'production') {
  mergedConfig = merge(baseConfig, prodConfig)
}

module.exports = mergedConfig
