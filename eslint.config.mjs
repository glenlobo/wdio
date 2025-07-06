import stylisticJs from '@stylistic/eslint-plugin-js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginMocha from 'eslint-plugin-mocha';
import prettierPlugin from 'eslint-plugin-prettier';
import {configs as wdioConfig} from 'eslint-plugin-wdio';

export default [
  // ESLint Recommended Config
  {
    files: ['./**/*.js', './**/*.mjs'], // Specify which files this config applies to
    plugins: {
      // For flat config, use the plugin name as the key and import the whole plugin
      prettier: prettierPlugin,
      mocha: eslintPluginMocha,
      '@stylistic/js': stylisticJs,
    },
    rules: {
      // Disable ESLint formatting rules that might conflict with Prettier
      quotes: ['error', 'single'],
      'space-in-brackets': ['warn', 'never'],
      'prettier/prettier': 'warn', // Integrate Prettier as an ESLint rule
      'import/order': 'off', // Disable eslint-plugin-import's order rule
      'sort-imports': 'off', // Disable ESLint's built-in sort-imports rule or similar from other plugins
      'no-console': 'warn', // Warn on console.log usage
      'no-unused-vars': 'warn', // Warn about unused variables
      'mocha/no-exclusive-tests': 'error', // Prevent .only or .skip in Mocha tests
    },
  },

  // WebdriverIO recommended config
  wdioConfig['flat/recommended'] || {}, // Fallback to an empty object if undefined

  // Prettier config to turn off rules that conflict with Prettier
  eslintConfigPrettier,
];
