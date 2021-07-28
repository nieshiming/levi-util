import path from 'path';
import babel from '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import nodeResolve from '@rollup/plugin-node-resolve';

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx'];

export default {
  input: path.resolve(__dirname, '../src/index.ts'),
  output: {
    file: path.resolve(__dirname, '../dist/boundle.js'),
    format: 'umd',
    name: 'nsm',
    globals: {
      lodash: '_'
    }
  },
  plugins: [
    commonjs(),
    nodeResolve({
      extensions,
      browser: true
    }),
    babel({
      extensions,
      babelHelpers: 'runtime',
      exclude: 'node_modules/**'
    })
  ],
  external: ['lodash']
};