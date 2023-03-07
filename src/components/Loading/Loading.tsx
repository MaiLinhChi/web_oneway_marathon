import React from 'react';

import { Skeleton } from 'antd';

import { TLoadingProps } from './Loading.types';
import './Loading.scss';

const Loading: React.FC<TLoadingProps> = () => {
  return (
    <div className="Loading" style={{ height: '100vh' }}>
      <Skeleton active avatar />
      <Skeleton active avatar />
      <Skeleton active avatar />
      <Skeleton active avatar />
      <Skeleton active avatar />
      <Skeleton active avatar />
      <Skeleton active avatar />
      <Skeleton active avatar />
      <Skeleton active avatar />
    </div>
  );
};

export default Loading;
