const js = require('@eslint/js');
const prettier = require('eslint-plugin-prettier');
const html = require('eslint-plugin-html');

module.exports = [
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: {
                require: 'readonly',
                __dirname: 'readonly',
                process: 'readonly',
                console: 'readonly',
            },
            sourceType: 'commonjs', // Treat files as CommonJS
        },
    },
];
