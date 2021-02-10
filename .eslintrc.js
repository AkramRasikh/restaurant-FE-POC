module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
  },
  globals: {
    exports: true,
    module: true,
    require: true,
    graphql: false,
    process: false,
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2019,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:jest/recommended",
    "eslint-config-prettier",
  ],
}
