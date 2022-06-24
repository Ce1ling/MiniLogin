const { override, fixBabelImports, addLessLoader, adjustStyleLoaders, addPostcssPlugins } = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',      // 对哪个库进行按需引入
    libraryDirectory: 'es',   // 样式模块作为什么处理
    style: true,              // 处理原文件样式
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,                       // 允许js修改antd的less文件中的变量
      modifyVars: { '@brand-primary': '#1677ff' },
    }
  }),
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  }),
  addPostcssPlugins([require("postcss-pxtorem")({ remUnit: 37.5 })])   // 37.5是设计稿计算出的根字体的值
);