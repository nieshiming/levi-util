import config from './rollup.base';
import { terser } from 'rollup-plugin-terser';

export default {
  ...config,
  output: {
    ...config.output,
    sourcemap: true
  },
  plugins: [...config.plugins, terser()]
};
