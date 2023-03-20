import React, { useEffect, useState } from 'react';
import { Avatar as AntdAvatar } from 'antd';
import classNames from 'classnames';

import ImageAvatarDefault from '@/assets/images/image-avatar-default.svg';

import { TAvatarProps } from './Avatar.types';
import './Avatar.scss';

const Avatar: React.FC<TAvatarProps> = ({ image, size, className }) => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [image]);

  return (
    <div className={classNames('Avatar', className)}>
      <AntdAvatar
        size={size}
        src={isError || image ? ImageAvatarDefault : image || ImageAvatarDefault}
        onError={(): boolean => {
          setIsError(true);
          return true;
        }}
      />
    </div>
  );
};

export default Avatar;
