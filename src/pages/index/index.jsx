import { memo } from 'react';
import { View } from '@tarojs/components';
import classNames from 'classnames';

import style from './index.module.scss';

const Index = () => {
  return <View className={classNames(style.page)}>xxxxxx</View>;
};

export default memo(Index);
