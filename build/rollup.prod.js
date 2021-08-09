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
    dir: path.resolve(__dirname, '../lib')
  },
  plugins: [
    ...config.plugins,
    terser(),
    /**
     * @description 去掉alias配置，输出d.ts文件时候，tsc不转换路径alias， 所以手动使用相对路径
     * */
    typescript({
      tsconfig: path.resolve(__dirname, '../tsconfig.json')
    })
  ]
};
