- npx create-react-app react_hooks_ts_jira --template typescript
- yarn add --dev --exact prettier  格式化插件
    // 插件配置
    https://prettier.io/docs/en/install.html 网址
    - npx mrm@2 lint-staged  配置prettier 
    - yarn add eslint-config-prettier -D 配置

- json-server
    yarn add json-server
    配置：package.json文件script
        "json-server": "json-server __json_server_mock__/db.json --watch"
- 配置接口
    创建 .env 和.env.development 文件
   npm start的情况下执行  REACT_APP_API_URL = http://localhost:3001 
   npm run build 的情况下执行 REACT_APP_API_URL = http://online.com

- npm i --save-dev @types/qs   ts版的qs

- Custom Hook 提取并复用组件代码
    useMount和useDebounce
    写custom hooks的时候要用use开头
- 使用js大部分报错都是在运行时（runtime）才会发现 ->弱类型
  ts就会在写代码（静态代码）的时候就会报错 ->强类型