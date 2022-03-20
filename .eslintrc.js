module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "react-app",
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "airbnb-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "ignorePatterns": [".eslintrc.*", "src/serviceWorker.ts"],
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                "checksVoidReturn": {
                    "arguments": false,
                    "attributes": false
                }
            }
        ], // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-promises.md#checksvoidreturn
        "no-param-reassign": ["error", { props: true, ignorePropertyModificationsFor: ["state"] }], // https://redux-toolkit.js.org/usage/immer-reducers#linting-state-mutations
        "spaced-comment": ["error", "always", { "markers": ["/ <reference"] }],
        "import/prefer-default-export": "off",
        "react/jsx-props-no-spreading": ["off"],
        "react/function-component-definition": ["off"],
        "react/button-has-type": ["off"],
        "no-promise-executor-return": ["off"],
    }
}
