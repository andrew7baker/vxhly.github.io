(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{526:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",[s._v("Liunx 下的监听 shell 脚本, 脚本功能实现, 当一小时内有新增的新文件, 立刻删除它, 此脚本允许被后台运行")])]),s._v(" "),a("h2",{attrs:{id:"功能解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能解释"}},[s._v("#")]),s._v(" 功能解释")]),s._v(" "),a("ol",[a("li",[s._v("若含有文件上传漏洞时, 该脚本能够自动删除上传的文件")]),s._v(" "),a("li",[s._v("在 "),a("code",[s._v("PWD(攻防对抗)")]),s._v(" 中非常有用")]),s._v(" "),a("li",[s._v("后台运行, 只占用进程号, 不占用 shell 界面")])]),s._v(" "),a("h2",{attrs:{id:"脚本代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本代码"}},[s._v("#")]),s._v(" 脚本代码")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" /var/www/dvwa/ -cmin -60 -type f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"脚本解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本解释"}},[s._v("#")]),s._v(" 脚本解释")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("while true")]),s._v(" => 持续监听")]),s._v(" "),a("li",[a("code",[s._v("-cmin -60")]),s._v(" => 查找一小时内（包含一小时）新增文件")]),s._v(" "),a("li",[a("code",[s._v("-type f")]),s._v(" => 制定文件类型为文件")]),s._v(" "),a("li",[a("code",[s._v("|")]),s._v(" => 管道符, 将前一个命令执行结果传送至后一个命令执行")]),s._v(" "),a("li",[a("code",[s._v("xargs")]),s._v(" => 命令传递参数的一个过滤器, 可以批量执行")]),s._v(" "),a("li",[a("code",[s._v("sleep 1")]),s._v(" => 上一条命令执行之后, 暂停 1 秒")]),s._v(" "),a("li",[a("code",[s._v("/var/www/dvwa/")]),s._v(" => 可为任何目录, 这边是一个测试目录")])]),s._v(" "),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".sh\n./"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(".sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"进程号查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程号查询"}},[s._v("#")]),s._v(" 进程号查询")]),s._v(" "),a("p",[s._v("脚本后台运行时, 会生成一个进程号"),a("br")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://oss-blog.test.upcdn.net/shell-new-files-1.png",alt:"Shell 监听脚本"}})]),s._v(" "),a("p",[s._v("通过 ps 命令可以查询进程"),a("br")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://oss-blog.test.upcdn.net/shell-new-files-2.png",alt:"Shell 监听脚本"}})]),s._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[s._v("#")]),s._v(" 测试")]),s._v(" "),a("h3",{attrs:{id:"本地测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地测试"}},[s._v("#")]),s._v(" 本地测试")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("/var/www/dvwa/")]),s._v(" 某个目录下新增文件"),a("br")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://oss-blog.test.upcdn.net/shell-new-files-3.png",alt:"Shell 监听脚本"}})]),s._v(" "),a("h3",{attrs:{id:"在有上传文件漏洞中测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在有上传文件漏洞中测试"}},[s._v("#")]),s._v(" 在有上传文件漏洞中测试")]),s._v(" "),a("p",[s._v("在 dvwa 中的上传文件漏洞环境进行测试"),a("br")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://oss-blog.test.upcdn.net/shell-new-files-4.png",alt:"Shell 监听脚本"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);