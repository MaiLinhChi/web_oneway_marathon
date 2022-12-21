import React from 'react';
import classNames from 'classnames';

import { TIconProps } from './Icon.types';
import { EIconName } from './Icon.enums';
import './Icon.scss';

import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Google from './Google';
import Facebook from './Facebook';
import Eye from './Eye';
import EyeClosed from './EyeClosed';

const Icon: React.FC<TIconProps> = ({ name, className, color, onClick }) => {
  const renderIcon = (): React.ReactElement => {
    switch (name) {
      case EIconName.ArrowLeft:
        return <ArrowLeft color={color} />;
      case EIconName.ArrowRight:
        return <ArrowRight color={color} />;
      case EIconName.Google:
        return <Google color={color} />;
      case EIconName.Facebook:
        return <Facebook color={color} />;
      case EIconName.Eye:
        return <Eye color={color} />;
      case EIconName.EyeClosed:
        return <EyeClosed color={color} />;
      default:
        return <></>;
    }
  };

  return (
    <div className={classNames('Icon', 'flex', 'justify-center', 'items-center', className)} onClick={onClick}>
      {renderIcon()}
    </div>
  );
};

export default Icon;
