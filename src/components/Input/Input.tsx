import React, { KeyboardEvent } from 'react';
import classNames from 'classnames';
import { Input as AntdInput } from 'antd';

import { TInputProps } from '@/components/Input/Input.types';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './Input.scss';

const Input: React.FC<TInputProps> = ({
  className,
  type,
  size,
  placeholder,
  prefix,
  suffix,
  readOnly,
  onChange,
  onEnter,
  value,
}) => {
  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      onEnter?.();
    }
  };

  const commonProps = {
    type,
    size,
    placeholder,
    value,
    readOnly,
    prefix: prefix && <div className="Input-prefix">{prefix}</div>,
    suffix: suffix && <div className="Input-suffix">{suffix}</div>,
    onChange,
    onKeyDown: handleKeydown,
  };

  return (
    <div className={classNames('Input', className, { affix: suffix || prefix })}>
      {type === 'password' ? (
        <AntdInput.Password
          {...commonProps}
          iconRender={(visible): React.ReactNode => (
            <div>
              <Icon
                className="cursor-pointer"
                name={visible ? EIconName.EyeClosed : EIconName.Eye}
                color={EIconColor.COD_GRAY}
              />
            </div>
          )}
        />
      ) : (
        <AntdInput {...commonProps} />
      )}
    </div>
  );
};

export default Input;
