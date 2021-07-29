import path from 'path';
import config from './rollup.base';
import { terser } from 'rollup-plugin-terser';

export default {
  ...config,
  output: {
    file: path.resolve(__dirname, '../lib/index.js'),
    format: 'umd',
    name: 'leviUtil',
    globals: { lodash: '_' },
    sourcemap: true
  },
  plugins: [...config.plugins, terser()]
};
