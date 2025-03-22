/** @type {import("eslint").Linter.Config} */
// {
//   "extends": "next/core-web-vitals"
// }
const config = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": true
  },
  "plugins": [
    // @ts-ignore
    "@typescript-eslint",
    // @ts-ignore
    // "drizzle"
  ],
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked"
  ],
  "rules": {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-explicit-any": "warn", // or "error"
    "@typescript-eslint/no-unsafe-assignment": 'warn',
    "@typescript-eslint/no-unsafe-member-access": 'warn',
    "@typescript-eslint/no-unsafe-call": 'warn',
    "@typescript-eslint/no-unsafe-return": 'warn',
    "prefer-const": "warn", // or "error"
    "@typescript-eslint/no-redundant-type-constituents": 'warn',
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        "prefer": "type-imports",
        "fixStyle": "inline-type-imports"
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": {
          "attributes": false
        }
      }
    ],
    // "drizzle/enforce-delete-with-where": [
    //   "error",
    //   {
    //     "drizzleObjectName": [
    //       "db",
    //       "ctx.db"
    //     ]
    //   }
    // ],
    // "drizzle/enforce-update-with-where": [
    //   "error",
    //   {
    //     "drizzleObjectName": [
    //       "db",
    //       "ctx.db"
    //     ]
    //   }
    // ]
  }
}
module.exports = config;