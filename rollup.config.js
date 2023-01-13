import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'

import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      commonjs(),
      // resolve(),
      json(),
      peerDepsExternal(),
      babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
      typescript({
        tsconfig: 'tsconfig.json'
      })
    ]
  }
]
