import React from 'react';
import { Affix } from 'antd';
import classNames from 'classnames';

import { TStickyBlockProps } from './StickyBlock.types.d';
import './StickyBlock.scss';

const StickyBlock: React.FC<TStickyBlockProps> = ({ className, offsetTop, children }) => {
  return (
    <Affix className={classNames('StickyBlock', className)} offsetTop={offsetTop}>
      {children}
    </Affix>
  );
};

export default StickyBlock;
