(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{496:function(t,s,v){"use strict";v.r(s);var a=v(4),_=Object(a.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",[t._v("本篇是 Liunx 的学习笔记系列第二篇, 这一篇将介绍 vim 的使用技巧。vim 是一款终端编辑器, 是由 vi 演变而来的, 它与 vi 最大的区别是, vim 拥有代码高亮, 其他操作都是共用的")])]),t._v(" "),v("h2",{attrs:{id:"vim-常用操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vim-常用操作"}},[t._v("#")]),t._v(" vim 常用操作")]),t._v(" "),v("h3",{attrs:{id:"打开文件操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#打开文件操作"}},[t._v("#")]),t._v(" 打开文件操作")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("vi")])]),t._v(" "),v("td",[t._v("进入 vi 而不读入任何文件")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("vi [fileName]")])]),t._v(" "),v("td",[t._v("进入 vi 并读入指定名称的文件（新、旧文件均可）。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("vi +n [fileName]")])]),t._v(" "),v("td",[t._v("进入 vi 并且由文件的第几行开始。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("vi + [fileName]")])]),t._v(" "),v("td",[t._v("进入 vi 并且由文件的最后一行开始。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("vi +/pattern [fileName]")])]),t._v(" "),v("td",[t._v("打开文件, 并将光标置于第一个与 pattern 匹配的串处")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("vi [fileName]....[fileName]")])]),t._v(" "),v("td",[t._v("打开多个文件, 依次进行编辑")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("vi -r [fileName]")])]),t._v(" "),v("td",[t._v("在上次正用 vi 编辑时发生系统崩溃, 恢复 [fileName]")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("vimdiff fileA fileB")])]),t._v(" "),v("td",[t._v("比较编辑两个不同的文件")])])])]),t._v(" "),v("h3",{attrs:{id:"vim-操作模式转换图"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vim-操作模式转换图"}},[t._v("#")]),t._v(" vim 操作模式转换图")]),t._v(" "),v("p",[v("img",{attrs:{src:"http://oss-blog.test.upcdn.net/liunx-vim.png",alt:"vim 操作模式转换图"}})]),t._v(" "),v("h3",{attrs:{id:"插入命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#插入命令"}},[t._v("#")]),t._v(" 插入命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("a")])]),t._v(" "),v("td",[t._v("在光标所在行行尾插入")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("i")])]),t._v(" "),v("td",[t._v("在光标所在字符前插入")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("I")])]),t._v(" "),v("td",[t._v("在光标所在行行首插入")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("o")])]),t._v(" "),v("td",[t._v("在光标下插入新行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("O")])]),t._v(" "),v("td",[t._v("在光标上插入新行")])])])]),t._v(" "),v("h3",{attrs:{id:"定位命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定位命令"}},[t._v("#")]),t._v(" 定位命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v(":set nu")])]),t._v(" "),v("td",[t._v("设置行号")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":set nonu")])]),t._v(" "),v("td",[t._v("取消行号")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("gg")])]),t._v(" "),v("td",[t._v("到第一行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("G")])]),t._v(" "),v("td",[t._v("到最后一行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("nG")])]),t._v(" "),v("td",[t._v("到第 n 行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":n")])]),t._v(" "),v("td",[t._v("到第 n 行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("$")])]),t._v(" "),v("td",[t._v("光标移至行尾")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("0")])]),t._v(" "),v("td",[t._v("光标移至行首")])])])]),t._v(" "),v("h3",{attrs:{id:"删除命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#删除命令"}},[t._v("#")]),t._v(" 删除命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("x")])]),t._v(" "),v("td",[t._v("删除光标所在处字符")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("nx")])]),t._v(" "),v("td",[t._v("删除光标所在处后 n 个字符")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("dd")])]),t._v(" "),v("td",[t._v("删除光标所在行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ndd")])]),t._v(" "),v("td",[t._v("删除 n 行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("dG")])]),t._v(" "),v("td",[t._v("删除光标所在行到文件末尾内容")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("D")])]),t._v(" "),v("td",[t._v("删除光标所在处至行尾内容")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":n1, n2d")])]),t._v(" "),v("td",[t._v("删除第 n1 行到第 n2 行")])])])]),t._v(" "),v("h3",{attrs:{id:"复制和剪切命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复制和剪切命令"}},[t._v("#")]),t._v(" 复制和剪切命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("yy")])]),t._v(" "),v("td",[t._v("复制当前行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("nyy")])]),t._v(" "),v("td",[t._v("复制当前行（包含当前行）以下 n 行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("dd")])]),t._v(" "),v("td",[t._v("剪切当前行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ndd")])]),t._v(" "),v("td",[t._v("剪切当前行（包含当前行）以下 n 行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("p")])]),t._v(" "),v("td",[t._v("粘贴在当前光标所在行的下一行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("P")])]),t._v(" "),v("td",[t._v("粘贴在当前光标所在行的上一行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("nyl")])]),t._v(" "),v("td",[t._v("复制 n 个字符")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("yw")])]),t._v(" "),v("td",[t._v("复制一个单词")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("y$")])]),t._v(" "),v("td",[t._v("复制从当前位置到行尾")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("yG")])]),t._v(" "),v("td",[t._v("复制从所在行到最后一行")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":n1, n2 co n3")])]),t._v(" "),v("td",[t._v("将 n1 行到 n2 行之间的内容拷贝到第 n3+1 行【n3 行的下一行】")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":n1, n2 m n3")])]),t._v(" "),v("td",[t._v("将 n1 行到 n2 行之间的内容移至到第 n3 行下")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("J")])]),t._v(" "),v("td",[t._v("把下一行的数据连接到本行之后")])])])]),t._v(" "),v("h3",{attrs:{id:"替换和取消命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#替换和取消命令"}},[t._v("#")]),t._v(" 替换和取消命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("r")])]),t._v(" "),v("td",[t._v("取代光标所在处字符")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("R")])]),t._v(" "),v("td",[t._v("从光标所在处开始替换字符, 按 Esc 结束")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("u")])]),t._v(" "),v("td",[t._v("取消上一步操作")])])])]),t._v(" "),v("h3",{attrs:{id:"搜索和搜索替换命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#搜索和搜索替换命令"}},[t._v("#")]),t._v(" 搜索和搜索替换命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("/string")])]),t._v(" "),v("td",[t._v("搜索指定字符串")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":set ic")])]),t._v(" "),v("td",[t._v("搜索时忽略大小写")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":set noic")])]),t._v(" "),v("td",[t._v("取消搜索时忽略大小写")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("n")])]),t._v(" "),v("td",[t._v("搜索指定字符串的下一个出现位置（即同方向）")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("N")])]),t._v(" "),v("td",[t._v("在反方向上重复上一次搜索命令")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":%s/old/new/g")])]),t._v(" "),v("td",[t._v("全文替换指定字符串；需要替换询问时, g 改成 c")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":n1, n2s/old/new/g")])]),t._v(" "),v("td",[t._v("在一定方位范围内替换指定字符串；需要替换询问时, g 改成 c")])])])]),t._v(" "),v("h3",{attrs:{id:"保存和退出命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#保存和退出命令"}},[t._v("#")]),t._v(" 保存和退出命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("作用")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v(":w")])]),t._v(" "),v("td",[t._v("保存修改")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":w /[path]/[fileName]")])]),t._v(" "),v("td",[t._v("另存为指定文件")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":wq")]),t._v(", "),v("strong",[t._v(":x")])]),t._v(" "),v("td",[t._v("保存修改并退出")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ZZ")])]),t._v(" "),v("td",[t._v("快捷键, 保存修改并退出")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":q!")])]),t._v(" "),v("td",[t._v("不保存修改并退出")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":wq!")])]),t._v(" "),v("td",[t._v("保存修改并退出（文件所有者及 root 可使用, 通常在文件无写权限下使用）")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":n1, n2 w ! command")])]),t._v(" "),v("td",[t._v("将文件中 n1 行至 n2 行的内容作为 command 的输入并执行之, 若不指定 n1, n2, 则表示将整个文件内容作为 command 的输入【注意空格】例如 "),v("code",[t._v(":1,4 w! grep tom")])])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":!command")])]),t._v(" "),v("td",[t._v("暂时退出 vi 并执行 shell 指令, 执行完毕后再回到 vi。【后期应该有用】")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":r!command")])]),t._v(" "),v("td",[t._v("将命令 command 的输出结果放到当前行【强大】")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":sh")])]),t._v(" "),v("td",[t._v("暂时退出 vi 到系统下, 结束时按 "),v("code",[t._v("Ctrl + d")]),t._v(" 则回到 vi。")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":e [fileName]")])]),t._v(" "),v("td",[t._v("打开文件 [fileName] 进行编辑【相当于退出当前的并打开另一个文件】")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":e!")])]),t._v(" "),v("td",[t._v("放弃修改文件内容, 重新载入该文件编辑")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v(":w !sudo tee %")])]),t._v(" "),v("td",[t._v("以普通用户身份打开的 vim , 修改后以 root 身份保存")])])])]),t._v(" "),v("h2",{attrs:{id:"vim-使用技巧"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vim-使用技巧"}},[t._v("#")]),t._v(" vim 使用技巧")]),t._v(" "),v("h3",{attrs:{id:"导入文件内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#导入文件内容"}},[t._v("#")]),t._v(" 导入文件内容")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v(":r /"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("path"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fileName"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("h3",{attrs:{id:"导入命令执行结果"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#导入命令执行结果"}},[t._v("#")]),t._v(" 导入命令执行结果")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v(":r "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("command\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("h3",{attrs:{id:"寻找命令所在目录"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#寻找命令所在目录"}},[t._v("#")]),t._v(" 寻找命令所在目录")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v(":"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("which "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("h3",{attrs:{id:"定义快捷键"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#定义快捷键"}},[t._v("#")]),t._v(" 定义快捷键")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v(":map ^P I"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#<ESC>      # 按 Ctrl+P 组合键用 # 注释当前行")]),t._v("\n:map ^B 0x         "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按 Ctrl+B 组合键删除当前行的注释")]),t._v("\n:map ^H istring"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ESC"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按 Ctrl+H 组合键在光标所在位置插入字符串")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br")])]),v("div",{staticClass:"custom-block tip"},[v("p",[t._v(":map 定义快捷键时, 按 Ctrl+V+key 定义快捷键；:map 定义的快捷键, 重启或关机失效")])]),t._v(" "),v("h3",{attrs:{id:"连续行注释"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#连续行注释"}},[t._v("#")]),t._v(" 连续行注释")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v(":n1,n2s/^/"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#/g     # 在 n1 行到 n2 行首添加注释 #")]),t._v("\n:n1,n2s/^"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#//g     # 在 n1 行到 n2 行首删除注释 #")]),t._v("\n:n1,n2s/^/"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("//g   "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 n1 行到 n2 行首添加注释 //")]),t._v("\n:n1,n2s/^"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("//g    "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 n1 行到 n2 行首删除注释 //")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br")])]),v("h3",{attrs:{id:"替换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#替换"}},[t._v("#")]),t._v(" 替换")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v(":ab string1 string2    "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输入 string1 将会被替换成 string2")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("h3",{attrs:{id:"编辑模式命令-永久生效"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编辑模式命令-永久生效"}},[t._v("#")]),t._v(" 编辑模式命令, 永久生效")]),t._v(" "),v("p",[v("code",[t._v("普通")]),t._v(" 用户")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /home/"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("userName"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("/.vimrc\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[v("code",[t._v("root")]),t._v(" 用户")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /root/.vimrc\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("添加类似于以下命令代码, 无需添加 :")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" nu\nmap ^P I"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#<ESC>")]),t._v("\nab "),v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" this is test,this is test,this is test.\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br")])])])}),[],!1,null,null,null);s.default=_.exports}}]);