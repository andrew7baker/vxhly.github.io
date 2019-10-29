(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{504:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),a("p",[s._v("本文主要介绍如何使用 Gulp.js, 来帮助你构建一个自动化的前端开发流程。总结并归类自身使用中所遇到的方法、问题, 便于新人上手和理解, 同时也作为一份 Gulp 参考文档来使用, 让你对 Gulp 有个更深入的了解")])]),s._v(" "),a("h2",{attrs:{id:"gulp-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gulp-是什么"}},[s._v("#")]),s._v(" Gulp 是什么")]),s._v(" "),a("p",[s._v("Gulp 是基于 "),a("code",[s._v("Node.js")]),s._v(" 的一个构建工具（自动任务运行器）, 开发者可以使用它构建自动化工作流程（前端集成开发环境）。一些常见、重复的任务, 例如: 网页自动刷新、CSS 预处理、代码检测、压缩图片、等等, 只需用简单的命令就能全部完成。使用它, 可以简化工作, 让你把重点放在功能开发上；同时减少人为失误, 提高开发效率和项目质量, 让专注更为专注。如果你之前接触过 Grunt, 那上手 Gulp 就会觉得非常容易理解。")]),s._v(" "),a("h2",{attrs:{id:"为什么使用-gulp-而不使用-grunt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用-gulp-而不使用-grunt"}},[s._v("#")]),s._v(" 为什么使用 Gulp 而不使用 Grunt")]),s._v(" "),a("p",[s._v("构建前端自动化的工具有很多, 如: "),a("code",[s._v("Grunt")]),s._v(" , "),a("code",[s._v("Brunch")]),s._v(" , "),a("code",[s._v("Broccoli")]),s._v(" 等, 而目前过内最流行的属于 Grunt, 之前我也在用使用, 那为什么选择 Gulp 来代替 Grunt？")]),s._v(" "),a("p",[s._v("简单的总结一下, 有三点:")]),s._v(" "),a("ul",[a("li",[s._v("简洁: Gulp 侧重 "),a("code",[s._v("“代码优于配置”(code over configuration)")]),s._v(" 。最直观的感受, 更为简单和清晰, 不需要像 Grunt 一样写一堆庞大的配置文件。")]),s._v(" "),a("li",[s._v("高效: Gulp 基于 "),a("code",[s._v("Node Streams（流")]),s._v(" ）来构建任务, 避免磁盘反复 "),a("code",[s._v("I/O（读取/写入）")]),s._v(" 。每个任务都是单独执行（坚持做一件事并且做好它）, 这使得它速度更快、更为纯粹。")]),s._v(" "),a("li",[s._v("易学: Gulp 核心 API 只有 4 个。简洁的 API 易于上手, 学习过程比较平滑。")])]),s._v(" "),a("h2",{attrs:{id:"gulp-核心-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gulp-核心-api"}},[s._v("#")]),s._v(" Gulp 核心 API")]),s._v(" "),a("p",[s._v("Gulp 的核心 API 只有 4 个: "),a("code",[s._v("src")]),s._v(" 、 "),a("code",[s._v("dest")]),s._v(" 、 "),a("code",[s._v("task")]),s._v(" 、 "),a("code",[s._v("watch")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("gulp.src(globs[, options])")]),s._v(" => 指明源文件路径。"),a("strong",[s._v("globs")]),s._v(": 路径模式匹配; "),a("strong",[s._v("options")]),s._v(": 可选参数；")]),s._v(" "),a("li",[a("code",[s._v("gulp.dest(path[, options])")]),s._v(" => 指明处理后的文件输出路径。"),a("strong",[s._v("path")]),s._v(": 路径（一个任务可以有多个输出路径）；"),a("strong",[s._v("options")]),s._v(": 可选参数；")]),s._v(" "),a("li",[a("code",[s._v("gulp.task(name[, deps], fn)")]),s._v(" => 注册任务。"),a("strong",[s._v("name")]),s._v(": 任务名称（通过 gulp name 来执行这个任务）; "),a("strong",[s._v("deps")]),s._v(": 可选的数组, 在本任务运行中所需要所依赖的其他任务（当前任务在依赖任务执行完毕后才会执行）; "),a("strong",[s._v("fn")]),s._v(": 任务函数（function 方法）；")]),s._v(" "),a("li",[a("code",[s._v("gulp.watch(glob [, opts], tasks)")]),s._v(" => 监视文件的变化并运行相应的任务。"),a("strong",[s._v("glob")]),s._v(": 路径模式匹配; "),a("strong",[s._v("opts")]),s._v(": 可以选配置对象; "),a("strong",[s._v("taks")]),s._v(": 执行的任务；")])]),s._v(" "),a("p",[a("router-link",{attrs:{to:"//github.com/gulpjs/gulp/blob/master/docs/API.html"}},[s._v("API 帮助文档")])],1),s._v(" "),a("h2",{attrs:{id:"安装-gulp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-gulp"}},[s._v("#")]),s._v(" 安装 Gulp")]),s._v(" "),a("p",[s._v("安装 Gulp 之前要确定系统中安装了 Node.js, 有了之后只需创建一个工作目录, 以下操作均在工作目录下执行。")]),s._v(" "),a("h3",{attrs:{id:"全局安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局安装"}},[s._v("#")]),s._v(" 全局安装")]),s._v(" "),a("p",[s._v("深入设置任务之前, 需先安装 gulp:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gulp -g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这会将 gulp 安装到全域环境下, 让你可以存取 gulp 的 CLI。")]),s._v(" "),a("h3",{attrs:{id:"本地安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地安装"}},[s._v("#")]),s._v(" 本地安装")]),s._v(" "),a("p",[s._v("接着, 需要在本地的工在目录进行安装。切换至你的工作目录, 执行以下命令（当然执行之前要先确定该目录下有 "),a("code",[s._v("package.json")]),s._v(" 文件, 如果没有可以通过 "),a("code",[s._v("npm init")]),s._v(" 进行创建）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gulp --save-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上述指令将 gulp 安装到本地的工作目录, 并纪录于 "),a("code",[s._v("package.json")]),s._v(" 中的 "),a("code",[s._v("devDependencies")]),s._v(" 选项内。")]),s._v(" "),a("h2",{attrs:{id:"安装-gulp-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-gulp-插件"}},[s._v("#")]),s._v(" 安装 Gulp 插件")]),s._v(" "),a("h3",{attrs:{id:"推荐插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐插件"}},[s._v("#")]),s._v(" 推荐插件")]),s._v(" "),a("ul",[a("li",[s._v("静态服务器 ("),a("a",{attrs:{href:"//github.com/schickling/gulp-webserver"}},[s._v("gulp-webserver")]),s._v(")")]),s._v(" "),a("li",[s._v("网页自动刷新 ([gulp-livereload]["),a("a",{attrs:{href:"https://github.com/vohof/gulp-livereload",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/vohof/gulp-livereload"),a("OutboundLink")],1),s._v("])")]),s._v(" "),a("li",[s._v("编译 "),a("strong",[s._v("Sass")]),s._v(" ("),a("a",{attrs:{href:"//github.com/sindresorhus/gulp-ruby-sass"}},[s._v("gulp-ruby-sass")]),s._v(")")]),s._v(" "),a("li",[a("strong",[s._v("Autoprefixer")]),s._v(" ("),a("a",{attrs:{href:"//github.com/Metrime/gulp-autoprefixer"}},[s._v("gulp-autoprefixer")]),s._v(")")]),s._v(" "),a("li",[s._v("缩小化(minify) "),a("strong",[s._v("CSS")]),s._v(" ("),a("a",{attrs:{href:"//github.com/jonathanepollack/gulp-minify-css"}},[s._v("gulp-minify-css")]),s._v(")")]),s._v(" "),a("li",[a("strong",[s._v("JSHint")]),s._v(" ("),a("a",{attrs:{href:"//github.com/wearefractal/gulp-jshint"}},[s._v("gulp-jshint")]),s._v(")")]),s._v(" "),a("li",[s._v("拼接 ("),a("a",{attrs:{href:"//github.com/wearefractal/gulp-concat"}},[s._v("gulp-concat")]),s._v(")")]),s._v(" "),a("li",[s._v("丑化(Uglify) ("),a("a",{attrs:{href:"//github.com/terinjokes/gulp-uglify"}},[s._v("gulp-uglify")]),s._v(")")]),s._v(" "),a("li",[s._v("图片压缩 ("),a("a",{attrs:{href:"//github.com/sindresorhus/gulp-imagemin"}},[s._v("gulp-imagemin")]),s._v(")")]),s._v(" "),a("li",[s._v("即时重整(LiveReload) ("),a("a",{attrs:{href:"//github.com/vohof/gulp-livereload"}},[s._v("gulp-livereload")]),s._v(")")]),s._v(" "),a("li",[s._v("清理档案 ("),a("a",{attrs:{href:"//github.com/peter-vilja/gulp-clean"}},[s._v("gulp-clean")]),s._v(")")]),s._v(" "),a("li",[s._v("图片快取, 只有更改过得图片会进行压缩 ("),a("router-link",{attrs:{to:"//github.com/jgable/gulp-cache/"}},[s._v("gulp-cache")]),s._v(")")],1),s._v(" "),a("li",[s._v("更动通知 ("),a("a",{attrs:{href:"//github.com/mikaelbr/gulp-notify"}},[s._v("gulp-notify")]),s._v(")")])]),s._v(" "),a("h3",{attrs:{id:"通过-npm-进行安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-npm-进行安装"}},[s._v("#")]),s._v(" 通过 npm 进行安装")]),s._v(" "),a("p",[a("code",[s._v("Install Format:")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Module_Name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" --save-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"gulp-任务配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gulp-任务配置"}},[s._v("#")]),s._v(" Gulp 任务配置")]),s._v(" "),a("h3",{attrs:{id:"创建-gulpfile-js-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-gulpfile-js-文件"}},[s._v("#")]),s._v(" 创建 gulpfile.js 文件")]),s._v(" "),a("p",[s._v("在项目根目录中, 创建 "),a("code",[s._v("gulpfile.js")]),s._v(" 文件, 用来配置和定义任务（ "),a("code",[s._v("task")]),s._v(" ）。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" gulpfile.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"我的安装插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我的安装插件"}},[s._v("#")]),s._v(" 我的安装插件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gulp --save-dev               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基础库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gulp-livereload --save-dev    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网页自动刷新")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gulp-webserver --save-dev     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地服务器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gulp-notify --save-dev        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"我的-gulpfile-js-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我的-gulpfile-js-配置"}},[s._v("#")]),s._v(" 我的 gulpfile.js 配置")]),s._v(" "),a("p",[s._v("打开 "),a("code",[s._v("gulpfile.js")]),s._v(" 文件, 填写相关配置。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引入 gulp")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" gulp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gulp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 基础库")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 引入 gulp 插件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" livereload "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gulp-livereload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 网页自动刷新（服务器控制客户端同步刷新）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" webserver "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gulp-webserver"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 本地服务器")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注册任务")]),s._v("\ngulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("task")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webserver"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    gulp\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务器目录（./ 代表根目录）")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("webserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 运行 gulp-webserver")]),s._v("\n                livereload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用 LiveReload")]),s._v("\n                open"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 服务器启动时自动打开网页")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 监听任务")]),s._v("\ngulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("task")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"watch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    gulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("watch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 监听根目录下所有 .html 文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认任务")]),s._v("\ngulp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("task")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"webserver"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"watch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);