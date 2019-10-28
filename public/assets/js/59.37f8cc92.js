(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{510:function(s,a,e){"use strict";e.r(a);var v=e(4),t=Object(v.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",[s._v("列出 TCP/UDP 协议常见的端口号占用情况, 以助于分析该服务器开放了哪些端口号, 或者程序占用了哪些端口号")])]),s._v(" "),e("h2",{attrs:{id:"如何查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何查看"}},[s._v("#")]),s._v(" 如何查看")]),s._v(" "),e("h3",{attrs:{id:"windows-系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-系统"}},[s._v("#")]),s._v(" Windows 系统")]),s._v(" "),e("p",[s._v("通过 "),e("code",[s._v("netstat")]),s._v(" 列出所有端口的使用情况, "),e("code",[s._v("For Example:")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -ano\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("通过 "),e("code",[s._v("findstr")]),s._v(" 查询包含关键字的端口使用情况, "),e("code",[s._v("For Example:")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("netsata -ano "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" findstr "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('":80"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("通过 "),e("code",[s._v("tasklist")]),s._v(" 查询哪个程序或应用占用该端口对应的 "),e("code",[s._v("PID")]),s._v(" , "),e("code",[s._v("For Example:")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("tasklist "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" findstr "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2180"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"liunx-系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#liunx-系统"}},[s._v("#")]),s._v(" Liunx 系统")]),s._v(" "),e("p",[s._v("通过 "),e("code",[s._v("netstat")]),s._v(" 列出监听的端口, "),e("code",[s._v("For Example:")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tlun\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("通过 "),e("code",[s._v("netstat")]),s._v(" 列出所有的网络连接, "),e("code",[s._v("For Example:")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -an\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("通过 "),e("code",[s._v("ps")]),s._v(" 查看进程占用状态, "),e("code",[s._v("For Example:")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" sshd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"常见端口号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见端口号"}},[s._v("#")]),s._v(" 常见端口号")]),s._v(" "),e("h3",{attrs:{id:"tcp-协议相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议相关"}},[s._v("#")]),s._v(" TCP 协议相关")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("20")]),s._v(" => FTP（文件传输协议） 传输数据端口, 用于纯属数据")]),s._v(" "),e("li",[e("code",[s._v("21")]),s._v(" => FTP（文件传输协议） 连接端口, 用于登陆认证")]),s._v(" "),e("li",[e("code",[s._v("22")]),s._v(" => SSH（安全外壳协议） 加密的远程连接, SFTP（安全的文件传输协议） 传输安全的数据")]),s._v(" "),e("li",[e("code",[s._v("23")]),s._v(" => Telnet（远程终端协议） 相对不安全的远程连接")]),s._v(" "),e("li",[e("code",[s._v("25")]),s._v(" => SMTP（简单邮件传输协议） 使用的端口")]),s._v(" "),e("li",[e("code",[s._v("53")]),s._v(" => DNS 服务器开放的端口, 入侵者可能是试图进行区域传递（TCP）, 所以防火墙常常过滤或记录该端口")]),s._v(" "),e("li",[e("code",[s._v("80")]),s._v(" / "),e("code",[s._v("8080")]),s._v(" / "),e("code",[s._v("3128")]),s._v(" / "),e("code",[s._v("8081")]),s._v(" / "),e("code",[s._v("9080")]),s._v(" => HTTP（超文本传输协议） 使用的端口")]),s._v(" "),e("li",[e("code",[s._v("109")]),s._v(" => POP2（邮件协议 2） 服务器开放的端口")]),s._v(" "),e("li",[e("code",[s._v("110")]),s._v(" => POP3（邮件协议 3） 服务器开放的端口, 用于接收邮件, 客户端访问服务器的邮件服务")]),s._v(" "),e("li",[e("code",[s._v("139")]),s._v(" => 文件共享使用的端口")]),s._v(" "),e("li",[e("code",[s._v("443")]),s._v(" => HTTPS（安全套接字层的超文本传输协议） 默认端口, 传输数据更加安全")]),s._v(" "),e("li",[e("code",[s._v("445")]),s._v(" => SMB（文件共享服务）开放的端口")]),s._v(" "),e("li",[e("code",[s._v("1433")]),s._v(" => SQL Server 默认的端口, 用于供 SQL Server 对外提供服务")]),s._v(" "),e("li",[e("code",[s._v("1521")]),s._v(" => Oracle 数据库默认端口")]),s._v(" "),e("li",[e("code",[s._v("3306")]),s._v(" => MySQL 数据库默认端口")]),s._v(" "),e("li",[e("code",[s._v("3389")]),s._v(" => 远程桌面使用的端口")]),s._v(" "),e("li",[e("code",[s._v("8080")]),s._v(" => Tomcat 服务器的默认端口")])]),s._v(" "),e("h3",{attrs:{id:"udp-协议相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#udp-协议相关"}},[s._v("#")]),s._v(" UDP 协议相关")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("53")]),s._v(" => DNS 服务器开放的端口, 入侵者可能是试图进行欺骗 DNS（UDP）或隐藏其他的通信, 所以防火墙常常过滤或记录该端口")]),s._v(" "),e("li",[e("code",[s._v("69")]),s._v(" => TFTP（简单文件传输协议） 默认的端口号")]),s._v(" "),e("li",[e("code",[s._v("139")]),s._v(" => 文件共享使用的端口")]),s._v(" "),e("li",[e("code",[s._v("161")]),s._v(" => SNMP（简单网络管理协议） 入侵者常探测的端口")]),s._v(" "),e("li",[e("code",[s._v("162")]),s._v(" => SNMP（简单网络管理协议） 默认的端口号")]),s._v(" "),e("li",[e("code",[s._v("445")]),s._v(" => SMB（文件共享服务）开放的端口")]),s._v(" "),e("li",[e("code",[s._v("1434")]),s._v(" => SQL Server 默认的端口, 于向请求者返回 SQL Server 使用了哪个 TCP/IP 端口")])])])}),[],!1,null,null,null);a.default=t.exports}}]);