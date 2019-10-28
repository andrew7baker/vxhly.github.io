(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{486:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",[s._v("本篇是 Liunx 的服务配置笔记系列第三篇, 这一篇将具体介绍 Red Hat Liunx 下 FTP 服务的安全配置。确切的说, 应该叫它 vsFTP, 就是文件的上传和下载服务, 主要的功能是在服务器与客户端之间进行文件的传输")])]),s._v(" "),t("h2",{attrs:{id:"配置文件的位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件的位置"}},[s._v("#")]),s._v(" 配置文件的位置")]),s._v(" "),t("p",[s._v("主配置文件: "),t("strong",[s._v("/etc/vsftpd/vsftpd.conf")])]),s._v(" "),t("h2",{attrs:{id:"服务的启动与停止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务的启动与停止"}},[s._v("#")]),s._v(" 服务的启动与停止")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[s._v("FTP 的服务名并不叫做 "),t("code",[s._v("vsftp")]),s._v(" , 而是 "),t("code",[s._v("vsftpd")]),s._v(" 。"),t("br"),s._v("\n修改配置文件过后一定要重启 "),t("code",[s._v("vsftpd")]),s._v(" 服务。")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" vsftpd status        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" vsftpd start         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" vsftpd stop          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暂停")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" vsftpd restart       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"服务的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务的安装"}},[s._v("#")]),s._v(" 服务的安装")]),s._v(" "),t("h3",{attrs:{id:"创建挂载目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建挂载目录"}},[s._v("#")]),s._v(" 创建挂载目录")]),s._v(" "),t("p",[t("code",[s._v("For Example:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /mnt/cdrom\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"挂载光盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#挂载光盘"}},[s._v("#")]),s._v(" 挂载光盘")]),s._v(" "),t("p",[t("code",[s._v("For Example:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/cdrom /mnt/cdrom\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[t("code",[s._v("For Example:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /mnt/cdrom/Server\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh vsftpd-2.0.5-16.e15i386.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-1.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h2",{attrs:{id:"安全配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全配置"}},[s._v("#")]),s._v(" 安全配置")]),s._v(" "),t("h3",{attrs:{id:"禁止匿名用户登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁止匿名用户登录"}},[s._v("#")]),s._v(" 禁止匿名用户登录")]),s._v(" "),t("p",[t("code",[s._v("Default Configuration:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("anonymous_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("默认的值是允许的, 这样匿名用户就可以不需要密码就可以登录 FTP 了, 这样很不安全, 把它修改成 NO 吧。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-7.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h4",{attrs:{id:"使用客户端进行验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用客户端进行验证"}},[s._v("#")]),s._v(" 使用客户端进行验证")]),s._v(" "),t("p",[s._v("验证之前, 请重启服务。我们就直接使用 FTP 用户登录吧。")]),s._v(" "),t("p",[t("code",[s._v("Connection Format:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ftp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("host"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("若没有成功登录, 则会显示")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("530")]),s._v(" Login incorrect.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用 "),t("code",[s._v("bye")]),s._v(" , 可以退出 FTP, 成功则会显示")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("221")]),s._v(" Googbye\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-8.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h3",{attrs:{id:"使用户不能登录系统-但可以登录-ftp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用户不能登录系统-但可以登录-ftp"}},[s._v("#")]),s._v(" 使用户不能登录系统, 但可以登录 FTP")]),s._v(" "),t("p",[s._v("首先要创建一个普通的用户, 使他不能登录系统, 只需设置登录的 shell 就好了。")]),s._v(" "),t("p",[s._v("创建一个新用户, 别忘了设置密码, "),t("code",[s._v("For Example:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -s /sbin/nologin "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("code",[s._v("For Example:")]),s._v(" "),t("br")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-9.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h4",{attrs:{id:"使用客户端进行验证-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用客户端进行验证-2"}},[s._v("#")]),s._v(" 使用客户端进行验证")]),s._v(" "),t("p",[s._v("验证之前, 请重启服务。这时候, 我们就要使用之前创建的用户进行验证了。")]),s._v(" "),t("p",[s._v("若登录成功, 则会显示")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("230")]),s._v(" Login successful\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-11.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h3",{attrs:{id:"禁止用户写入或者上传文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#禁止用户写入或者上传文件"}},[s._v("#")]),s._v(" 禁止用户写入或者上传文件")]),s._v(" "),t("p",[t("code",[s._v("Default Configuration:")]),s._v(" "),t("br")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("write_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("默认是允许用户进行上传或者写入文件, 我们可以根据需求进行修改。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-12.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h4",{attrs:{id:"使用客户端进行验证-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用客户端进行验证-3"}},[s._v("#")]),s._v(" 使用客户端进行验证")]),s._v(" "),t("p",[s._v("验证之前, 请重启服务。这时候, 我们仍然使用之前创建的用户进行验证。")]),s._v(" "),t("p",[s._v("无法创建目录, 则会显示")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("550")]),s._v(" Permission denied\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("尝试切换目录, 成功则会显示")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("250")]),s._v(" Directory successfully changed.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-12.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h3",{attrs:{id:"配置空闲会话中断时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置空闲会话中断时间"}},[s._v("#")]),s._v(" 配置空闲会话中断时间")]),s._v(" "),t("p",[t("code",[s._v("Default Configuration:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#idle_session_timeout=600")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("默认的配置时间是十分钟, （默认的单位为秒）, 我们可以根据需求进行修改。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-2.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h4",{attrs:{id:"使用客户端进行验证-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用客户端进行验证-4"}},[s._v("#")]),s._v(" 使用客户端进行验证")]),s._v(" "),t("p",[s._v("验证之前, 请重启服务。成功登录之后, 我们等待一段时间, 在进行操作。")]),s._v(" "),t("p",[s._v("若超时, 则会显示")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("421")]),s._v(" Timeout\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-3.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h3",{attrs:{id:"配置数据连接超时时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置数据连接超时时间"}},[s._v("#")]),s._v(" 配置数据连接超时时间")]),s._v(" "),t("p",[t("code",[s._v("Default Configuration:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#data_connection_timeout=120")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("默认的配置是两分钟, （默认的单位为秒）, 我们可以根据需求进行修改。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-4.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h4",{attrs:{id:"使用客户端进行验证-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用客户端进行验证-5"}},[s._v("#")]),s._v(" 使用客户端进行验证")]),s._v(" "),t("p",[s._v("此选项需要在传输数据的时候可用, 这里不再进行演示。")]),s._v(" "),t("h3",{attrs:{id:"限制普通用户只能在家目录中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#限制普通用户只能在家目录中"}},[s._v("#")]),s._v(" 限制普通用户只能在家目录中")]),s._v(" "),t("p",[t("code",[s._v("Default Configuration:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#chroot_list_enable=YES")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#chroot_list_file=/etc/vsftpd/chroot_list")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("默认是允许用户跳出自己的家目录的, 我们可以限制他只能在自己的家目录里。注意, 要将用户限制在家目录中, 还需要设置 'chroot_local_user=YES'。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-5.png",alt:"FTP 安全配置"}})]),s._v(" "),t("p",[s._v("别忘了将禁止的用户添加至 "),t("code",[s._v("/etc/vsftpd/chroot_list")])]),s._v(" "),t("h4",{attrs:{id:"使用客户端进行验证-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用客户端进行验证-6"}},[s._v("#")]),s._v(" 使用客户端进行验证")]),s._v(" "),t("p",[s._v("验证之前, 请重启服务。这时候, 我们仍然使用之前创建的用户进行验证。")]),s._v(" "),t("p",[s._v("不能切换目录, 则会显示")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("550")]),s._v(" Failed to changed directory.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-6.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h3",{attrs:{id:"设置黑名单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置黑名单"}},[s._v("#")]),s._v(" 设置黑名单")]),s._v(" "),t("p",[t("code",[s._v("Default Configuration:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("userlist_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("默认情况下就是开启的, 若无开启, 我们可以根据需求进行修改。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-13.png",alt:"FTP 安全配置"}})]),s._v(" "),t("p",[s._v("别忘了, 将禁止的用户填入 "),t("code",[s._v("/etc/vsftpd/ftpusers")])]),s._v(" "),t("h4",{attrs:{id:"使用客户端进行验证-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用客户端进行验证-7"}},[s._v("#")]),s._v(" 使用客户端进行验证")]),s._v(" "),t("p",[s._v("验证之前, 请重启服务。这时候, 我们新建一个用户, 然后将其加入黑名单, 再进行验证。")]),s._v(" "),t("p",[s._v("新建用户, "),t("code",[s._v("For Example:")]),s._v(" "),t("br")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-14.png",alt:"FTP 安全配置"}})]),s._v(" "),t("p",[s._v("添加至黑名单, "),t("code",[s._v("For Example:")]),s._v(" "),t("br")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-15.png",alt:"FTP 安全配置"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-16.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h2",{attrs:{id:"配置虚拟用户登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置虚拟用户登录"}},[s._v("#")]),s._v(" 配置虚拟用户登录")]),s._v(" "),t("h3",{attrs:{id:"先安装-db4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先安装-db4"}},[s._v("#")]),s._v(" 先安装 db4")]),s._v(" "),t("p",[t("code",[s._v("For Example:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh db4-utils-4.3.29-10.el5.i386.rpm\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-17.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h3",{attrs:{id:"生成虚拟用户口令库文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成虚拟用户口令库文件"}},[s._v("#")]),s._v(" 生成虚拟用户口令库文件")]),s._v(" "),t("p",[t("code",[s._v("For Example:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/vsftpd/login.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("需要注意的是, 该文件的格式如下, 单数行为用户名, 偶数行为口令。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-18.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h3",{attrs:{id:"生成口令库文件-并修改其权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成口令库文件-并修改其权限"}},[s._v("#")]),s._v(" 生成口令库文件, 并修改其权限")]),s._v(" "),t("p",[t("code",[s._v("For Example:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("db_load -T -t "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("hash")]),s._v(" -f /etc/vsftpd/login.txt /etc/vsftpd/login.db\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" /etc/vsftpd/login.db\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("注意要设置权限, 只有 root 用户拥有读写权限。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-19.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h3",{attrs:{id:"修改虚拟用户的-pam-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改虚拟用户的-pam-文件"}},[s._v("#")]),s._v(" 修改虚拟用户的 PAM 文件")]),s._v(" "),t("p",[t("code",[s._v("For Example:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/pam.d/vsftpd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("加入如下内容, 其他的全部注释掉")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("auth required pam_userdb.so "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("db")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/vsftpd/login\naccount required pam_userdb.so "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("db")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/vsftpd/login\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-20.png",alt:"FTP 安全配置"}})]),s._v(" "),t("p",[s._v("数据文件的地址, 记得要写对哦。")]),s._v(" "),t("h3",{attrs:{id:"建立虚拟用户-并设置权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立虚拟用户-并设置权限"}},[s._v("#")]),s._v(" 建立虚拟用户, 并设置权限")]),s._v(" "),t("p",[t("code",[s._v("For Example:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -d /home/ftp -s /sbin/nologin virtual\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /home/ftp\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" virtual\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-21.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h4",{attrs:{id:"修改主配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改主配置文件"}},[s._v("#")]),s._v(" 修改主配置文件")]),s._v(" "),t("p",[s._v("添加如下内容, "),t("code",[s._v("For Example:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("guest_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("guest_username")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("virtual\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user_config_dir")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/vsftpd_user_conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-24.png",alt:"FTP 安全配置"}})]),s._v(" "),t("h4",{attrs:{id:"创建配置文件存放目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建配置文件存放目录"}},[s._v("#")]),s._v(" 创建配置文件存放目录")]),s._v(" "),t("p",[s._v("此目录一定要与配置文件中的一致, "),t("code",[s._v("For Example:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/vsftpd_user_conf\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"为虚拟用户创建配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为虚拟用户创建配置文件"}},[s._v("#")]),s._v(" 为虚拟用户创建配置文件")]),s._v(" "),t("p",[s._v("为虚拟口令库中的每个用户分别创建一个配置文件, 配置文件中的配置于匿名用户的配置相差无几。")]),s._v(" "),t("p",[s._v("先创建配置文件, "),t("code",[s._v("For Example:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/vsftpd_user_conf/ftp_test\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在配置文件中配置如下内容,")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("anon_world_readable_only")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NO               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否允许浏览 FTP 目录和下载")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("anon_upload_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否允许上传")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("write_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES                          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否有写权限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("download_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES                       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否允许下载文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("anon_mkdir_write_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否允许建立和删除目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("anon_other_write_enable")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("YES               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否允许改名和删除文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("local_root")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/ftp/share/123\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定虚拟用户在系统用户下面的路径,限制虚拟用户的家目录,虚拟用户登录后的主目录。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-25.png",alt:"FTP 安全配置"}})]),s._v(" "),t("p",[s._v("最后只需创建一下虚拟用户登录后的主目录, "),t("code",[s._v("For Example:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/ftp/share/123\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"登录测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登录测试"}},[s._v("#")]),s._v(" 登录测试")]),s._v(" "),t("p",[s._v("这时候就要使用虚拟用户口令库文件里的用户名和密码来登录 FTP 服务器")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-ftp-23.png",alt:"FTP 安全配置"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);