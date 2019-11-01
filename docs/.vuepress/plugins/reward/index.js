const {
  resolve
} = require('path')

module.exports = (options, context) => ({
  define() {
    const {
      btnText,
      title,
      subTitle,
      rewardOption,
      showInHome
    } = options
    return {
      BTN_TEXT: btnText || '打赏',
      TITLE: title || '给作者赏一杯咖啡吧',
      SUB_TITLE: subTitle || '您的支持将是我继续更新下去的动力',
      REWARD_OPTION: rewardOption || [],
      SHOW_IN_HOME: showInHome || false
    }
  },
  name: '@vuepress-reco/vuepress-plugin-reward',
  enhanceAppFiles: resolve(__dirname, './bin/enhanceAppFile.js'),
  globalUIComponents: 'Reward'
})