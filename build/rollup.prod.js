import path from 'path';
import config from './rollup.base';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  ...config,
  output: {
    format: 'esm',
    name: 'leviUtil',
    globals: { lodash: '_' },
    dir: path.resolve(__dirname, '../lib'),
  },
  plugins: [
    ...config.plugins,
    terser(),
    typescript({
      tsconfig: path.resolve(__dirname, '../tsconfig.json')
    }),
  ]
};
