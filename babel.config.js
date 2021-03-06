// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: false,
      loose: false,
      useBuiltIns: process.env.TARO_ENV === 'h5' ? 'usage' : false,
      // "corejs": 3,
      targets: {
        ios: '8',
        android: '4'
      }
    }]
  ]
}
