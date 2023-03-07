import React from 'react';
import { Empty as AntdEmpty } from 'antd';

import { TEmptyProps } from './Empty.types.d';
import './Empty.scss';

const Empty: React.FC<TEmptyProps> = ({ style, description }) => {
  return (
    <div className="Empty" style={style}>
      <AntdEmpty description={description} />
    </div>
  );
};

export default Empty;
