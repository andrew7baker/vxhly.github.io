module.exports = {
  "title": "Coding and Fixing",
  "description": "源于生活而高于生活",
  "dest": "public",
  "GAID": "135391925",
  "base": "/",
  "head": [
    ["link", {
      "rel": "shortcut icon",
      "href": "/favicon.ico"
    }],
    ["link", {
      "rel": "manifest",
      "href": "/manifest.json"
    }],
    ["meta", {
      "name": "theme-color",
      "content": "#22979b"
    }],
    ["meta", {
      "name": "apple-mobile-web-app-capable",
      "content": "yes"
    }],
    ["meta", {
      "name": "apple-mobile-web-app-status-bar-style",
      "content": "#22979b"
    }],
    ["link", {
      "rel": "apple-touch-icon",
      "href": "/icons/apple-touch-icon-152x152.png"
    }],
    ["link", {
      "rel": "mask-icon",
      "href": "/icons/safari-pinned-tab.svg",
      "color": "#2c2c2c"
    }],
    ["meta", {
      "name": "msapplication-TileImage",
      "content": "/icons/msapplication-icon-144x144.png"
    }],
    ["meta", {
      "name": "msapplication-TileColor",
      "content": "#000000"
    }],
    ["meta", {
      "name": "viewport",
      "content": "width=device-width,initial-scale=1,user-scalable=no"
    }]
  ],
  "theme": "reco",
  "themeConfig": {
    "smoothScroll": true,
    "themePicker": false,
    // "vssueConfig": {
    //   "platform": 'github',
    //   "owner": 'vxhly',
    //   "repo": 'blog-comments',
    //   "clientId": 'e5723fcb7bd57d3700f4',
    //   "clientSecret": '55e07b73fdff6320851973f9c8f31e54298c95c4',
    // },
    // "valineConfig": {
    //   "appId": "bplAa0Fmk0scSFweIQkW1zlG-gzGzoHsz",
    //   "appKey": "kOFtniD34zTlLvSdftu62aKu",
    //   "placeholder": "文明发言, 您的支持将是我继续下去的动力...",
    //   "notify": true,
    //   "verify": true,
    //   "visitor": true
    // },
    "nav": [{
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "Project",
        "link": "/project/",
        "icon": "iconfont icon-project"
      },
      {
        "text": 'TimeLine',
        "link": '/timeLine/',
        "icon": 'reco-date'
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [{
            "text": "NPM",
            "link": "https://www.npmjs.com/~vxhly",
            "icon": "reco-npm"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/vxhly",
            "icon": "reco-github"
          },
          {
            "text": "Gmail",
            "link": "mailto:pengchengou@gmail.com",
            "icon": "iconfont icon-Gmail"
          },
          {
            "text": "Liunx Command",
            "link": "https://man.linuxde.net/",
            "icon": "iconfont icon-link"
          },
          {
            "text": "CSS 2 SASS/SCSS",
            "link": "https://css2sass.herokuapp.com/",
            "icon": "iconfont icon-link"
          },
          {
            "text": "BootCDN",
            "link": "https://www.bootcdn.cn/",
            "icon": "iconfont icon-link"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/favicon.ico",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "星火燎原@vxhly",
    "record": "",
    "startYear": "2016"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    ['vuepress-plugin-smooth-scroll'],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ],
    ["@vuepress/medium-zoom", {
      "selector": ".page img",
      "options": {
        "margin": 16,
        "background": "#202124de",
        "scrollOffset": 0
      }
    }],
    ["@vuepress/pwa", {
      "serviceWorker": true,
      "updatePopup": true
    }],
    require("./plugins/clipboard-copy/clipboard-copy"),
    ["nest", {
      "color": "255,0,255",
      "count": 100,
      "opacity": 0.7
    }],
    ["copyright", {
      "noCopy": true,
      "minLength": 150,
      "disabled": false,
      "noSelect": true
    }],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang", {
        "theme": ["shizuku"],
        "messages": {
          "home": "准备好回家了吗？要起航了!",
          "close": "讨厌啦！真的要离开我吗？"
        },
        "messageStyle": {
          "position": 'fixed',
          "right": '125px',
          "bottom": '235px',
          "opacity": '0.75',
          "height": "max-content",
          "width": "200px",
          "fon-szie": "16px"
        },
        "modelStyle": {
          "position": 'fixed',
          "right": '90px',
          "bottom": '-20px',
          "opacity": '1'
        },
        "width": 216,
        "height": 281.6
      }
    ]
    // require("./plugins/kesshouban/index")
  ]
}