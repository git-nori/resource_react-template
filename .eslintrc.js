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
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
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
    "ignorePatterns": [".eslintrc.*"],
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
