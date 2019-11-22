(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{443:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),a("p",[s._v("SSH 是每一台 Linux 系统的标准配置服务, 本文将总结 SSH 的常见用法")])]),s._v(" "),a("h2",{attrs:{id:"什么是-ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ssh"}},[s._v("#")]),s._v(" 什么是 SSH")]),s._v(" "),a("p",[s._v("SSH 为 "),a("code",[s._v("Secure Shell")]),s._v(" 的缩写, 中文名字为安全外壳协议。SSH 是目前较可靠, 专为远程登录会话和其他网络服务提供安全性的协议。利用 SSH 协议可以有效防止远程管理过程中的信息泄露问题。需要指出的是, SSH 只是一种协议, 存在多种实现, 既有商业实现, 也有开源实现。")]),s._v(" "),a("h1",{attrs:{id:"基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[s._v("#")]),s._v(" 基本用法")]),s._v(" "),a("p",[s._v("SSH 主要用于远程登录, 只要一条简单命令就可以了。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果本地用户名与远程用户名一致, 登录时可以省略用户名。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("SSH 的默认端口是 22, 当然也可以使用 "),a("code",[s._v("-p")]),s._v(" 修改这个端口。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"中间人攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中间人攻击"}},[s._v("#")]),s._v(" 中间人攻击")]),s._v(" "),a("p",[s._v("SSH 之所以能够保证安全, 原因在于它采用了公钥加密。")]),s._v(" "),a("p",[s._v("整个过程是这样的:")]),s._v(" "),a("ul",[a("li",[s._v("远程主机收到用户的登录请求, 把自己的公钥发给用户。")]),s._v(" "),a("li",[s._v("用户使用这个公钥, 将登录密码加密后, 发送回来。")]),s._v(" "),a("li",[s._v("远程主机用自己的私钥, 解密登录密码, 如果密码正确, 就同意用户登录。")])]),s._v(" "),a("p",[s._v("这个过程本身是安全的, 但是实施的时候存在一个风险: 如果有人截获了登录请求, 然后冒充远程主机, 将伪造的公钥发给用户, 那么用户很难辨别真伪。因为不像 https 协议, SSH 协议的公钥是没有证书中心（CA）公证的, 也就是说, 都是自己签发的。")]),s._v(" "),a("p",[s._v("可以设想, 如果攻击者插在用户与远程主机之间（比如在公共的 wifi 区域）, 用伪造的公钥, 获取用户的登录密码。再用这个密码登录远程主机, 那么 SSH 的安全机制就荡然无存了。")]),s._v(" "),a("p",[s._v("这种风险就是著名的"),a("a",{attrs:{href:"http://en.wikipedia.org/wiki/Man-in-the-middle_attack",target:"_blank",rel:"noopener noreferrer"}},[s._v('"中间人攻击"'),a("OutboundLink")],1),s._v("（Man-in-the-middle attack）。")]),s._v(" "),a("h2",{attrs:{id:"口令登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#口令登录"}},[s._v("#")]),s._v(" 口令登录")]),s._v(" "),a("p",[s._v("如果你是第一次登录对方主机, 系统会出现下面的提示:")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("The authenticity of host 'host (12.18.429.21)' can't be established."),a("br"),s._v("\nRSA key fingerprint is 98:2e:d7:e0🇩🇪9f:ac:67:28:c2:42:2d:37:16:58:4d."),a("br"),s._v("\nAre you sure you want to continue connecting (yes/no)?")])]),s._v(" "),a("p",[s._v("这段话的意思是, 无法确认 host 主机的真实性, 只知道它的公钥指纹, 问你还想继续连接吗？")]),s._v(" "),a("p",[s._v('所谓"公钥指纹", 是指公钥长度较长（这里采用 RSA 算法, 长达 1024 位）, 很难比对, 所以对其进行 MD5 计算, 将它变成一个 128 位的指纹。上例中是 '),a("code",[s._v("98:2e:d7:e0:de:9f:ac:67:28:c2:42:2d:37:16:58:4d")]),s._v(" , 再进行比较, 就容易多了。")]),s._v(" "),a("p",[s._v("很自然的一个问题就是, 用户怎么知道远程主机的公钥指纹应该是多少？回答是没有好办法, 远程主机必须在自己的网站上贴出公钥指纹, 以便用户自行核对。")]),s._v(" "),a("p",[s._v("假定经过风险衡量以后, 用户决定接受这个远程主机的公钥。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("Are you sure you want to continue connecting (yes/no)? yes")])]),s._v(" "),a("p",[s._v("系统会出现一句提示, 表示 host 主机已经得到认可。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("Warning: Permanently added 'host, 12.18.429.21' (RSA) to the list of known hosts.")])]),s._v(" "),a("p",[s._v("然后, 会要求输入密码。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("Password: (enter password)")])]),s._v(" "),a("p",[s._v("如果密码正确, 就可以登录了。")]),s._v(" "),a("p",[s._v("当远程主机的公钥被接受以后, 它就会被保存在文件 "),a("code",[s._v("$HOME/.ssh/known_hosts")]),s._v(" 之中。下次再连接这台主机, 系统就会认出它的公钥已经保存在本地了, 从而跳过警告部分, 直接提示输入密码。")]),s._v(" "),a("p",[s._v("每个 SSH 用户都有自己的 "),a("code",[s._v("known_hosts")]),s._v(" 文件, 此外系统也有一个这样的文件, 通常是 "),a("code",[s._v("/etc/ssh/ssh_known_hosts")]),s._v(" , 保存一些对所有用户都可信赖的远程主机的公钥。")]),s._v(" "),a("h2",{attrs:{id:"公钥登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#公钥登录"}},[s._v("#")]),s._v(" 公钥登录")]),s._v(" "),a("p",[s._v("使用密码登录, 每次都必须输入密码, 非常麻烦。好在 SSH 还提供了公钥登录, 可以省去输入密码的步骤。")]),s._v(" "),a("p",[s._v('所谓"公钥登录", 原理很简单, 就是用户将自己的公钥储存在远程主机上。登录的时候, 远程主机会向用户发送一段随机字符串, 用户用自己的私钥加 密后, 再发回来。远程主机用事先储存的公钥进行解密, 如果成功, 就证明用户是可信的, 直接允许登录 shell, 不再要求密码。')]),s._v(" "),a("p",[s._v("这种方法要求用户必须提供自己的公钥。如果没有现成的, 可以直接用 ssh-keygen 生成一个:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("运行上面的命令以后, 系统会出现一系列提示, 可以一路回车。其中有一个问题是, 要不要对私钥设置口令（passphrase）, 如果担心私钥的安全, 这里可以设置一个。")]),s._v(" "),a("p",[s._v("运行结束以后, 在 "),a("code",[s._v("$HOME/.ssh/")]),s._v(" 目录下, 会新生成两个文件: "),a("code",[s._v("id_rsa.pub")]),s._v(" 和 "),a("code",[s._v("id_rsa")]),s._v(" 。前者是你的公钥, 后者是你的私钥。")]),s._v(" "),a("p",[s._v("这时再输入下面的命令, 将公钥传送到远程主机 host 上面:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-copy-id "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("好了, 从此你再登录, 就不需要输入密码了。")]),s._v(" "),a("h2",{attrs:{id:"authorized-keys-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorized-keys-文件"}},[s._v("#")]),s._v(" authorized_keys 文件")]),s._v(" "),a("p",[s._v("远程主机将用户的公钥, 保存在登录后的用户主目录的 "),a("code",[s._v("$HOME/.ssh/authorized_keys")]),s._v(" 文件中。公钥就是一段字符串, 只要把它追加在 authorized_keys 文件的末尾就行了。")]),s._v(" "),a("p",[s._v("这里不使用上面的 "),a("code",[s._v("ssh-copy-id")]),s._v(" 命令, 改用下面的命令, 解释公钥的保存过程:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mkdir .ssh && cat >> .ssh/authorized_keys'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ~/.ssh/id_rsa.pub\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这条命令由多个语句组成, 依次分解开来看:")]),s._v(" "),a("ul",[a("li",[a("strong",[a("code",[s._v("ssh [userName]@[hostIP]")])]),s._v(", 表示登录远程主机")]),s._v(" "),a("li",[s._v("单引号中的 "),a("strong",[a("code",[s._v("mkdir .ssh && cat >> .ssh/authorized_keys")])]),s._v(", 表示登录后在远程 shell 上执行的命令")]),s._v(" "),a("li",[a("strong",[a("code",[s._v("mkdir .ssh")])]),s._v(" 的作用是, 如果用户主目录中的 .ssh 目录不存在, 就创建一个")]),s._v(" "),a("li",[a("strong",[a("code",[s._v("cat >> .ssh/authorized_keys' < ~/.ssh/id_rsa.pub")])]),s._v(" 的作用是, 将本地的公钥文件 "),a("code",[s._v("~/.ssh/id_rsa.pub")]),s._v(" , 重定向追加到远程文件 authorized_keys 的末尾。")])]),s._v(" "),a("p",[s._v("写入 authorized_keys 文件后, 公钥登录的设置就完成了。")]),s._v(" "),a("h2",{attrs:{id:"远程操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程操作"}},[s._v("#")]),s._v(" 远程操作")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mkdir .ssh && cat >> .ssh/authorized_keys'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" ~/.ssh/id_rsa.pub\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("单引号中间的部分, 表示在远程主机上执行的操作；后面的输入重定向, 表示数据通过 SSH 传向远程主机。")]),s._v(" "),a("p",[s._v("这就是说, SSH 可以在用户和远程主机之间, 建立命令和数据的传输通道, 因此很多事情都可以通过 SSH 来完成。")]),s._v(" "),a("h3",{attrs:{id:"【例-1】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【例-1】"}},[s._v("#")]),s._v(" 【例 1】")]),s._v(" "),a("p",[s._v("将 "),a("code",[s._v("$HOME/src/")]),s._v(" 目录下面的所有文件, 复制到远程主机的 "),a("code",[s._v("$HOME/src/")]),s._v(" 目录。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" czv src "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tar xz'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"【例-2】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【例-2】"}},[s._v("#")]),s._v(" 【例 2】")]),s._v(" "),a("p",[s._v("将远程主机 "),a("code",[s._v("$HOME/src/")]),s._v(" 目录下面的所有文件, 复制到用户的当前目录。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tar cz src'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xzv\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"【例-3】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【例-3】"}},[s._v("#")]),s._v(" 【例 3】")]),s._v(" "),a("p",[s._v("查看远程主机是否运行进程 httpd。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ps ax grep [h]ttpd'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"绑定本地端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#绑定本地端口"}},[s._v("#")]),s._v(" 绑定本地端口")]),s._v(" "),a("p",[s._v("既然 SSH 可以传送数据, 那么我们可以让那些不加密的网络连接, 全部改走 SSH 连接, 从而提高安全性。")]),s._v(" "),a("p",[s._v("假定我们要让 8080 端口的数据, 都通过 SSH 传向远程主机, 命令就这样写:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -D "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("userName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("SSH 会建立一个 socket, 去监听本地的 8080 端口。一旦有数据传向那个端口, 就自动把它转移到 SSH 连接上面, 发往远程主机。可以想象, 如果 8080 端口原来是一个不加密端口, 现在将变成一个加密端口。")]),s._v(" "),a("h2",{attrs:{id:"本地端口转发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地端口转发"}},[s._v("#")]),s._v(" 本地端口转发")]),s._v(" "),a("p",[s._v('有时, 绑定本地端口还不够, 还必须指定数据传送的目标主机, 从而形成点对点的"端口转发"。为了区别后文的"远程端口转发", 我们把这种情况称为"本地端口转发"（Local forwarding）。')]),s._v(" "),a("p",[s._v("假定 host1 是本地主机, host2 是远程主机。由于种种原因, 这两台主机之间无法连通。但是, 另外还有一台 host3, 可以同时连通前面两台主机。因此, 很自然的想法就是, 通过 host3, 将 host1 连上 host2。")]),s._v(" "),a("p",[s._v("我们在 host1 执行下面的命令:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -L "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2121")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("host2IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":21 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("host3IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('命令中的 L 参数一共接受三个值, 分别是"本地端口: 目标主机: 目标主机端口", 它们之间用冒号分隔。这条命令的意思, 就是指定 SSH 绑定本地端口 2121, 然后指定 host3 将所有的数据, 转发到目标主机 host2 的 21 端口（假定 host2 运行 FTP, 默认端口为 21）。')]),s._v(" "),a("p",[s._v("这样一来, 我们只要连接 host1 的 2121 端口, 就等于连上了 host2 的 21 端口。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ftp")]),s._v(" localhost:2121\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('"本地端口转发"使得 host1 和 host3 之间仿佛形成一个数据传输的秘密隧道, 因此又被称为"SSH 隧道"。')]),s._v(" "),a("h2",{attrs:{id:"远程端口转发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程端口转发"}},[s._v("#")]),s._v(" 远程端口转发")]),s._v(" "),a("p",[s._v('既然"本地端口转发"是指绑定本地端口的转发, 那么"远程端口转发"（remote forwarding）当然是指绑定远程端口的转发。')]),s._v(" "),a("p",[s._v('还是接着看上面那个例子, host1 与 host2 之间无法连通, 必须借助 host3 转发。但是, 特殊情况出现了, host3 是一台内网机器, 它可以连接外网的 host1, 但是反过来就不行, 外网的 host1 连不上内网的 host3。这时, "本地端口转发"就不能用了, 怎么办？')]),s._v(" "),a("p",[s._v("解决办法是, 既然 host3 可以连 host1, 那么就从 host3 上建立与 host1 的 SSH 连接, 然后在 host1 上使用这条连接就可以了。")]),s._v(" "),a("p",[s._v("我们在 host3 执行下面的命令:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -R "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2121")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("host2IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":21 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("host1IP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('R 参数也是接受三个值, 分别是"远程主机端口: 目标主机: 目标主机端口"。这条命令的意思, 就是让 host1 监听它自己的 2121 端口, 然后将所有数据经由 host3, 转发到 host2 的 21 端口。由于对于 host3 来说, host1 是远程主机, 所以这种情况就被称为"远程端口绑定"。')]),s._v(" "),a("p",[s._v("绑定之后, 我们在 host1 就可以连接 host2 了:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ftp")]),s._v(" localhost:2121\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('这里必须指出, "远程端口转发"的前提条件是, host1 和 host3 两台主机都有 sshD 和 ssh 客户端。')]),s._v(" "),a("h2",{attrs:{id:"shh-的其他参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shh-的其他参数"}},[s._v("#")]),s._v(" SHH 的其他参数")]),s._v(" "),a("p",[s._v("SSH 还有一些别的参数, 也值得介绍。")]),s._v(" "),a("p",[s._v("N 参数, 表示只连接远程主机, 不打开远程 shell；T 参数, 表示不为这个连接分配 TTY。这个两个参数可以放在一起用, 代表这个 SSH 连接只用来传数据, 不执行远程操作。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -NT -D "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("f 参数, 表示 SSH 连接成功后, 转入后台运行。这样一来, 你就可以在不中断 SSH 连接的情况下, 在本地 shell 中执行其他操作。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -f -D "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostIP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("要关闭这个后台连接, 就只有用 kill 命令去杀掉进程。")])])}),[],!1,null,null,null);t.default=n.exports}}]);