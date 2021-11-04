// import {  } from './config/config';

const config = (() => {
  // 添加h5页面时需在 ./config/config.js 里配置 H5_CUSTOM_ROUTES
  const _pages = ['pages/index/index', 'pages/my/index'];
  const _subpackages = [];

  switch (process.env.TARO_ENV) {
    case 'weapp':
      return {
        pages: [..._pages],
        subpackages: [..._subpackages],
      };
    case 'h5':
      return {
        pages: [],
        subpackages: [],
      };
    default:
      return {
        pages: [..._pages],
        subpackages: [..._subpackages],
      };
  }
})();

export default {
  ...config,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
};
