---
author: 星火燎原@vxhly
title: css 和 css3 实用例子
categories: [web]
tags: [Code, CSS]
date: 2019-08-06 17:03:51
---

::: tip
收集 css3 实用样式表, 内包含 less 和 sass 实用工具, 更多的例子可以前往 [CSS Tricks](https://qishaoxuan.github.io/css_tricks/)
:::
<!-- more -->


## 三角形

### 上三角形

``` css
.up {
    width: 0;
    height: 0;
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
    border-bottom: 50px solid #00adb5;
}
```

显示效果

<style>.up {width:0; height:0; 	border-right:50px solid transparent; 	border-left:50px solid transparent; 	border-bottom:50px solid #00adb5; }</style>

<div class="up"></div>

### 下三角形

``` css
.down {
    width: 0;
    height: 0;
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
    border-top: 50px solid #00adb5;
}
```

显示效果

<style>.down {width:0; height:0; 	border-right:50px solid transparent; 	border-left:50px solid transparent; 	border-top:50px solid #00adb5; }</style>

<div class="down"></div>

### 左三角形

``` css
.left {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-right: 50px solid #00adb5;
}
```

显示效果

<style>.left {width:0; height:0; 	border-top:50px solid transparent; 	border-bottom:50px solid transparent; 	border-right:50px solid #00adb5; }</style>

<div class="left"></div>

### 右三角形

``` css
.right {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-left: 50px solid #00adb5;
}
```

显示效果

<style>.right {width:0; height:0; 	border-top:50px solid transparent; 	border-bottom:50px solid transparent; 	border-left:50px solid #00adb5; }</style>

<div class="right"></div>

## 箭头

### 上箭头

``` css
.top-arrow {
    position: relative;
    height: 20px;
}

.top-arrow:before,
.top-arrow:after {
    position: absolute;
    content: '';
    border-top: 10px transparent dashed;
    border-left: 10px transparent dashed;
    border-right: 10px transparent dashed;
    border-bottom: 10px #fff solid;
}

.top-arrow:before {
    border-bottom: 10px #00adb5 solid;
}

.top-arrow:after {
    top: 1px;
    border-bottom: 10px #fff solid;
}
```

显示效果

<style>.top-arrow { position: relative; height: 20px; }.top-arrow:before, .top-arrow:after { position: absolute; content: ''; border-top: 10px transparent dashed; border-left: 10px transparent dashed; border-right: 10px transparent dashed; border-bottom: 10px #fff solid; }.top-arrow:before { border-bottom: 10px  #00adb5 solid; }.top-arrow:after { top: 1px; border-bottom: 10px #fff solid; }</style>

<div class="top-arrow"></div>

### 左箭头

``` css
.left-arrow {
    position: relative;
    height: 20px;
}

.left-arrow:before,
.left-arrow:after {
    position: absolute;
    content: '';
    border-top: 10px transparent dashed;
    border-left: 10px transparent dashed;
    border-bottom: 10px transparent dashed;
    border-right: 10px #fff solid;
}

.left-arrow:before {
    border-right: 10px #00adb5 solid;
}

.left-arrow:after {
    left: 1px;
    border-right: 10px #fff solid;
}
```

显示效果

<style>.left-arrow{ position: relative; height: 20px; }.left-arrow:before, .left-arrow:after{position: absolute; content: ''; border-top: 10px transparent dashed; border-left: 10px transparent dashed; border-bottom: 10px transparent dashed; border-right: 10px #fff solid; }.left-arrow:before{ border-right: 10px  #00adb5 solid; }.left-arrow:after{ left: 1px; border-right: 10px #ff solid; }</style>

<div class="left-arrow"></div>

