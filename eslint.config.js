const js = require('@eslint/js');
const prettier = require('eslint-plugin-prettier');

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
