import babel from '@rollup/plugin-babel';
import pkg from './package.json';

let external = []
  // Mark dependencies and peerDependencies as external
  .concat(
    Object.keys(pkg.dependencies),
    Object.keys(pkg.peerDependencies),
    'next/router'
  );

export default [
  {
    input: 'src/index.js',
    external,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [babel({ babelHelpers: 'runtime' })],
  },
];
