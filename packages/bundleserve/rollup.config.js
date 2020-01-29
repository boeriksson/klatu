import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default [{
    input: 'src/bundle-react.js',
    output: {
        file: 'serve/react-mine.js',
        format: 'esm'
    },
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
            namedExports: {
                'node_modules/prop-types/index.js': ['PropTypes', 'elementType'],
                'node_modules/react-is/index.js': ['isValidElementType', 'ForwardRef'],
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
        })
    ]
}, {
    input: 'src/bundle-react-dom.js',
    output: {
        file: 'serve/react-dom-mine.js',
        format: 'esm'
    },
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
            namedExports: {
                'node_modules/prop-types/index.js': ['PropTypes', 'elementType'],
                'node_modules/react-is/index.js': ['isValidElementType', 'ForwardRef'],
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
        })
    ]
}]

