import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked"
  ),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["**/*.mjs"],
    ...compat.config({
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: true,
      },
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
          },
        ],
        "import/order": [
          "warn",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
              "object",
              "unknown",
            ],
            pathGroups: [
              {
                pattern: "{react,react/**,next,next/**}",
                group: "external",
                position: "before",
              },
              {
                pattern: "motion/**",
                group: "external",
                patternOptions: { matchBase: true },
                position: "before",
              },
              {
                pattern: "@lib/**",
                group: "internal",
                patternOptions: { matchBase: true },
              },
              {
                pattern: "react-icons/**",
                group: "object",
                patternOptions: { matchBase: true },
              },
              {
                pattern: "*.{css,scss}",
                group: "unknown",
                patternOptions: { matchBase: true },
                position: "after",
              },
            ],
            pathGroupsExcludedImportTypes: [
              "react",
              "next",
              "motion",
              "react-icons",
            ],
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            ignoreRestSiblings: true,
            argsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            varsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksVoidReturn: {
              attributes: false,
            },
          },
        ],
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/no-import-type-side-effects": "error",
        // TODO: change to error
        // currently disabled due to a large number of errors in the existing code
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unsafe-assignment": "warn",
        "@typescript-eslint/no-unsafe-member-access": "warn",
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/no-unsafe-argument": "warn",
        "@typescript-eslint/no-unsafe-return": "warn",
      },
    })[0],
  },
];

export default eslintConfig;
