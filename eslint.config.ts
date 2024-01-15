// @ts-nocheck

/**
 * ESLint Configuration
 * ====================
 *
 * Remember to run `>ESLint: Restart ESLint Server`
 * command after making changes and the file saving.
 * Tip: Open `>Keyboard Shortcuts` and bind restart.
 *
 * When using ESLint VSCode extension, make sure you
 * have `Use Flat Config` option enabled in settings.
 * Bonus tip: When using Relivator, use `pnpm appts`.
 *
 * Note: antfu already includes the following plugins:
 * typescript, stylistic, perfectionist, jsonc, react,
 * unicorn, unocss, vue, yaml, toml, jsdoc, markdown.
 * Go to `export default antfu` to see actual config.
 * @see https://github.com/antfu/eslint-config#antfueslint-config
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-new
 */

import antfu from "@antfu/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";
import eslintJsPlugin from "@eslint/js";
import stylisticPlugin from "@stylistic/eslint-plugin";
import * as airbnbBestPracticesConfig from "eslint-config-airbnb-base/rules/best-practices";
import * as airbnbErrorsConfig from "eslint-config-airbnb-base/rules/errors";
import * as airbnbES6Config from "eslint-config-airbnb-base/rules/es6";
import * as airbnbNodeConfig from "eslint-config-airbnb-base/rules/node";
import * as airbnbStyleConfig from "eslint-config-airbnb-base/rules/style";
import * as airbnbVariablesConfig from "eslint-config-airbnb-base/rules/variables";
import commentsPlugin from "eslint-plugin-eslint-comments";
import functionalPlugin from "eslint-plugin-functional";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import noSecretsPlugin from "eslint-plugin-no-secrets";
import promisePlugin from "eslint-plugin-promise";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactPluginConfigsRecommended from "eslint-plugin-react/configs/recommended";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";
import unicornPlugin from "eslint-plugin-unicorn";
import writeGoodCommentsPlugin from "eslint-plugin-write-good-comments";
import xssPlugin from "eslint-plugin-xss";

const compat = new FlatCompat();

