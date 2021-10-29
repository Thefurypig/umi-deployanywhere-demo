import { defineConfig } from 'umi';
import Dotenv from 'dotenv-webpack';
import { resolve } from 'path';
// import DynamicPubPathPlugin from './plugins/DynamicPubPathPlugin';
const { DEPLOY_ENV } = process.env;
console.log("🚀 ~ file: .umirc.ts ~ line 6 ~ DEPLOY_ENV", DEPLOY_ENV)

const development = process.env.NODE_ENV !== 'production';
const publicPath = development ? './' : '$$root/';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  chainWebpack(config){
    config
    .plugin('dot-env')
    .use(Dotenv, [{ path: resolve(__dirname, `./.env.${DEPLOY_ENV}`) }]);
  },
  define: {
    'process.env.DEPLOY_ENV': DEPLOY_ENV,
  },
  publicPath
});
