import path from 'path';
import config from './rollup.base';
import server from 'rollup-plugin-serve';
import { eslint } from 'rollup-plugin-eslint';

export default {
  ...config,
  output: {
    dir: path.resolve(__dirname, '../lib'),
    format: 'esm',
    name: 'leviUtil',
    globals: { lodash: '_' },
    sourcemap: true
  },
  plugins: [
    /**
     * @description 这个需要放置在前面，rollup/plugin从上到下执行
     * ...config.plugins: 包含了babel，处理js文件
     * eslint需要先检查es6+代码，然后让babel处理
     * 如果babel在eslint之前执行，那么eslint就处理babel编译后的代码，会造成大量报错
     * */
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      exclude: ['node_modules/**'],
      include: path.resolve(__dirname, '../src/**')
    }),
    ...config.plugins,
    server({
      port: 9527,
      contentBase: ['lib', 'public']
    })
  ]
};
