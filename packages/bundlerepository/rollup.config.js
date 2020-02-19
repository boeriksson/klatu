import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

const rollupConfig = () => {
    const createConfig = (entry, bundle) => ({
        input: 'src/' + entry + '.js',
        output: [
            {
                dir: 'serve/bundles',
                entryFileNames: bundle + '.js',
                format: 'esm',
                exports: 'named'
            }
        ],
        plugins: [
            resolve({extensions: ['.jsx', '.js', '.json'], browser: true}),
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
                namedExports: {
                    'node_modules/prop-types/index.js': ['PropTypes', 'elementType'],
                    'node_modules/react-is/index.js': ['isFragment', 'isValidElementType', 'forwardRef'],
                    'node_modules/react-transition-group/esm/utils/ChildMapping.js': [ 'Children', 'cloneElement', 'isValidElement' ],
                    'node_modules/react/index.js': ['isValidElement', 'Children', 'cloneElement']
                },
                include: /node_modules/,
                exclude: [
                    'node_modules/process-es6/**',
                ],
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('development')
            }),
        ],
        external: ['react', 'react-dom']
    })
    return [
        createConfig('TopMenuComviq', 'topMenuComviq'),
        createConfig('TopMenuComhem', 'topMenuComhem'),
        createConfig('RandomWidget', 'randomWidget')
    ]
}

export default rollupConfig
