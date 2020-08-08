import { defineConfig } from 'umi';
import { resolve } from 'path';
import config from './config/devServer';
import pxToViewPort from 'postcss-px-to-viewport';
import autoprefixer from 'autoprefixer';

const getUrl = () => {
  const { NODE_ENV } = process.env;
  return NODE_ENV === 'development' ? '/' : '//j1.58cdn.com.cn/frs/fangfe/fang-entrust_react/1.0/';
};
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 路由懒加载配置
  dynamicImport: {},
  outputPath: 'build',
  // base: '/landlord/agent/qiangdan_list/',
  // publicPath: getUrl(),
  base: '/',
  publicPath: '/',
  alias: {
    '@': resolve(__dirname, './src'),
    styles: resolve(__dirname, './src/styles'),
    utils: resolve(__dirname, './src/utils'),
    components: resolve(__dirname, './src/components'),
  },
  ignoreMomentLocale: true,
  devServer: {
    hot: true,
    compress: true,
    host: config.development.host,
    port: config.development.port,
    open: config.development.autoOpenBrowser,
  },
  extraPostCSSPlugins: [
    pxToViewPort({
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false,
      exclude: /plyr/,
    }),
    autoprefixer({
      flexbox: true,
    }),
  ],
});
