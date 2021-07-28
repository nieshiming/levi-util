import path from 'path';
import config from './rollup.base';
import server from 'rollup-plugin-serve';
import { eslint } from 'rollup-plugin-eslint';
import rollupTypescript from 'rollup-plugin-typescript2';

export default {
  ...config,
  output: {
    ...config.output
  },
  plugins: [
    // eslint({
    //   throwOnError: true,
    //   include: [path.resolve(__dirname, '../src/**/*.js')]
    // }),
    // rollupTypescript({
    //   useTsconfigDeclarationDir: true,
    //   include: [path.resolve(__dirname, '../src/**/*.ts')],
    //   tsconfig: path.resolve(__dirname, '../tsconfig.json')
    // })
    ...config.plugins,
    server({
      port: 9527,
      contentBase: ['dist', 'public']
    })
  ]
};
