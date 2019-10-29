/* global SELECTOR */

import './style.css'

import {
  message
} from 'ant-design-vue'
import 'ant-design-vue/lib/message/style/css'
message.config({
  top: `100px`,
})

export default {
  data() {
    return {
      zoom: null
    }
  },
  mounted() {
    this.updateCopy()
  },

  updated() {
    this.updateCopy()
  },

  methods: {
    updateCopy() {
      setTimeout(() => {
        document.querySelectorAll(COPY_SELECTOR).forEach(this.generateCopyButton)
        document.querySelectorAll(COPY_ASIDE).forEach(this.generateCopyButton)
      }, 1000)
    },
    generateCopyButton: function (parent) {
      if (parent.classList.contains('codecopy-enabled')) return
      const copyElement = document.createElement('span')
      copyElement.className = 'code-copy iconfont reco-api'
      copyElement.title = 'Click to Copy to Clipboard'
      copyElement.addEventListener('click', () => {
        this.copyToClipboard(parent.innerText)
      })
      parent.appendChild(copyElement)
      parent.classList.add('codecopy-enabled')
    },
    copyToClipboard: function (str) {
      const el = document.createElement('textarea')
      el.value = str
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      const selected =
        document.getSelection().rangeCount > 0 ?
        document.getSelection().getRangeAt(0) :
        false
      el.select()
      document.execCommand('copy')
      message.success('复制成功，快去粘贴使用吧 !!!')
      document.body.removeChild(el)
      if (selected) {
        document.getSelection().removeAllRanges()
        document.getSelection().addRange(selected)
      }
    }
  }
}