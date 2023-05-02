import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: false
        }, {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: false
        }, {
            file: 'dist/index.umd.js',
            name: 'NameGenie',
            format: 'umd',
            sourcemap: false
        }
    ],
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true
        }),
        babel({ babelHelpers: 'bundled' }),
        resolve(),
        commonjs(),
        builtins(),
        globals(),
        json(),
        terser(),
    ]
}
