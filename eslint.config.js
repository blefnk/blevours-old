import url from "node:url";

// @ts-expect-error - no types
import { FlatCompat } from "@eslint/eslintrc";
// @ts-expect-error - no types
import eslint from "@eslint/js";
import reactCommunity from "@eslint-react/eslint-plugin";
// @ts-expect-error - no types
import next from "@next/eslint-plugin-next";
import stylistic from "@stylistic/eslint-plugin";
// @ts-expect-error - no types
import drizzle from "eslint-plugin-drizzle";
import importx from "eslint-plugin-import-x";
// @ts-expect-error - no types
import json from "eslint-plugin-json";
import * as mdx from "eslint-plugin-mdx";
// @ts-expect-error - no types
import norelative from "eslint-plugin-no-relative-import-paths";
// @ts-expect-error - no types
import perfectionist from "eslint-plugin-perfectionist/configs/recommended-natural";
import globals from "globals";
// import reactOfficial from "eslint-plugin-react/configs/recommended.js";
// @ts-expect-error - no types
import reactOfficial from "eslint-plugin-react";
// @ts-expect-error - no types
import compiler from "eslint-plugin-react-compiler";
// @ts-expect-error - no types
import reactHooks from "eslint-plugin-react-hooks";
// @ts-expect-error - no types
import reactRefresh from "eslint-plugin-react-refresh";
// @ts-expect-error - no types
import sort from "eslint-plugin-sort";
// @ts-expect-error - no types
import exports from "eslint-plugin-sort-exports";
// @ts-expect-error - no types
import unicorn from "eslint-plugin-unicorn";
// import rsc from "eslint-plugin-react-server-components";
import tseslint from "typescript-eslint";

const dirname = (/** @type {string | URL} */ file) => url.fileURLToPath(new URL(file, import.meta.url));
const compat = new FlatCompat({ baseDirectory: dirname("./") });

