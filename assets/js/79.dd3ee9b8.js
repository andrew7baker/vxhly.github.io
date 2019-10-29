(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{528:function(t,e,r){"use strict";r.r(e);var s=r(4),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("前言")]),t._v(" "),r("p",[t._v("此系列笔记是网络渗透工具的使用方法, 本篇是介绍 Web 应用程序测试工具 BurpSuite 的使用方法。Burp Suite 其多种功能可以帮我们执行各种任务, 请求的拦截和修改, 扫描 web 应用程序漏洞, 以暴力破解登陆表单, 执行会话令牌等多种的随机性检查")])]),t._v(" "),r("h2",{attrs:{id:"burp-suite-环境"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#burp-suite-环境"}},[t._v("#")]),t._v(" Burp Suite 环境")]),t._v(" "),r("p",[r("code",[t._v("kali Liunx")]),t._v(" 里已经集成了 Burp Suite 工具, "),r("code",[t._v("windows")]),t._v(" 下安装 Burp Suite 之前请确定你的电脑里有 Java 环境"),r("br"),t._v(" "),r("router-link",{attrs:{to:"//portswigger.net/burp/download.html"}},[t._v("Burp Suite 官网下载地址")])],1),t._v(" "),r("h3",{attrs:{id:"jdk-安装和环境变量配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jdk-安装和环境变量配置"}},[t._v("#")]),t._v(" JDK 安装和环境变量配置")]),t._v(" "),r("p",[r("code",[t._v("windows")]),t._v(" 下安装 Burp Suite 需要 Java 环境进行支持, 由于本博客之前是有写过 JDK 的安装和环境变量的配置, 所以这里不再提供。")]),t._v(" "),r("h2",{attrs:{id:"设置代理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置代理"}},[t._v("#")]),t._v(" 设置代理")]),t._v(" "),r("p",[t._v("Burp Suite 带有一个代理, 通过默认端口 "),r("code",[t._v("8080")]),t._v(" 上运行, 使用这个代理, 我们可以截获并修改从客户端到 web 应用程序的数据包。"),r("br")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://oss-blog.test.upcdn.net/burp-1.png",alt:"Burp Suite"}})]),t._v(" "),r("p",[t._v("这里我们使用 "),r("code",[t._v("Chrome")]),t._v(" 浏览器, 在 "),r("code",[t._v("Chrome")]),t._v(" 浏览器里也需要设置代理方式"),r("br")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://oss-blog.test.upcdn.net/burp-2.png",alt:"Burp Suite"}})]),t._v(" "),r("h2",{attrs:{id:"拦截改包和暴力破解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#拦截改包和暴力破解"}},[t._v("#")]),t._v(" 拦截改包和暴力破解")]),t._v(" "),r("h3",{attrs:{id:"模拟登录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#模拟登录"}},[t._v("#")]),t._v(" 模拟登录")]),t._v(" "),r("p",[t._v("这里使用漏洞集成平台 "),r("code",[t._v("DVWA")]),t._v(" 来进行测试")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://oss-blog.test.upcdn.net/burp-3.png",alt:"Burp Suite"}})]),t._v(" "),r("h3",{attrs:{id:"拦截请求包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#拦截请求包"}},[t._v("#")]),t._v(" 拦截请求包")]),t._v(" "),r("p",[t._v("随意输入密码（这里填写的密码为 "),r("code",[t._v("123")]),t._v(" ）, 点击登录, 在 Burp Suite 里就可以看到拦截的请求包（前提是设置好代理）"),r("br")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://oss-blog.test.upcdn.net/burp-4.png",alt:"Burp Suite"}})]),t._v(" "),r("h3",{attrs:{id:"修改请求包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#修改请求包"}},[t._v("#")]),t._v(" 修改请求包")]),t._v(" "),r("p",[t._v("将拦截到的数据包 "),r("code",[t._v("Send to Intruder")]),t._v(" （也可以使用 "),r("code",[t._v("Ctrl+I")]),t._v(" ）"),r("br")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://oss-blog.test.upcdn.net/burp-5.png",alt:"Burp Suite"}})]),t._v(" "),r("p",[t._v("在 "),r("code",[t._v("Position")]),t._v(" 选项中设置需要破解的变量。 "),r("code",[t._v("Burpsuite")]),t._v(" 会自动设置许多变量, 单击 "),r("code",[t._v("Clear")]),t._v(" 按钮, 把默认变量全部清除, 然后选中密码 "),r("code",[t._v("123")]),t._v(" , 单击 "),r("code",[t._v("Add")]),t._v(" 按钮将之设为需要破解的变量。由于只有一个变量, 因而 "),r("code",[t._v("Attack type")]),t._v(" 攻击类型这里选择 "),r("code",[t._v("Sniper")]),t._v(" 。"),r("br")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://oss-blog.test.upcdn.net/burp-6.png",alt:"Burp Suite"}})]),t._v(" "),r("h3",{attrs:{id:"添加字典"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#添加字典"}},[t._v("#")]),t._v(" 添加字典")]),t._v(" "),r("p",[t._v("在 "),r("code",[t._v("Payloads")]),t._v(" 选项中进行设置, 由于只有一个变量, 因而 "),r("code",[t._v("Payload set")]),t._v(" 自动设置为 1, "),r("code",[t._v("Payload type")]),t._v(" 这里设置为 "),r("code",[t._v("Simple list")]),t._v(" 。在下面的 "),r("code",[t._v("Payload Options")]),t._v(" 中, 我们添加可能的密码, 或者密码。"),r("br")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://oss-blog.test.upcdn.net/burp-7.png",alt:"Burp Suite"}})]),t._v(" "),r("h3",{attrs:{id:"开始破解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开始破解"}},[t._v("#")]),t._v(" 开始破解")]),t._v(" "),r("p",[t._v("在菜单栏中选择 "),r("code",[t._v("Intruder/Start attack")]),t._v(" , 就可以开始暴力破解。"),r("br")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://oss-blog.test.upcdn.net/burp-8.png",alt:"Burp Suite"}})]),t._v(" "),r("h3",{attrs:{id:"分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[t._v("#")]),t._v(" 分析")]),t._v(" "),r("p",[t._v("在 "),r("code",[t._v("Results")]),t._v(" 中, 双击 "),r("code",[t._v("length")]),t._v(" 进行排序, 在这里所有登录成功或者登录失败的记录全部在这里。"),r("br")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://oss-blog.test.upcdn.net/burp-9.png",alt:"Burp Suite"}})]),t._v(" "),r("p",[t._v("选中请求字节包最大的, 在 "),r("code",[t._v("Response/Render")]),t._v(" 里就可以看到 "),r("code",[t._v("Welcome to the password protected area admin")]),t._v(" 成功登录的信息"),r("br")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://oss-blog.test.upcdn.net/burp-10.png",alt:"Burp Suite"}})]),t._v(" "),r("h2",{attrs:{id:"decode-和-encode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#decode-和-encode"}},[t._v("#")]),t._v(" Decode 和 Encode")]),t._v(" "),r("p",[t._v("Decoder 转化成规范的形式编码数据, 或转化成各种形式编码和散列的原始数据。它能够智能识别多种编码格式, 使用启发式技术。")]),t._v(" "),r("p",[t._v("下面这张图是将一段 URL 进行 encode（编码）"),r("br")]),t._v(" "),r("p",[r("img",{attrs:{src:"http://oss-blog.test.upcdn.net/burp-11.png",alt:"Burp Suite"}})])])}),[],!1,null,null,null);e.default=a.exports}}]);