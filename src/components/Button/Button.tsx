import React from 'react';
import { Button as AntdButton } from 'antd';
import classNames from 'classnames';
import { navigate } from '@reach/router';

import Icon from '@/components/Icon';
import { TButtonProps } from './Button.types';

import './Button.scss';

const Button: React.FC<TButtonProps> = ({
  className,
  size,
  iconName,
  shadow = true,
  iconColor,
  type,
  htmlType,
  title,
  danger,
  reverse,
  link,
  state,
  disabled,
  loading,
  fontWeight,
  titleColor,
  backgroundColor,
  borderColor,
  onClick,
}) => {
  const handleClickButton = (): void => {
    if (link) navigate(link, { state });
    else onClick?.();
  };
  return (
    <div className={classNames('Button', className, { shadow, 'only-icon': !title && iconName, reverse })}>
      <AntdButton
        size={size}
        type={type}
        htmlType={htmlType}
        onClick={handleClickButton}
        danger={danger}
        disabled={disabled}
        loading={loading}
        style={{ backgroundColor, borderColor }}
      >
        {iconName && (
          <div className="Button-icon">
            <Icon name={iconName} color={iconColor} />
          </div>
        )}
        {title && (
          <span className="Button-title" style={{ fontWeight, color: titleColor }}>
            {title}
          </span>
        )}
      </AntdButton>
    </div>
  );
};

export default Button;
