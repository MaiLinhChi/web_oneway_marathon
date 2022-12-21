import React from 'react';

import { Spin } from 'antd';

import { TLoadingProps } from './Loading.types';
import './Loading.scss';

const Loading: React.FC<TLoadingProps> = () => {
  return (
    <div className="Loading flex items-center justify-center">
      <Spin />
    </div>
  );
};

export default Loading;
