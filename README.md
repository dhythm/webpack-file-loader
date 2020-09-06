# webpack-file-loader
## Installation
```
touch README.md .gitignore

npm init -y
npm i react react-dom

npm i -D @babel/core @babel/cli @babel/preset-env @babel/preset-react
touch .babelrc

npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader url-loader file-loader dotenv-webpack tsconfig-paths-webpack-plugin
touch webpack.config.js

npm i -D typescript ts-loader typesync
npx tsc --init

npm i -D eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-loader eslint-plugin-import eslint-plugin-unused-imports
npx eslint --init

touch .prettierrc
npm i -D husky lint-staged concurrently

npx sb init
rm -rf stories
touch .stories/webpack.config.js

mkdir .vscode
touch .vscode/settings.json

npm install

mkdir public src
touch public/index.html

touch .env

mkdir -p src/app/{pages,assets,lib}
mkdir -p src/core/{components,assets,lib}
touch src/{index,App}.tsx
```