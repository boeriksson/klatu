import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

const rollupConfig = () => {
    const createConfig = () => ({
        input: './src/index.js',
        output: [
            {
                dir: 'serve',
                entryFileNames: 'topMenu.mjs',
                format: 'esm',
                exports: 'named',
            },
            {
                dir: 'serve',
                entryFileNames: 'topMenu.js',
                format: 'system',
                exports: 'named',
            },
        ],
        plugins: [
            resolve({extensions: ['.jsx', '.js', '.json'], browser: true,}),
            babel({
                exclude: ['node_modules/**'],
                presets: ['@babel/env', '@babel/preset-react'],
                plugins: [
                    "@babel/plugin-proposal-class-properties",
                    "@babel/plugin-transform-async-to-generator",
                    "@babel/plugin-transform-regenerator",
                    "@babel/plugin-syntax-dynamic-import",
                    "dynamic-import-node"
                ],
                babelrc: true,
                externalHelpers: false,
                runtimeHelpers: true
            }),
            commonjs({
                namedExports: {},
                include: 'node_modules/**',
                exclude: [
                    'node_modules/process-es6/**',
                ],
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('development')
            })
        ]
    })
    return createConfig()
}

export default rollupConfig
