## 目录结构
```
.
├── build                  // 默认的打包构建目的文件夹
├── public                 // 静态文件目录
├── src/                   // 代码资源文件目录
    ├── actions/           // Redux action 相关的文件目录
    ├── assets/            // 资源文件夹，用来存放图标、字体等资源文件
    ├── components/        // 组件目录
    ├── constant/          // 统一存放一些常量的目录
    ├── pages/             // 存放页面组件，通常是路由对应的页面组件
    ├── reducers/          // Redux reducers
    ├── services/          // 跟服务器交互相关的文件目录
    ├── store/             // Redux store
    ├── styles/            // 样式文件目录
    index.css              // 全局样式文件，目前主要用来清除各浏览器的默认样式
    index.js               // 应用入口
.eslintrc                  // eslint 的配置文件
package.json

```

## Notes
- 项目的架子是用 [create-react-app](https://github.com/facebook/create-react-app) 脚手架生成的，在此基础上加入了 Redux、React Router、Redux Thunk 等三方库  
- 新建的文件请按照上面目录结构的要求存放  
- 项目支持 sass 和 css module。如果需要使用 css module，css 文件需要按照 XXX.module.css 格式命名  

<br />
<br />
This project was bootstrapped with [Create React Index](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React Index documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web Index

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