export default antfu(
  {
    formatters: { css: true },
    ignores: ["./dist", "./build"],
    plugins: {
      "@stylistic": stylisticPlugin,
      "eslint-comments": commentsPlugin,
      functional: functionalPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "no-secrets": noSecretsPlugin,
      promise: promisePlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      tailwindcss: tailwindcssPlugin,
      unicorn: unicornPlugin,
      "write-good-comments": writeGoodCommentsPlugin,
      xss: xssPlugin,
    },
    react: true,
    rules: {
      ...reactPluginConfigsRecommended.rules,
      ...promisePlugin.configs.recommended.rules,
      ...eslintJsPlugin.configs.recommended.rules,
      ...tailwindcssPlugin.configs.recommended.rules,
      ...stylisticPlugin.configs["recommended-flat"].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...unicornPlugin.configs.recommended.rules,
      ...xssPlugin.configs.recommended.rules,
      ...airbnbBestPracticesConfig.rules,
      ...airbnbVariablesConfig.rules,
      ...airbnbErrorsConfig.rules,
      ...airbnbStyleConfig.rules,
      ...airbnbNodeConfig.rules,
      ...airbnbES6Config.rules,
      // https://eslint.style/packages/default#rules
      "@stylistic/arrow-parens": "off",
      "@stylistic/brace-style": "off",
      "@stylistic/comma-dangle": "off",
      "@stylistic/eol-last": "off",
      "@stylistic/indent": "off",
      "@stylistic/indent-binary-ops": "off",
      "@stylistic/jsx-closing-tag-location": "off",
      "@stylistic/jsx-curly-newline": "off",
      "@stylistic/jsx-indent": "off",
      "@stylistic/jsx-one-expression-per-line": "off",
      "@stylistic/jsx-wrap-multilines": "off",
      "@stylistic/keyword-spacing": [
        // https://eslint.style/rules/default/keyword-spacing
        "off",
        { after: true, before: true },
      ],
      "@stylistic/max-len": [
        // https://eslint.style/rules/default/max-len
        "off",
        {
          code: 400,
          ignoreComments: true,
          ignoreTrailingComments: true,
        },
      ],
      "@stylistic/max-statements-per-line": [
        // https://eslint.style/rules/default/max-statements-per-line
        "off",
        { max: 1 },
      ],
      "@stylistic/member-delimiter-style": "off",
      "@stylistic/multiline-ternary": "off",
      "@stylistic/no-tabs": "off",
      "@stylistic/operator-linebreak": "off",
      "@stylistic/quote-props": "off",
      "@stylistic/quotes": "off",
      "@stylistic/semi": "off",
      "@stylistic/spaced-comment": "off",
      "antfu/consistent-list-newline": "off",
      "arrow-parens": "off",
      "comma-dangle": ["off", "only-multiline"],
      complexity: ["off", 10],
      "implicit-arrow-linebreak": "off",
      "import/order": "off",
      indent: "off",
      "jsonc/sort-keys": "off",
      "linebreak-style": "off",
      "max-depth": ["off", 4],
      "max-len": "off",
      "max-lines-per-function": ["off", 200],
      "max-nested-callbacks": ["off", 4],
      "max-params": ["off", 5],
      "max-statements": ["off", 20],
      "no-multiple-empty-lines": ["off", { max: 1, maxBOF: 0, maxEOF: 1 }],
      "no-tabs": "off",
      "object-curly-newline": "off",
      "operator-linebreak": "off",
      "perfectionist/sort-array-includes": "warn",
      "perfectionist/sort-imports": "off",
      "perfectionist/sort-interfaces": "warn",
      "perfectionist/sort-jsx-props": "warn",
      "perfectionist/sort-named-exports": "warn",
      "perfectionist/sort-named-imports": "off",
      "perfectionist/sort-object-types": "warn",
      "perfectionist/sort-objects": "warn",
      "perfectionist/sort-union-types": "warn",
      "quote-props": "off",
      quotes: ["off", "double", { allowTemplateLiterals: true }],
      "react/jsx-max-depth": ["off", { max: 5 }],
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "spaced-comment": "off",
      "style/arrow-parens": "off",
      "style/brace-style": "off",
      "style/comma-dangle": "off",
      "style/indent": "off",
      "style/indent-binary-ops": "off",
      "style/member-delimiter-style": "off",
      "style/no-tabs": "off",
      "style/operator-linebreak": "off",
      "style/quote-props": "off",
      "ts/comma-dangle": ["off", "only-multiline"],
      "unicorn/filename-case": ["off"],
      "unicorn/prevent-abbreviations": "off",
      "yaml/block-sequence": "off",
      "yaml/plain-scalar": "off",
    },
    settings: { react: { version: "detect" } },
    stylistic: { quotes: "double", semi: true },
    typescript: { tsconfigPath: "tsconfig.json" },
    vue: false,
  },
  ...compat.config({
    extends: [
      "plugin:deprecation/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:sonarjs/recommended",
    ],
    plugins: [
      "@limegrass/import-alias",
      "no-barrel-files",
      "no-secrets",
      "jsx-a11y",
      "sonarjs",
      "react-refresh",
    ],
    rules: {
      "@limegrass/import-alias/import-alias": "off",
      "deprecation/deprecation": "off",
      "no-barrel-files/no-barrel-files": "off",
      "no-secrets/no-secrets": "off",
      "react-refresh/only-export-components": "off",
    },
  }),
  {
    files: ["**/*.?(*)ts?(x)", ".test.ts(x)"],
    rules: {
      "ts/ban-ts-comment": "off",
      "ts/no-unsafe-argument": "off",
      "ts/no-unsafe-assignment": "off",
      "ts/no-unsafe-call": "off",
      "ts/no-unsafe-member-access": "off",
      "ts/no-unsafe-return": "off",
    },
  },
);

/**
 * Resources and Inspirations
 * ==========================
 * @see https://typescript-eslint.io typescript
 * @see https://eslint.org/docs/latest/rules eslint
 * @see https://github.com/import-js/eslint-plugin-import#rules import
 * @see https://github.com/antfu/eslint-ts-patch/#readme eslint-ts-patch
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn#rules unicorn
 * @see https://github.com/ArnaudBarre/eslint-plugin-react-refresh react-refresh
 * @see https://github.com/art0rz/eslint-plugin-no-barrel-files#rules no-barrel-files
 * @see https://github.com/Anparasan3/core-js/blob/master/eslint.config.js inspirations
 * @see https://mysticatea.github.io/eslint-plugin-eslint-comments/rules eslint-comments
 * @see https://github.com/Limegrass/eslint-plugin-import-alias#configuration import-alias
 * @see https://github.com/nirv-ai/tinkerbuntune/blob/develop/eslint.config.js inspirations
 * @see https://github.com/eslint-functional/eslint-plugin-functional#supported-rules functional
 */
