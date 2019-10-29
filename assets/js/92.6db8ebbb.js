(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{541:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("前言")]),t._v(" "),a("p",[t._v("BOM (Browser Object Model) 是指浏览器对象模型, 是用于描述这种对象与对象之间层次关系的模型")])]),t._v(" "),a("h2",{attrs:{id:"bom-的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bom-的定义"}},[t._v("#")]),t._v(" BOM 的定义")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("BOM")]),t._v(" 是 "),a("code",[t._v("browser object model")]),t._v(" 的缩写, 简称浏览器对象模型")]),t._v(" "),a("li",[a("code",[t._v("BOM")]),t._v(" 提供了独立于内容而与浏览器窗口进行交互的对象")]),t._v(" "),a("li",[t._v("由于 "),a("code",[t._v("BOM")]),t._v(" 主要用于管理窗口与窗口之间的通讯, 因此其核心对象是 "),a("code",[t._v("window")])]),t._v(" "),a("li",[a("code",[t._v("BOM")]),t._v(" 由一系列相关的对象构成, 并且每个对象都提供了很多方法与属性")]),t._v(" "),a("li",[a("code",[t._v("BOM")]),t._v(" 缺乏标准, "),a("code",[t._v("JavaScript")]),t._v(" 语法的标准化组织是 "),a("code",[t._v("ECMA")]),t._v(" , "),a("code",[t._v("DOM")]),t._v(" 的标准化组织是 "),a("code",[t._v("W3C")])]),t._v(" "),a("li",[a("code",[t._v("BOM")]),t._v(" 最初是 "),a("code",[t._v("Netscape")]),t._v(" 浏览器标准的一部分")])]),t._v(" "),a("h3",{attrs:{id:"bom-的结构图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bom-的结构图"}},[t._v("#")]),t._v(" BOM 的结构图")]),t._v(" "),a("p",[t._v("在线查看 "),a("a",{attrs:{href:"http://oss-blog.test.upcdn.net/browser-object-model.jpg?attname=",target:"_blank",rel:"noopener noreferrer"}},[t._v("browser-object-model.jpg"),a("OutboundLink")],1),a("br"),t._v("\n请下载查看 "),a("a",{attrs:{href:"http://oss-blog.test.upcdn.net/browser-object-model.jpg?attname=",target:"_blank",rel:"noopener noreferrer"}},[t._v("browser-object-model.jpg"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"bom-和-dom-的不同之处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bom-和-dom-的不同之处"}},[t._v("#")]),t._v(" BOM 和 DOM 的不同之处")]),t._v(" "),a("h1",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("BOM")]),t._v(" 即浏览器对象模型, 主要用了访问一些和网页无关的浏览器功能。 如: "),a("code",[t._v("window")]),t._v(" 、 "),a("code",[t._v("location")]),t._v(" 、 "),a("code",[t._v("navigator")]),t._v(" 、 "),a("code",[t._v("screen")]),t._v(" 、 "),a("code",[t._v("history")]),t._v(" 等对象。")]),t._v(" "),a("li",[a("code",[t._v("DOM")]),t._v(" 即文档对象模型, 针对 "),a("code",[t._v("HTML")]),t._v(" （或 "),a("code",[t._v("XML")]),t._v(" ）文档的 "),a("code",[t._v("API")]),t._v(" （应用程序编程接口）。 描绘的一个层次化的节点树, 开发人员可以添加、 修改和删除页面的某一部分。")])]),t._v(" "),a("h2",{attrs:{id:"细说-bom-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#细说-bom-对象"}},[t._v("#")]),t._v(" 细说 BOM 对象")]),t._v(" "),a("h3",{attrs:{id:"window-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#window-对象"}},[t._v("#")]),t._v(" window 对象")]),t._v(" "),a("p",[t._v("window 对象表示浏览器的一个实例, 同时也是 ECMAScript 规定的 Global 对象。 （Global:  所有在全局作用域中定义的属性和函数, 都是 Global 对象的属性。 在浏览器中 Global 对象实际上就是 window 对象实现的 ） 全局作用域( 所有全局对象都可以通过 window 来访问 )")]),t._v(" "),a("p",[a("code",[t._v("For Example:")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"张三"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局对象都可以通过 window 的属性方式来访问")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h4",{attrs:{id:"弹出窗口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹出窗口"}},[t._v("#")]),t._v(" 弹出窗口")]),t._v(" "),a("p",[a("code",[t._v("For Example:")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NewWin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"height=400, width=400"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("第三个参数还可能有的值如: "),a("br")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://oss-blog.test.upcdn.net/window-object.png",alt:"window 对象"}})]),t._v(" "),a("h4",{attrs:{id:"间歇调用（settimeout）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#间歇调用（settimeout）"}},[t._v("#")]),t._v(" 间歇调用（setTimeout）")]),t._v(" "),a("p",[a("code",[t._v("For Example:")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会在 1000 毫秒后执行")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("如果在间歇时间之前想要取消执行, 我们可以 "),a("code",[t._v("clearTimeout()")]),t._v(" , "),a("code",[t._v("For Example:")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置超时调用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timeoutId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注意:  把它取消")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeoutId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("同样我们也可以通过间歇调用模拟实现超时调用, "),a("code",[t._v("For Example:")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里可以实现某些逻辑")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"超时调用（setinterval）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#超时调用（setinterval）"}},[t._v("#")]),t._v(" 超时调用（setInterval）")]),t._v(" "),a("p",[a("code",[t._v("For Example:")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每隔 1 秒 执行一遍")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("如果想要取消执行, 我们可以 "),a("code",[t._v("clearTimeout()")]),t._v(" , "),a("code",[t._v("For Example:")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" timeId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里可以执行某些逻辑")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearInterval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意和取消间歇调用不一样（clearTimeout）")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每隔1秒 执行一遍")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"location-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-对象"}},[t._v("#")]),t._v(" location 对象")]),t._v(" "),a("p",[t._v("location 对象说来也是奇怪, 它既是 window 的属性也是 document 属性, 且同时指向了同一个对象。 window 和 document 的关系:  浏览器中的 html 成为了 document 对象, 使我们可以通过 javascript 来访问、 操作 html 的元素。 且 documnet 对象是 window 对象的一部分, 可以通过 window.document 属性来访问。")]),t._v(" "),a("h4",{attrs:{id:"location-的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-的属性"}},[t._v("#")]),t._v(" location 的属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("例子")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("hash")]),t._v(" "),a("td",[t._v('"#contens"')]),t._v(" "),a("td",[t._v("返回 URL 中 hash（#号后跟零或多个字符）, 如果 URL 中不包含散列, 则返回空字符串")])]),t._v(" "),a("tr",[a("td",[t._v("host")]),t._v(" "),a("td",[t._v('"www.baidu.com:80"')]),t._v(" "),a("td",[t._v("返回服务器名和端口号")])]),t._v(" "),a("tr",[a("td",[t._v("hostname")]),t._v(" "),a("td",[t._v('"www.baidu.com"')]),t._v(" "),a("td",[t._v("返回不带端口号的服务器名称")])]),t._v(" "),a("tr",[a("td",[t._v("href")]),t._v(" "),a("td",[t._v('"'),a("a",{attrs:{href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.baidu.com"),a("OutboundLink")],1),t._v('"')]),t._v(" "),a("td",[t._v("返回当前加载页面的完整 URL。 location 对象的 toString() 方法也返回该值")])]),t._v(" "),a("tr",[a("td",[t._v("pathname")]),t._v(" "),a("td",[t._v('"/admin/"')]),t._v(" "),a("td",[t._v("返回 URL 中的目录或文件名")])]),t._v(" "),a("tr",[a("td",[t._v("port")]),t._v(" "),a("td",[t._v('"8080"')]),t._v(" "),a("td",[t._v("返回 URL 中指定的端口号, 如果 URL 中不包含端口号, 则返回空字符串")])]),t._v(" "),a("tr",[a("td",[t._v("protocol")]),t._v(" "),a("td",[t._v('"http:"')]),t._v(" "),a("td",[t._v("返回页面使用的协议。 通常是 http: 或者是 https:")])]),t._v(" "),a("tr",[a("td",[t._v("search")]),t._v(" "),a("td",[t._v('"?q=javascript&&tags=web"')]),t._v(" "),a("td",[t._v("返回 URL 中查询的字符串。 查询以 ？ 与前面的字符串分割, 用 && 连接多个类型的查询")])])])]),t._v(" "),a("p",[t._v("有了上面这些属性, 我们可以非常方便的修改 "),a("code",[t._v("url")]),t._v(" , "),a("code",[t._v("For Example:")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 假设初始 URL 为 http://www.wrox.com/WileyCDA/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 将 URL 修改为 "http://www.wrox.com/WileyCDA/#section1"')]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#section1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 将 URL 修改为 "http://www.wrox.com/WileyCDA/?q=javascript"')]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("search "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?q=javascript"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 将 URL 修改为 "https://www.yahoo.com/WileyCDA/"')]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"www.yahoo.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 将 URL 修改为 "https://www.yahoo.com/mydir/"')]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mydir"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 将 URL 修改为 "https://www.yahoo.com:8080/WileyCDA/"')]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("每次修改 "),a("code",[t._v("location")]),t._v(" 的属性（ "),a("code",[t._v("hash")]),t._v(" 除外）, 页面都会以新 URL 重新加载。 也就是说, 浏览器会生成一天后退的历史记录。 如果我们不想能够回退可以使用 "),a("code",[t._v("replace（）")]),t._v(" 方法, "),a("code",[t._v("For Example:")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如此就不会有回退记录了。")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("除了 "),a("code",[t._v("replace")]),t._v(" 方法外还有个比较重要的方法。 "),a("code",[t._v("reload")]),t._v(" 方法用来刷新。")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新加载（有可能从缓存中加载）")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重新加载（从服务器重新加载）也就是强制刷新")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"navigator-对象、-screen-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navigator-对象、-screen-对象"}},[t._v("#")]),t._v(" navigator 对象、 screen 对象")]),t._v(" "),a("p",[t._v("navigator 对象主要用来识别客户端浏览器, 但是由于各类浏览器对 navigator 对象的实现各有不同, 这里就不细分析了。 screen 对象基本上只用来表明客户端的能力, 其中包括浏览器窗口外部的显示器的信息, 如像素宽度和高度等。 每种浏览器对其的支持程度也是不同的, 这里也不分析了。")]),t._v(" "),a("h3",{attrs:{id:"history-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history-对象"}},[t._v("#")]),t._v(" history 对象")]),t._v(" "),a("p",[t._v("history 对象主要保存当前也网页的历史记录。 但出于安全考虑, 程序员不能够知道详细的 url。")]),t._v(" "),a("p",[a("code",[t._v("For Example:")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("history"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 历史记录的数量")]),t._v("\nhistory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后退一页")]),t._v("\nhistory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forward")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前进一页")]),t._v("\nhistory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 后退一页")]),t._v("\nhistory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前进一页")]),t._v("\nhistory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前进两页")]),t._v("\nhistory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("go")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrox.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳转到最近的 wrox.com 页面")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);