// @see https://github.com/blefnk/relivator/blob/main/eslint.config.mjs
/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
const config = [
  // @see https://eslint.org/docs/latest/use/configure
  { ignores: [".million", ".next", ".turbo", "build", "dist", "node_modules", "drizzle"] },
  {
    name: "Blefnk ESLint Config",
    ...reactCommunity.configs["recommended-type-checked"],
    // @see https://typescript-eslint.io/getting-started
    extends: [
      // @see https://eslint.org/docs/latest/rules
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      unicorn.configs["flat/recommended"],
      stylistic.configs.customize({
        commaDangle: "never",
        flat: true,
        indent: 2,
        jsx: true,
        quotes: "double",
        semi: true,
      }),
      perfectionist,
      sort.configs["flat/recommended"],
      // https://github.com/roginfarrer/eslint-plugin-react-server-components
      // @see alternative: https://github.com/frozies/next-no-use-client-page
      // ...rsc.configs.recommended
    ],
    files: ["**/*{js,ts,mjs,mts,cts,jsx,tsx,mtsx,mjsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { impliedStrict: true, jsx: true },
        ecmaVersion: "latest",
        env: { es2024: true, node: true },
        project: "./tsconfig.json",
        sourceType: "module",
        tsconfigRootDir: dirname("./"),
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    plugins: {
      "@eslint-react": reactCommunity,
      "@next/next": next,
      "@stylistic": stylistic,
      "@typescript-eslint": tseslint.plugin,
      drizzle: drizzle,
      "import-x": importx,
      "no-relative-import-paths": norelative,
      react: reactOfficial,
      "react-compiler": compiler,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      sort: sort,
      "sort-exports": exports,
    },
    rules: {
      ...reactOfficial.configs.recommended.rules,
      ...reactOfficial.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
      ...importx.configs.recommended.rules,

      // @see https://eslint-react.xyz/rules/overview
      "@eslint-react/no-leaked-conditional-rendering": "off",

      // @see https://nextjs.org/docs/app/building-your-application/configuring/eslint
      "@next/next/no-duplicate-head": "off",
      "@next/next/no-img-element": "error",

      // @see https://eslint.style
      "@stylistic/array-bracket-newline": [
        "off",
        {
          minItems: 10,
          multiline: true,
        },
      ],
      "@stylistic/array-bracket-spacing": ["off", "always"],
      "@stylistic/array-element-newline": ["off"],
      "@stylistic/arrow-parens": ["off", "as-needed"],
      "@stylistic/arrow-spacing": [
        "error",
        {
          after: true,
          before: true,
        },
      ],
      "@stylistic/block-spacing": ["error", "always"],
      "@stylistic/brace-style": [
        "off",
        "stroustrup",
        {
          allowSingleLine: false,
        },
      ],
      "@stylistic/comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
          imports: "always-multiline",
          objects: "always-multiline",
        },
      ],
      "@stylistic/comma-spacing": [
        "error",
        {
          after: true,
          before: false,
        },
      ],
      "@stylistic/comma-style": ["error", "last"],
      "@stylistic/computed-property-spacing": ["off", "always"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/eol-last": "error",
      "@stylistic/func-call-spacing": "error",
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/function-call-spacing": ["off", "never"],
      "@stylistic/function-paren-newline": ["off", "consistent"],
      "@stylistic/generator-star-spacing": ["off", "both"],
      "@stylistic/implicit-arrow-linebreak": ["off", "beside"],
      "@stylistic/indent": [
        "off", // TODO: incompatible with biome
        4, // 2
        {
          SwitchCase: 1,
        },
      ],
      "@stylistic/indent-binary-ops": "off",
      "@stylistic/jsx-child-element-spacing": "off",
      "@stylistic/jsx-closing-bracket-location": "off",
      "@stylistic/jsx-closing-tag-location": "off",
      "@stylistic/jsx-curly-newline": "off",
      "@stylistic/jsx-indent": "off",
      "@stylistic/jsx-indent-props": "off",
      "@stylistic/jsx-one-expression-per-line": "off",
      "@stylistic/jsx-pascal-case": "off",
      "@stylistic/jsx-self-closing-comp": "off",
      "@stylistic/jsx-wrap-multilines": [
        "error",
        {
          arrow: "parens",
          assignment: "parens",
          condition: "ignore",
          declaration: "parens",
          logical: "ignore",
          prop: "ignore",
          return: "parens",
        },
      ],
      "@stylistic/key-spacing": [
        "off",
        {
          afterColon: true,
          beforeColon: false,
        },
      ],
      "@stylistic/keyword-spacing": [
        "off",
        {
          after: true,
          before: true,
        },
      ],
      "@stylistic/linebreak-style": ["off", "unix"],
      "@stylistic/lines-around-comment": [
        "off",
        {
          afterBlockComment: false,
          afterHashbangComment: true,
          afterLineComment: false,
          allowArrayEnd: true,
          allowArrayStart: true,
          allowBlockEnd: true,
          allowBlockStart: true,
          allowClassEnd: true,
          allowClassStart: true,
          allowEnumEnd: true,
          allowEnumStart: true,
          allowInterfaceEnd: true,
          allowInterfaceStart: true,
          allowModuleEnd: true,
          allowModuleStart: true,
          allowObjectEnd: true,
          allowObjectStart: true,
          allowTypeEnd: true,
          allowTypeStart: true,
          applyDefaultIgnorePatterns: true,
          beforeBlockComment: true,
          beforeLineComment: true,
          ignorePattern: String.raw`@type\s.+|@ts-expect-error`,
        },
      ],
      "@stylistic/lines-between-class-members": "off",
      "@stylistic/max-len": [
        "off",
        {
          code: 160,
          ignoreComments: true,
          ignorePattern: String.raw`^[\s]*(//|<!--) (es|style)lint-.+`,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
          tabWidth: 4,
        },
      ],
      "@stylistic/max-statements-per-line": [
        "off",
        {
          max: 1,
        },
      ],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "comma",
            requireLast: false,
          },
          multilineDetection: "brackets",
          overrides: {
            interface: {
              multiline: {
                delimiter: "semi",
                requireLast: true,
              },
              singleline: {
                delimiter: "semi",
                requireLast: false,
              },
            },
            typeLiteral: {
              multiline: {
                delimiter: "semi",
                requireLast: true,
              },
              singleline: {
                delimiter: "semi",
                requireLast: false,
              },
            },
          },
          singleline: {
            delimiter: "comma",
            requireLast: false,
          },
        },
      ],
      "@stylistic/multiline-ternary": ["off", "always-multiline"],
      "@stylistic/new-parens": ["error", "always"],
      "@stylistic/newline-per-chained-call": ["off"],
      "@stylistic/no-confusing-arrow": "off",
      "@stylistic/no-extra-parens": ["off"],
      "@stylistic/no-extra-semi": "error",
      "@stylistic/no-floating-decimal": "error",
      "@stylistic/no-mixed-operators": [
        "error",
        {
          allowSamePrecedence: true,
          groups: [
            ["&", "|", "^", "~", "<<", ">>", ">>>"],
            ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
            ["in", "instanceof"],
          ],
        },
      ],
      "@stylistic/no-mixed-spaces-and-tabs": "off",
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 0,
        },
      ],
      "@stylistic/no-tabs": "off",
      "@stylistic/no-trailing-spaces": "off",
      "@stylistic/no-whitespace-before-property": "off",
      "@stylistic/nonblock-statement-body-position": [
        "error",
        "beside",
        {
          overrides: {
            do: "any",
            else: "any",
            if: "any",
            while: "below",
          },
        },
      ],
      "@stylistic/object-curly-newline": [
        "off", // TODO: incompatible with biome on empty object
        {
          ExportDeclaration: {
            minProperties: 7,
            multiline: true,
          },
          ObjectExpression: "always",
          ObjectPattern: {
            minProperties: 10,
            multiline: true,
          },
        },
      ],
      "@stylistic/object-curly-spacing": [
        "error",
        "always",
        {
          arraysInObjects: true,
          objectsInObjects: true,
        },
      ],
      "@stylistic/object-property-newline": [
        "error",
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      "@stylistic/one-var-declaration-per-line": "off",
      "@stylistic/operator-linebreak": [
        "error",
        "after",
        {
          overrides: {
            ":": "ignore",
            "?": "ignore",
            "||": "ignore",
          },
        },
      ],
      "@stylistic/padded-blocks": ["error", "never"],
      "@stylistic/padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          next: "function",
          prev: "function",
        },
        {
          blankLine: "always",
          next: "*",
          prev: ["const", "let", "var"],
        },
        {
          blankLine: "any",
          next: ["const", "let", "var"],
          prev: ["const", "let", "var"],
        },
        {
          blankLine: "always",
          next: ["multiline-const", "multiline-let", "multiline-var"],
          prev: ["multiline-const", "multiline-let", "multiline-var"],
        },
        {
          blankLine: "always",
          next: ["throw", "return"],
          prev: "*",
        },
        {
          blankLine: "always",
          next: "export",
          prev: "*",
        },
        {
          blankLine: "always",
          next: "const",
          prev: ["interface", "type"],
        },
        {
          blankLine: "always",
          next: ["if", "for", "class", "switch", "while", "with"],
          prev: "*",
        },
        {
          blankLine: "always",
          next: "*",
          prev: ["if", "for", "class", "switch", "while", "with"],
        },
        {
          blankLine: "always",
          next: ["interface", "type"],
          prev: "*",
        },
        {
          blankLine: "always",
          next: "function",
          prev: "function-overload",
        },
      ],
      "@stylistic/quote-props": "off",
      "@stylistic/quotes": [
        "error",
        "double",
        {
          avoidEscape: true,
        },
      ],
      "@stylistic/rest-spread-spacing": ["off", "never"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/semi-spacing": [
        "off",
        {
          after: true,
          before: false,
        },
      ],
      "@stylistic/semi-style": ["error", "last"],
      "@stylistic/space-before-blocks": ["off", "always"],
      "@stylistic/space-before-function-paren": [
        "off",
        {
          anonymous: "always",
          named: "never",
        },
      ],
      "@stylistic/space-in-parens": [
        "off",
        "always",
        {
          exceptions: ["empty"],
        },
      ],
      "@stylistic/space-infix-ops": "off",
      "@stylistic/space-unary-ops": [
        "off",
        {
          nonwords: false,
          overrides: {
            "++": false,
            new: false,
          },
          words: true,
        },
      ],
      "@stylistic/spaced-comment": [
        "off",
        "always",
        {
          block: {
            balanced: true,
          },
          exceptions: ["*", "!"],
        },
      ],
      "@stylistic/switch-colon-spacing": [
        "off",
        {
          after: true,
          before: false,
        },
      ],
      "@stylistic/template-curly-spacing": ["off", "never"],
      "@stylistic/template-tag-spacing": ["off", "always"],
      "@stylistic/type-annotation-spacing": [
        "error",
        {
          after: true,
          before: false,
          overrides: {
            arrow: {
              after: true,
              before: true,
            },
          },
        },
      ],
      "@stylistic/type-generic-spacing": "off",
      "@stylistic/wrap-iife": ["error", "outside"],
      "@stylistic/wrap-regex": "off",
      "@stylistic/yield-star-spacing": ["off", "both"],
      "@typescript-eslint/array-type": [
        "off",
        {
          default: "array-simple",
        },
      ],
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          minimumDescriptionLength: 5,
          "ts-check": false,
          "ts-expect-error": "allow-with-description",
          "ts-ignore": false,
          "ts-nocheck": false,
        },
      ],
      "@typescript-eslint/ban-types": [
        "off",
        {
          extendDefaults: true,
          types: {
            FC: "Use `const MyComponent = (props: Props): React.ReactElement` instead",
            FunctionComponent: "Use `const MyComponent = (props: Props): React.ReactElement` instead",
            "React.FC": "Use `const MyComponent = (props: Props): React.ReactElement` instead",
            "React.FunctionComponent": "Use `const MyComponent = (props: Props): React.ReactElement` instead",
            "React.SFC": "Use `const MyComponent = (props: Props): React.ReactElement` instead",
            SFC: "Use `const MyComponent = (props: Props): React.ReactElement` instead",
          },
        },
      ],
      "@typescript-eslint/brace-style": [
        "off",
        "1tbs",
        {
          allowSingleLine: true,
        },
      ],
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/comma-dangle": ["off", "only-multiline"],
      "@typescript-eslint/comma-spacing": [
        "off",
        {
          after: true,
          before: false,
        },
      ],
      "@typescript-eslint/consistent-indexed-object-style": "error",
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
          assertionStyle: "as",
          objectLiteralTypeAssertions: "allow-as-parameter",
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "separate-type-imports",
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/default-param-last": "off",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/func-call-spacing": ["off", "never"],
      "@typescript-eslint/indent": ["off", 2],
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/keyword-spacing": ["off"],
      "@typescript-eslint/lines-between-class-members": ["off"],
      "@typescript-eslint/member-delimiter-style": ["off"],
      "@typescript-eslint/method-signature-style": ["off", "method"],
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-array-constructor": "off",
      "@typescript-eslint/no-base-to-string": "off",
      "@typescript-eslint/no-confusing-non-null-assertion": "off",
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-duplicate-enum-values": "off",
      "@typescript-eslint/no-dynamic-delete": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-extra-semi": ["off"],
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-for-in-array": "off",
      "@typescript-eslint/no-implied-eval": "off",
      "@typescript-eslint/no-import-type-side-effects": "off",
      "@typescript-eslint/no-invalid-void-type": "off",
      "@typescript-eslint/no-loss-of-precision": "off",
      "@typescript-eslint/no-meaningless-void-operator": [
        "off",
        {
          checkNever: true,
        },
      ],
      "@typescript-eslint/no-misused-new": "off",
      "@typescript-eslint/no-misused-promises": [
        "off",
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "off",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-redeclare": "off",
      "@typescript-eslint/no-redundant-type-constituents": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-shadow": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-type-alias": ["off"],
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
      "@typescript-eslint/no-unnecessary-condition": [
        "off",
        {
          allowConstantLoopConditions: true,
        },
      ],
      "@typescript-eslint/no-unnecessary-qualifier": "off",
      "@typescript-eslint/no-unnecessary-type-arguments": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-declaration-merging": "off",
      "@typescript-eslint/no-unsafe-enum-comparison": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/non-nullable-type-assertion-style": "off",
      "@typescript-eslint/prefer-for-of": "off",
      "@typescript-eslint/prefer-includes": "off",
      "@typescript-eslint/prefer-literal-enum-member": "off",
      "@typescript-eslint/prefer-nullish-coalescing": [
        "error",
        {
          ignoreConditionalTests: true,
          ignorePrimitives: true,
        },
      ],
      "@typescript-eslint/prefer-optional-chain": "off",
      "@typescript-eslint/prefer-readonly": "off",
      "@typescript-eslint/prefer-reduce-type-parameter": "off",
      "@typescript-eslint/prefer-regexp-exec": "off",
      "@typescript-eslint/prefer-string-starts-ends-with": "off",
      "@typescript-eslint/prefer-ts-expect-error": "error",
      "@typescript-eslint/promise-function-async": "off",
      "@typescript-eslint/quotes": [
        "off",
        "single",
        {
          allowTemplateLiterals: true,
        },
      ],
      "@typescript-eslint/require-array-sort-compare": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/restrict-plus-operands": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowAny: true,
          allowBoolean: true,
          allowNullish: true,
          allowNumber: true,
          allowRegExp: true,
        },
      ],
      "@typescript-eslint/return-await": "off",
      "@typescript-eslint/semi": ["off"],
      "@typescript-eslint/space-infix-ops": ["off", { int32Hint: false }],
      "@typescript-eslint/switch-exhaustiveness-check": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/type-annotation-spacing": ["off"],
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/unified-signatures": "off",
      complexity: "off",
      "consistent-function-scoping": "off",
      "constructor-super": "off",
      curly: ["error", "all"],
      "drizzle/enforce-delete-with-where": ["error", { drizzleObjectName: ["db", "ctx.db"] }],
      "drizzle/enforce-update-with-where": ["error", { drizzleObjectName: ["db", "ctx.db"] }],
      "error-message": "off",
      "filename-case": "off",
      "for-direction": "off",
      "getter-return": "off",
      "import-style": "off",
      // @see https://github.com/un-ts/eslint-plugin-import-x
      "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import-x/default": "off",

      "import-x/export": "error",
      "import-x/first": "error",
      "import-x/namespace": "off",
      "import-x/newline-after-import": "error",
      "import-x/no-absolute-path": "error",
      "import-x/no-amd": "error",
      "import-x/no-cycle": [
        "error",
        {
          ignoreExternal: true,
          maxDepth: 3,
        },
      ],
      "import-x/no-default-export": "off",
      "import-x/no-duplicates": "error",
      "import-x/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true,
          optionalDependencies: false,
          peerDependencies: true,
        },
      ],
      "import-x/no-mutable-exports": "error",
      "import-x/no-named-as-default": "off",
      "import-x/no-named-as-default-member": "off",
      "import-x/no-named-default": "error",
      "import-x/no-named-export": "off",
      "import-x/no-relative-packages": "error",
      "import-x/no-self-import": "error",
      "import-x/no-unresolved": "off",
      "import-x/no-useless-path-segments": ["error", { commonjs: true }],
      "import-x/prefer-default-export": "off",
      // @see https://eslint.org/docs/latest/rules
      "no-abusive-eslint-disable": "off",
      "no-anonymous-default-export": "off",

      "no-array-reduce": "off",
      "no-async-promise-executor": "off",
      "no-await-in-promise-methods": "off",
      "no-case-declarations": "off",
      "no-class-assign": "off",
      "no-compare-neg-zero": "off",
      "no-cond-assign": "off",
      "no-console": [
        "error",
        {
          allow: ["warn", "error", "info", "trace"],
        },
      ],
      "no-const-assign": "off",
      "no-constant-binary-expression": "off",
      "no-constant-condition": "off",
      "no-control-regex": "off",
      "no-debugger": "off",
      "no-delete-var": "off",
      "no-document-cookie": "off",
      "no-dupe-args": "off",
      "no-dupe-class-members": "off",
      "no-dupe-else-if": "off",
      "no-dupe-keys": "off",
      "no-duplicate-case": "off",
      "no-empty": "off",
      "no-empty-character-class": "off",
      "no-empty-file": "off",
      "no-empty-pattern": "off",
      "no-empty-static-block": "off",
      "no-ex-assign": "off",
      "no-fallthrough": [
        "error",
        {
          commentPattern: ".*intentional fallthrough.*",
        },
      ],
      "no-func-assign": "off",
      "no-global-assign": "off",
      "no-import-assign": "off",
      "no-invalid-regexp": "off",
      "no-invalid-remove-event-listener": "off",
      "no-irregular-whitespace": "off",
      "no-keyword-prefix": "off",
      "no-lonely-if": "error",
      "no-loss-of-precision": "off",
      "no-misleading-character-class": "off",
      "no-new-native-nonconstructor": "off",
      "no-nonoctal-decimal-escape": "off",
      "no-obj-calls": "off",
      "no-object-as-default-parameter": "off",
      "no-octal": "off",
      "no-process-exit": "off",
      "no-prototype-builtins": "off",
      "no-redeclare": "off",
      // @see https://github.com/MelvinVermeer/eslint-plugin-no-relative-import-paths
      "no-relative-import-paths/no-relative-import-paths": [
        "error",
        {
          allowSameFolder: false,
          prefix: "~",
          rootDir: "src",
        },
      ],
      // @see https://eslint.org/docs/latest/rules
      "no-restricted-exports": [
        "error",
        {
          restrictedNamedExports: ["default", "then"],
        },
      ],

      "no-restricted-globals": [
        "error",
        {
          name: "isFinite",
          message: "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
        },
        {
          name: "isNaN",
          message: "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
        },
      ],

      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "process",
              importNames: ["env"],
              message: "Use `import { env } from '~/env'` instead to ensure validated types.",
            },
            {
              name: "react",
              importNames: ["default"],
              message: "Named imports should be used instead.",
            },
            {
              name: ".",
              message: "Use explicit import file.",
            },
            {
              name: "lodash",
              message: "Don't use lodash, use radash instead (in case you still need it, use lodash/{module} import).",
            },
          ],
        },
      ],
      "no-restricted-properties": [
        "warn",
        {
          message: "Use `import { env } from '~/env'` instead to ensure validated types.",
          object: "process",
          property: "env",
        },
        {
          message: "arguments.callee is deprecated",
          object: "arguments",
          property: "callee",
        },
        {
          message: "Please use Number.isFinite instead",
          object: "global",
          property: "isFinite",
        },
        {
          message: "Please use Number.isFinite instead",
          object: "self",
          property: "isFinite",
        },
        {
          message: "Please use Number.isFinite instead",
          object: "window",
          property: "isFinite",
        },
        {
          message: "Please use Number.isNaN instead",
          object: "global",
          property: "isNaN",
        },
        {
          message: "Please use Number.isNaN instead",
          object: "self",
          property: "isNaN",
        },
        {
          message: "Please use Number.isNaN instead",
          object: "window",
          property: "isNaN",
        },
        {
          message: "Use the exponentiation operator (**) instead.",
          object: "Math",
          property: "pow",
        },
      ],
      "no-restricted-syntax": [
        "error",
        {
          message: "potential circular dependency",
          selector: 'ImportDeclaration[source.value="."]',
        },
        // {
        //   message: "no let",
        //   selector: "VariableDeclaration[kind=let]",
        // },
        // {
        //   message: "no else",
        //   selector: "IfStatement[alternate]",
        // },
        // {
        //   message: "no optional",
        //   selector: "TSPropertySignature[optional=true]",
        // },
      ],
      "no-self-assign": "off",
      "no-setter-return": "off",
      "no-shadow-restricted-names": "off",
      "no-sparse-arrays": "off",
      "no-thenable": "off",
      "no-this-assignment": "off",
      "no-this-before-super": "off",
      "no-undef": "off",
      "no-unexpected-multiline": "off",
      "no-unnecessary-polyfills": "off",
      "no-unreachable": "off",
      "no-unsafe-finally": "off",
      "no-unsafe-negation": "off",
      "no-unsafe-optional-chaining": [
        "error",
        {
          disallowArithmeticOperators: true,
        },
      ],
      "no-unused-private-class-members": "off",
      "no-unused-properties": "off",
      "no-unused-vars": "off",
      "no-use-before-define": [
        "error",
        {
          allowNamedExports: false,
          classes: false,
          functions: false,
          variables: false,
        },
      ],
      "no-useless-backreference": "off",
      "no-useless-catch": "off",
      "no-useless-escape": "off",
      "no-useless-rename": [
        "error",
        {
          ignoreDestructuring: false,
          ignoreExport: false,
          ignoreImport: false,
        },
      ],
      "no-useless-switch-case": "off",
      "no-with": "off",
      // @see https://eslint-plugin-perfectionist.azat.io
      "perfectionist/sort-exports": [
        "warn",
        // alternative: eslint-plugin-sort
        {
          order: "asc",
          type: "natural",
        },
      ],
      "perfectionist/sort-imports": [
        "warn",
        {
          order: "asc",
          type: "natural",
          groups: [
            ["customTypes", "builtin-type", "type", "internal-type", "parent-type", "sibling-type", "index-type"],
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "side-effect",
            "object",
            "style",
            "unknown",
          ],
          "newlines-between": "always",
        },
      ],
      "perfectionist/sort-object-types": [
        "warn",
        // we just keep it in sync with
        // perfectionist/sort-objects
        {
          order: "asc",
          type: "natural",
          "custom-groups": {
            id: ["_", "id", "key"],
            type: ["order", "type", "kind"],
            meta: ["name", "meta", "slug", "title", "description"],
            bottom: ["createdAt", "updatedAt"],
            db: ["userId", "productId", "storeId", "createdById"],
            eslint: ["files", "extends"],
          },
          groups: ["id", "db", "eslint", "type", "meta", "unknown", "bottom"],
        },
      ],
      "perfectionist/sort-objects": [
        "warn",
        // we just keep it in sync with
        // perfectionist/sort-object-types
        {
          order: "asc",
          type: "natural",
          "custom-groups": {
            id: ["_", "id", "key"],
            type: ["order", "type", "kind"],
            meta: ["name", "meta", "slug", "title", "description"],
            bottom: ["createdAt", "updatedAt"],
            db: ["userId", "productId", "storeId", "createdById"],
            eslint: ["files", "extends"],
          },
          groups: ["id", "db", "eslint", "type", "meta", "unknown", "bottom"],
        },
      ],
      "perfectionist/sort-union-types": [
        "warn",
        {
          order: "asc",
          type: "natural",
        },
      ],
      "prefer-blob-reading-methods": "off",
      "prefer-const": [
        "error",
        {
          destructuring: "any",
          ignoreReadBeforeAssign: true,
        },
      ],
      "prefer-destructuring": [
        "off",
        {
          AssignmentExpression: {
            array: true,
            object: false,
          },
          VariableDeclarator: {
            array: false,
            object: true,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      "prefer-dom-node-text-content": "off",
      "prefer-event-target": "off",
      "prefer-logical-operator-over-ternary": "off",
      "prefer-template": "error",
      "prefer-top-level-await": "off",
      "prevent-abbreviations": "off",
      // @see https://github.com/jsx-eslint/eslint-plugin-react
      "react/jsx-no-useless-fragment": "off",
      "react/no-unescaped-entities": "off",

      // @see https://npmjs.com/package/eslint-plugin-react-compiler
      "react-compiler/react-compiler": "error",

      // @see https://npmjs.com/package/eslint-plugin-react-hooks
      // TODO: fix errors in eslint console
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/rules-of-hooks": "off",

      // @see https://github.com/ArnaudBarre/eslint-plugin-react-refresh
      "react-refresh/only-export-components": "off",

      // @see https://github.com/mskelton/eslint-plugin-sort#list-of-supported-rules
      "sort/destructuring-properties": "off",
      "sort/export-members": "off",
      "sort/exports": [
        "off",
        {
          caseSensitive: false,
          groups: [
            { order: 50, type: "default" },
            { order: 10, type: "sourceless" },
            { order: 30, regex: "^~" },
            { order: 20, type: "dependency" },
            { order: 40, type: "other" },
          ],
          natural: true,
          typeOrder: "first",
        },
      ],
      "sort/import-members": "off",
      "sort/imports": "off",
      "sort/object-properties": "off",
      "sort/string-enums": "error",
      "sort/string-unions": "error",
      "sort/type-properties": "off",

      // @see https://github.com/jrdrg/eslint-plugin-sort-exports#usage
      "sort-exports/sort-exports": [
        "off",
        {
          disableAutofixer: true,
          ignoreCase: true,
          sortDir: "asc",
          sortExportKindFirst: "type",
        },
      ],

      // @see https://github.com/sindresorhus/eslint-plugin-unicorn
      "unicorn/catch-error-name": ["off", { name: "e" }],
      "unicorn/consistent-destructuring": "off",
      "unicorn/consistent-function-scoping": "off",
      "unicorn/empty-brace-spaces": "off",
      "unicorn/explicit-length-check": "off",
      "unicorn/filename-case": "off",
      "unicorn/no-abusive-eslint-disable": "off",
      "unicorn/no-anonymous-default-export": "off",
      "unicorn/no-array-callback-reference": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-await-expression-member": "off",
      "unicorn/no-empty-file": "off",
      "unicorn/no-negated-condition": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/no-null": "off",
      "unicorn/no-object-as-default-parameter": "off",
      "unicorn/no-process-exit": "off",
      "unicorn/no-typeof-undefined": "off",
      "unicorn/no-useless-switch-case": "off",
      "unicorn/numeric-separators-style": [
        "off",
        {
          onlyIfContainsSeparator: true,
        },
      ],
      "unicorn/prefer-array-flat-map": "off",
      "unicorn/prefer-array-some": "off",
      "unicorn/prefer-code-point": "off",
      "unicorn/prefer-date-now": "off",
      "unicorn/prefer-export-from": "off",
      "unicorn/prefer-logical-operator-over-ternary": "off",
      "unicorn/prefer-math-trunc": "off",
      "unicorn/prefer-module": "off",
      "unicorn/prefer-native-coercion-functions": "off",
      "unicorn/prefer-node-protocol": "off",
      "unicorn/prefer-number-properties": "off",
      "unicorn/prefer-optional-catch-binding": "off",
      "unicorn/prefer-set-has": "off",
      "unicorn/prefer-spread": "off",
      "unicorn/prefer-string-replace-all": "off",
      "unicorn/prefer-string-slice": "off",
      "unicorn/prefer-switch": "off",
      "unicorn/prefer-ternary": "off",
      "unicorn/prefer-top-level-await": "off",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/switch-case-braces": ["off", "avoid"],
      "unicorn/text-encoding-identifier-case": "off",
      "use-isnan": "off",
      "valid-typeof": "off",
      yoda: ["error", "never", { onlyEquality: true }],
    },
    settings: {
      // @see https://github.com/jsx-eslint/eslint-plugin-react#configuration
      formComponents: ["Form"],

      // @see https://github.com/un-ts/eslint-plugin-import-x
      "import-x/internal-regex": "^~/",

      // @see https://github.com/jsx-eslint/eslint-plugin-react#configuration
      linkComponents: [{ name: "Link", linkAttribute: ["href"] }],
      react: { version: "detect" },

      // @see https://eslint-react.xyz/docs/configuration
      reactOptions: {
        additionalHooks: { useLayoutEffect: ["useIsomorphicLayoutEffect"] },
        importSource: "react",
        jsxPragma: "createElement",
        jsxPragmaFrag: "Fragment",
        version: "detect",
      },
    },
  },
  {
    ...mdx.flat,
    files: ["**/*.mdx"],
    name: "mdxFlat",
    processor: mdx.createRemarkProcessor({
      languageMapper: {},
      lintCodeBlocks: true,
    }),
    rules: {
      ...mdx.flat.rules,
      "no-unused-expressions": "off",
    },
  },
  {
    ...mdx.flatCodeBlocks,
    files: ["**/*.mdx"],
    name: "mdxFlatCodeBlocks",
    rules: {
      ...mdx.flatCodeBlocks.rules,
      "no-unused-expressions": "off",
    },
  },
  {
    ...json.configs["recommended"],
    files: ["**/*.json"],
    plugins: { json: json },
    processor: "json/json",
    rules: {
      // @see https://www.npmjs.com/package/eslint-plugin-json
      "json/*": ["error", { allowComments: false }],
    },
  },
  ...compat.env({
    es2024: true,
    node: true,
  }),
];

export default tseslint.config(...config);
