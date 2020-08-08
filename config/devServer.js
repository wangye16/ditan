/**
 * Created by lunachi on 2018/4/25.
 * 项目配置
 */
module.exports = {
  development: {
    // host: 'test.58.com',
    // port: 8085,
    publicPath: '/',
    mock: true,
    autoOpenBrowser: true,
  },
  production: {
    publicPath: '//j1.58cdn.com.cn/frs/fangfe/zufang-release/1.1',
    compressCss: false,
    minimize: true,
  },
};
