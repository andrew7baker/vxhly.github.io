const {
  resolve
} = require('path')

module.exports = (options, context) => ({
  define: {
    COPY_SELECTOR: options.copy_selector || 'div[class*="language-"] pre',
    COPY_ASIDE: options.copy_selector || 'div[class*="aside-code"] aside'
  },
  clientRootMixin: resolve(__dirname, 'clientRootMixin.js')
})
