import path from 'path';
import config from './rollup.base';
import server from 'rollup-plugin-serve';
import { eslint } from 'rollup-plugin-eslint';

export default {
  ...config,
  output: {
    file: path.resolve(__dirname, '../lib/index.js'),
    format: 'esm',
    name: 'leviUtil',
    globals: { lodash: '_' },
    sourcemap: true
  },
  plugins: [
    // eslint({
    //   throwOnError: true,
    //   include: [path.resolve(__dirname, '../src/**/*.js')]
    // }),
    ...config.plugins,
    server({
      port: 9527,
      contentBase: ['dist', 'public']
    })
  ]
};
