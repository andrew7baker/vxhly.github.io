---
author: 星火燎原@vxhly
title: 初学 electron-vue
categories: [electron]
tags: [Electron, Vue, Node.js] 
date: 2019-11-05 15:29:47
---

::: tip 前言
记录学习 electron-vue 时遇到的一些坑, 从报错出发找寻解决方案
:::
<!-- more -->

## 坑一

一般的高版本的 node，大于12的版本时候。初步运行 electron-vue 项目时候会报错！

::: danger 报错特征
ERROR in Template execution failed: ReferenceError: process is not defined

ERROR in   ReferenceError: process is not defined
  
  - index.ejs:102 
    /Users/codeman/github/my-project/src/index.ejs:102:2
  
  - index.ejs:107 module.exports
    /Users/codeman/github/my-project/src/index.ejs:107:3
  
  - index.js:284 
    [my-project]/[html-webpack-plugin]/index.js:284:18
:::

### 解决方案

修改 `.electron-vue/webpack.renderer.config.js` 和 `.electron-vue/webpack.web.config.js` 如下：

`.electron-vue/webpack.renderer.config.js`

``` javascript
new HtmlWebpackPlugin({
  filename: 'index.html',
  template: path.resolve(__dirname, '../src/index.ejs'),
  minify: {
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeComments: true
  },
  templateParameters(compilation, assets, options) {
    return {
      compilation: compilation,
      webpack: compilation.getStats().toJson(),
      webpackConfig: compilation.options,
      htmlWebpackPlugin: {
        files: assets,
        options: options
      },
      process,
    };
  },
  nodeModules: process.env.NODE_ENV !== 'production'
    ? path.resolve(__dirname, '../node_modules')
    : false
})
```

`.electron-vue/webpack.web.config.js`

``` javascript
new HtmlWebpackPlugin({
  filename: 'index.html',
  template: path.resolve(__dirname, '../src/index.ejs'),
  templateParameters(compilation, assets, options) {
    return {
      compilation: compilation,
      webpack: compilation.getStats().toJson(),
      webpackConfig: compilation.options,
      htmlWebpackPlugin: {
        files: assets,
        options: options
      },
      process,
    };
  },
  minify: {
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeComments: true
  },
  nodeModules: false
})
```

## 坑二

在初步使用 `electron-builder` 编译 electron-vue 项目时候会报错（PS：一般出现在 MacOS 下）

::: danger
Error: Exit code: 2. Command failed: /usr/bin/perl /private/var/folders/mj/n34f_bp95zq2_1fwll3bq70m0000gn/T/t-51hskU/1-dmgProperties.pl
Can't locate Mac/Memory.pm in @INC (you may need to install the Mac::Memory module) (@INC contains: /Library/Perl/5.18/darwin-thread-multi-2level /Library/Perl/5.18 /Network/Library/Perl/5.18/darwin-thread-multi-2level /Network/Library/Perl/5.18 /Library/Perl/Updates/5.18.4 /System/Library/Perl/5.18/darwin-thread-multi-2level /System/Library/Perl/5.18 /System/Library/Perl/Extras/5.18/darwin-thread-multi-2level /System/Library/Perl/Extras/5.18 .) at /private/var/folders/mj/n34f_bp95zq2_1fwll3bq70m0000gn/T/t-51hskU/1-dmgProperties.pl line 4.
BEGIN failed--compilation aborted at /private/var/folders/mj/n34f_bp95zq2_1fwll3bq70m0000gn/T/t-51hskU/1-dmgProperties.pl line 4.
:::

### 解决方案

升级你的 `electron-builder` 依赖包

``` bash
npm install electron-builder@latest -D
```
