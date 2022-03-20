1. redux-toolkitのプロジェクト作成
```
$ npx create-react-app resource_react-template --template redux-typescript
```
2. lintの生成
   1. `package.json`の`react-app`をlintファイルのextendsに追加
   ```
    "eslintConfig": {
        "extends": "react-app"
    },
   ```
```
$ npx eslint --init
```
3. airbnbのlint設定の追加
```
$ npm i -D eslint-config-airbnb eslint-config-airbnb-typescript
```
