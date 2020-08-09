
const path = require('path')
module.exports = {
  pluginOptions: { // 第三方插件配置
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, './src/base.less')] // less所在文件路径
    }
  }
}
